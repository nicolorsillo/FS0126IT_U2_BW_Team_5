const params = new URLSearchParams(window.location.search)
const albumId = params.get("id")

fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${albumId}`)
  .then((res) => res.json())
  .then((album) => {
    document.querySelector("h1").textContent = album.title
    document.querySelector(".album-main-cover").src = album.cover_xl
    document.querySelector(".artist-avatar").src = album.artist.picture_small
    document.querySelector(".artist-name").textContent = album.artist.name
    document.querySelector(".album-year").textContent = new Date(
      album.release_date,
    ).getFullYear()
    document.querySelector(".album-meta").textContent =
      `${album.nb_tracks} brani, ${Math.floor(album.duration / 60)} min ${album.duration % 60} sec.`

    document.querySelectorAll(".artist-name").forEach((el) => {
      el.textContent = album.artist.name
    })

    const tbody = document.querySelector("tbody")
    tbody.innerHTML = ""

    album.tracks.data.forEach((track, index) => {
      const minutes = Math.floor(track.duration / 60)
      const seconds = String(track.duration % 60).padStart(2, "0")
      const rank = track.rank ? Number(track.rank).toLocaleString("it-IT") : "—"

      const mobileRow = document.createElement("div")
      mobileRow.className =
        "d-lg-none d-flex justify-content-between align-items-center w-100 mb-3"
      mobileRow.setAttribute("data-track-index", index)
      mobileRow.style.cursor = "pointer"
      mobileRow.innerHTML = `
    <div class="d-flex align-items-center gap-3">
      <div>
        <div class="fw-semibold">${track.title}</div>
        <div class="small text-white-50">${album.artist.name}</div>
      </div>
    </div>
    <i class="bi bi-three-dots-vertical text-white-50 fs-3"></i>
  `

      const desktopRow = document.createElement("tr")
      desktopRow.className = "d-none d-lg-table-row"
      desktopRow.setAttribute("data-track-index", index)
      desktopRow.style.cursor = "pointer"
      desktopRow.innerHTML = `
    <td class="text-white-50 text-end">${index + 1}</td>
    <td>
      <div class="fw-semibold">${track.title}</div>
      <div class="small text-white-50">${album.artist.name}</div>
    </td>
    <td class="text-end text-white-50">${rank}</td>
    <td class="text-end pe-4 text-white-50">${minutes}:${seconds}</td>
  `

      const playHandler = () => playTrack(track, index)
      mobileRow.addEventListener("click", playHandler)
      desktopRow.addEventListener("click", playHandler)

      tbody.appendChild(mobileRow)
      tbody.appendChild(desktopRow)
    })

    document
      .getElementById("backBtn")
      ?.addEventListener("click", () => window.history.back())
    document
      .getElementById("forwardBtn")
      ?.addEventListener("click", () => window.history.forward())

    initAudioPlayer(album)
  })
  .catch((err) => console.error("Errore fetch album:", err))

function initAudioPlayer(album) {
  let currentAudio = null
  let currentTrackIndex = null
  let progressInterval = null

  function updatePlayerBar(track) {
    const desktopBar = document.querySelector(
      "nav.fixed-bottom.d-lg-flex .col-4:first-child",
    )
    if (desktopBar) {
      const img = desktopBar.querySelector("img")
      if (img) img.src = album.cover_small || "./assets/imgs/main/image-1.jpg"

      const title = desktopBar.querySelector(".fw-bold.small")
      if (title) title.textContent = track.title

      const artist = desktopBar.querySelector(".text-muted.small")
      if (artist) artist.textContent = album.artist.name
    }

    const mobileTitle = document.querySelector(
      "nav.position-fixed .fw-bold.small",
    )
    const mobileArtist = document.querySelector(
      "nav.position-fixed .text-muted.small",
    )

    if (mobileTitle) mobileTitle.textContent = track.title
    if (mobileArtist) mobileArtist.textContent = album.artist.name
  }

  function setPlayingState(isPlaying) {
    const desktopBtn = document.querySelector("nav.fixed-bottom .btn-light")
    if (desktopBtn) {
      desktopBtn.innerHTML = isPlaying
        ? `<i class="bi bi-pause-fill fs-3"></i>`
        : `<i class="bi bi-play-fill fs-3"></i>`
    }

    const mobileIcon = document.querySelector(
      "nav.position-fixed .bi-play-fill, nav.position-fixed .bi-pause-fill",
    )
    if (mobileIcon) {
      mobileIcon.className = isPlaying ? "bi bi-pause-fill" : "bi bi-play-fill"
    }
  }
  document
    .querySelector("nav.fixed-bottom .bi-skip-end-fill")
    ?.closest("button")
    ?.addEventListener("click", () => {
      if (currentTrackIndex !== null) {
        const next = album.tracks.data[currentTrackIndex + 1]
        if (next) playTrack(next, currentTrackIndex + 1)
      }
    })

  document
    .querySelector("nav.fixed-bottom .bi-skip-start-fill")
    ?.closest("button")
    ?.addEventListener("click", () => {
      if (currentTrackIndex !== null && currentTrackIndex > 0) {
        playTrack(
          album.tracks.data[currentTrackIndex - 1],
          currentTrackIndex - 1,
        )
      }
    })
  function playTrack(track, index) {
    console.log("Riproduzione:", track.title, track.preview)

    if (currentAudio) {
      currentAudio.pause()
      clearInterval(progressInterval)
      currentAudio = null
    }

    if (currentTrackIndex === index) {
      currentTrackIndex = null
      setPlayingState(false)
      highlightRow(-1)
      return
    }

    currentTrackIndex = index
    currentAudio = new Audio(track.preview)

    currentAudio
      .play()
      .then(() => {
        setPlayingState(true)
        updatePlayerBar(track)
      })
      .catch((err) => console.error("Errore play():", err))

    const onEnded = () => {
      currentTrackIndex = null
      setPlayingState(false)
      clearInterval(progressInterval)
      highlightRow(-1)

      const next = album.tracks.data[index + 1]
      if (next) {
        playTrack(next, index + 1)
      }
    }

    currentAudio.addEventListener("ended", onEnded)
  }

  const allRows = document.querySelectorAll("[data-track-index]")
  allRows.forEach((row) => {
    const trackIndex = parseInt(row.getAttribute("data-track-index"))
    const track = album.tracks.data[trackIndex]

    const newRow = row.cloneNode(true)
    row.parentNode.replaceChild(newRow, row)

    newRow.addEventListener("click", (e) => {
      if (
        e.target.tagName === "I" &&
        e.target.classList.contains("bi-three-dots-vertical")
      ) {
        return
      }
      playTrack(track, trackIndex)
    })
  })
}
