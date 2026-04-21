const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
// const allParam = new URLSearchParams(location.search)
// const id = allParam.get("id")

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
const backBtn = document.getElementById("backBtn");
const forwardBtn = document.getElementById("forwardBtn");

if (backBtn) {
  backBtn.addEventListener("click", () => {
    window.history.back();
  });
}

if (forwardBtn) {
  forwardBtn.addEventListener("click", () => {
    window.history.forward();
  });
}

const getAdBannerSong = function (song) {
  const urlCompleto = `${url}${song}`;

  fetch(urlCompleto)
    .then((result) => {
      if (result.ok) {
        return result.json();
      } else {
        throw new Error("ERRORE JSON", result.status);
      }
    })
    .then((data) => {
      const songContainer = document.getElementById("ad-banner");
      const songAlbumId = document.getElementById("ad-banner-song-album-id");
      const songCover = document.getElementById("ad-banner-song-cover");
      const songAlbum = document.getElementById("ad-banner-song-album");
      const songTitle = document.getElementById("ad-banner-song-title");
      const songArtist = document.getElementById("ad-banner-song-artist");
      const songDescription = document.getElementById(
        "ad-banner-song-description",
      );
      const songPlayBtn = document.getElementById("ad-banner-song-play-btn");
      const songSaveBtn = document.getElementById("ad-banner-song-save-btn");

      songContainer.classList.remove("placeholder-glow");
      songContainer.querySelector("h6").classList.remove("placeholder");
      songAlbumId.classList.remove("placeholder");
      songAlbumId.href = `album.html?id=${data.data[0].album.id}`;
      songCover.classList.remove("placeholder");
      songCover.src = data.data[0].album.cover_xl;
      songAlbum.classList.remove("placeholder");
      songAlbum.innerText = data.data[0].album.title;
      songTitle.classList.remove("placeholder");
      songTitle.innerText = data.data[0].title;
      songArtist.classList.remove("placeholder");
      songArtist.innerText = data.data[0].artist.name;
      songDescription.classList.remove("placeholder");
      songDescription.querySelector("span").innerText =
        data.data[0].artist.name;
      songPlayBtn.classList.remove("disabled", "placeholder");
      songPlayBtn.querySelector("small").innerText = "Play";
      songSaveBtn.classList.remove("disabled", "placeholder");
      songSaveBtn.querySelector("small").innerText = "Salva";
    })
    .catch((err) => {
      console.log("ERRORE NEL SERVER", err);
    });
};

const urlTop = "https://api.deezer.com/playlist/1116187241";
const proxyTop = "https://cors-anywhere.herokuapp.com/";

const getTopReleases = function () {
  const urlTopReleases = proxyTop + urlTop;

  fetch(urlTopReleases)
    .then((result) => {
      if (result.ok) {
        return result.json();
      } else {
        throw new Error("ERRORE JSON", result.status);
      }
    })
    .then((data) => {
      let randomSongIndex = Math.floor(Math.random() * data.tracks.data.length);
      let randomSong = data.tracks.data[randomSongIndex].title;
      getAdBannerSong(randomSong);
    })
    .catch((err) => {
      console.log("ERRORE NEL SERVER", err);
    });
};
getTopReleases();
