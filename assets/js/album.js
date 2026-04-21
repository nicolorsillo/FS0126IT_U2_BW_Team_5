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
    const artistNameElements = document.querySelectorAll(".artist-name")
    artistNameElements.forEach((element) => {
      element.textContent = album.artist.name
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
    const backBtn = document.getElementById("backBtn")
    const forwardBtn = document.getElementById("forwardBtn")

    if (backBtn) {
      backBtn.addEventListener("click", () => {
        window.history.back()
      })
    }

    if (forwardBtn) {
      forwardBtn.addEventListener("click", () => {
        window.history.forward()
      })
    }
  })

  .catch((err) => console.error("Errore fetch album:", err))
