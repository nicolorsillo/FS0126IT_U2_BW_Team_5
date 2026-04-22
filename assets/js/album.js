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
  const volumeFill = document.querySelector(".col-4:last-child .progress-bar")
  const volumeBar = document.querySelector(".col-4:last-child .progress")

  volumeBar.addEventListener("click", function (evento) {
    const larghezzaBarra = volumeBar.offsetWidth
    const posizioneClick =
      evento.clientX - volumeBar.getBoundingClientRect().left
    const percentuale = posizioneClick / larghezzaBarra
    volumeFill.style.width = percentuale * 100 + "%"
    if (currentAudio !== null) {
      currentAudio.volume = percentuale
    }
  })

  function updatePlayerBar(track) {
    const titoloDesktop = document.querySelector(
      "nav.fixed-bottom.d-lg-flex .fw-bold.small",
    )
    if (titoloDesktop !== null) {
      titoloDesktop.textContent = track.title
    }

    const artistaDesktop = document.querySelector(
      "nav.fixed-bottom.d-lg-flex .text-muted.small",
    )
    if (artistaDesktop !== null) {
      artistaDesktop.textContent = album.artist.name
    }
    const copertina = document.querySelector("nav.fixed-bottom.d-lg-flex img")
    if (copertina !== null) {
      if (album.cover_small) {
        copertina.src = album.cover_small
      } else {
        copertina.src = "./assets/imgs/main/image-1.jpg"
      }
    }

    const titoloMobile = document.querySelector(
      "nav.position-fixed .fw-bold.small",
    )
    if (titoloMobile !== null) {
      titoloMobile.textContent = track.title
    }

    const artistaMobile = document.querySelector(
      "nav.position-fixed .text-muted.small",
    )
    if (artistaMobile !== null) {
      artistaMobile.textContent = album.artist.name
    }

    const tuttiITitoli = document.querySelectorAll(
      "[data-track-index] .fw-bold",
    )
    tuttiITitoli.forEach(function (titolo) {
      titolo.classList.remove("text-primary")
    })

    const rigaAttiva = document.querySelector(
      "[data-track-index='" + currentTrackIndex + "'] .fw-bold",
    )
    if (rigaAttiva !== null) {
      rigaAttiva.classList.add("text-primary")
    }
  }

  function setPlayingState(produrre) {
    const bottoneDesktop = document.querySelector("nav.fixed-bottom .btn-light")
    if (produrre === true) {
      bottoneDesktop.innerHTML = '<i class="bi bi-pause-fill fs-3"></i>'
    } else {
      bottoneDesktop.innerHTML = '<i class="bi bi-play-fill fs-3"></i>'
    }
    const tutteLeIcone = document.querySelectorAll(
      ".playAudio i, nav.position-fixed .bi-play-fill, nav.position-fixed .bi-pause-fill",
    )
    tutteLeIcone.forEach(function (icona) {
      if (produrre === true) {
        icona.className = "bi bi-pause-fill fs-1"
      } else {
        icona.className = "bi bi-play-fill fs-1"
      }
    })
  }

  function togglePlayPause() {
    if (currentAudio === null) {
      playTrack(album.tracks.data[0], 0)
      return
    }

    if (currentAudio.paused === true) {
      currentAudio.play().then(function () {
        setPlayingState(true)
      })
    } else {
      currentAudio.pause()
      setPlayingState(false)
    }
  }

  function playTrack(traccia, indice) {
    if (currentAudio !== null) {
      currentAudio.pause()
      currentAudio = null
    }

    if (currentTrackIndex === indice) {
      currentTrackIndex = null
      setPlayingState(false)
      return
    }

    currentTrackIndex = indice

    currentAudio = new Audio(traccia.preview)

    const volumeAttuale = parseFloat(volumeFill.style.width) / 100
    if (volumeAttuale) {
      currentAudio.volume = volumeAttuale
    } else {
      currentAudio.volume = 1
    }

    currentAudio.play().then(function () {
      setPlayingState(true)
      updatePlayerBar(traccia)
    })
    currentAudio.addEventListener("ended", function () {
      currentTrackIndex = null
      setPlayingState(false)

      const tracciaSucessiva = album.tracks.data[indice + 1]
      if (tracciaSucessiva) {
        playTrack(tracciaSucessiva, indice + 1)
      }
    })
  }

  const bottonePlayDesktop = document.querySelector(
    "nav.fixed-bottom .btn-light",
  )
  if (bottonePlayDesktop !== null) {
    bottonePlayDesktop.addEventListener("click", togglePlayPause)
  }

  const bottoneSuccessivo = document.querySelector(
    "nav.fixed-bottom .bi-skip-end-fill",
  )
  if (bottoneSuccessivo !== null) {
    bottoneSuccessivo.closest("button").addEventListener("click", function () {
      if (
        currentTrackIndex !== null &&
        album.tracks.data[currentTrackIndex + 1]
      ) {
        playTrack(
          album.tracks.data[currentTrackIndex + 1],
          currentTrackIndex + 1,
        )
      }
    })
  }

  const bottonePrecedente = document.querySelector(
    "nav.fixed-bottom .bi-skip-start-fill",
  )
  if (bottonePrecedente !== null) {
    bottonePrecedente.closest("button").addEventListener("click", function () {
      if (currentTrackIndex > 0) {
        playTrack(
          album.tracks.data[currentTrackIndex - 1],
          currentTrackIndex - 1,
        )
      }
    })
  }

  const bottoniPlay = document.querySelectorAll(".playAudio")
  bottoniPlay.forEach(function (bottone) {
    bottone.addEventListener("click", togglePlayPause)
  })

  const righeTracce = document.querySelectorAll("[data-track-index]")
  righeTracce.forEach(function (riga) {
    const indiceTraccia = parseInt(riga.getAttribute("data-track-index"))
    riga.addEventListener("click", function () {
      playTrack(album.tracks.data[indiceTraccia], indiceTraccia)
    })
  })
}
