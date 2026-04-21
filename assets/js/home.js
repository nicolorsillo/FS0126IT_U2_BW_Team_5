const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q="
const allParam = new URLSearchParams(location.search)
const id = allParam.get("id")

// const form = document.querySelector("form")
// form.addEventListener("submit", function (e) {
//   e.preventDefault()
//   const searchText = form.querySelector(".form-control").value

//   const fullUrl = url + searchText
//   getAlbumOrArtist(fullUrl)
// })

// const getAlbumOrArtist = function (type) {
//   //funzione per scrivere solo una fetch inserendo come parametro album o artist
//   const urlCompleto = `${Url}${type}/${id}` //compongo l'url da usare nella fetch con url base+tipo(quindi album o artist) e l'id

//   if (id)
//     fetch(urlCompleto)
//       .then((result) => {
//         if (result.ok) {
//           return result.json()
//         } else {
//           throw new Error("ERRORE JSON", result.status)
//         }
//       })
//       .then((data) => {
//         if (type === "album") {
//           const albumPageLink = document.getElementById("album-page-link")
//           albumPageLink.href = `/album.html?id=${data.id}`
//           const albumCover = document.getElementById("album-cover")
//           albumCover.src = data.cover_medium
//         }
//       })
//       .catch((err) => {
//         console.log("ERRORE NEL SERVER", err)
//       })
// }
// const getAlbumOrArtist = function (url) {
//   fetch(url)
//     .then((result) => {
//       if (result.ok) {
//         return result.json()
//       } else {
//         throw new Error("ERRORE JSON", result.status)
//       }
//     })
//     .then((data) => {
//       const arr = data.data
//       const randIndex = Math.floor(Math.random() * arr.length)
//       const randAlbum = arr[randIndex].album
//       const randArtist = arr[randIndex].artist
//       const randSong = arr[randIndex].title

//       const albumCover = document.getElementById("album-cover")
//       albumCover.src = randAlbum.cover_medium

//       const albumPageLink = document.getElementById("album-page-link")
//       albumPageLink.href = `/album.html?id=${randAlbum.id}`

//       const albumTitle = document.getElementById("album-title")
//       albumTitle.innerText = randAlbum.title

//       const songTitle = document.getElementById("song-title")
//       songTitle.innerText = randSong

//       const artistName = document.getElementById("artist-name")
//       artistName.innerText = randArtist.name

//       const description = document.getElementById("description")
//       description.innerText = randArtist.name

//       location.assign(`/artist.html?id=${randArtist.id}`)
//     })
//     .catch((err) => {
//       console.log("ERRORE NEL SERVER", err)
//     })
// }
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
