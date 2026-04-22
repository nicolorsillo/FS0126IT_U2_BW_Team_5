const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
const allParam = new URLSearchParams(location.search);
const id = allParam.get("id");

const form = document.getElementById("search-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let searchInput = form.querySelector("input").value;

  const fullUrl = url + searchInput;
  getArtist(fullUrl);
  searchInput = "";
});

let currentAudio = null;

const playSong = function (songCover, songName, artistName, songPreview) {
  document.getElementById("song-cover").src = songCover;
  document.getElementById("song-name").innerText = songName;
  document.getElementById("song-artist").innerText = artistName;

  if (currentAudio) currentAudio.pause();
  currentAudio = new Audio(songPreview);
  currentAudio.play();
};

const getArtist = function (url) {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("ERRORE NEL JSON", response.status);
      }
    })
    .then((data) => {
      const divCard = document.createElement("div");
      const searchDiv = document.getElementById("search-container");
      const randIndex = Math.floor(Math.random() * data.data.length);

      let searchInput = form.querySelector("input").value;
      let index = 0;

      for (let i = 0; i < data.data.length; i++) {
        if (
          data.data[i].artist.name.toLowerCase() === searchInput.toLowerCase()
        ) {
          index++;
          data.data.sort((a, b) => b.rank - a.rank);
          searchDiv.innerHTML = "";
          divCard.innerHTML = `<div class="container rounded-2 text-light px-0 mt-4">
          <div class="row justify-content-center justify-content-md-between">
          <div class="col-9 col-md-4"><h2 class="fw-bold mb-4">Risultato più rilevante</h2>
            </div>
          <div class="d-none d-md-flex col-md-7"><h2 class="fw-bold mb-4">Brani più ascoltati</h2>
            </div>
            </div>
                    <div class="row justify-content-center justify-content-md-between">
                    <div class="col-9 col-md-4 bg-dark py-3 ps-3 rounded-2"
          
                      <div class="card border-0 p-3">
                        <div class="card-body">
                        <a href="/artist.html?id=${data.data[i].artist.id}">   
                        <img
                            src="${data.data[i].artist.picture_medium}"
                            alt="Artist-picture"
                            class="rounded-circle mb-3 shadow object-fit-cover"
                            style="width: 150px; height: 150px"
                          />
                          </a>
                          <h3 class="card-title fw-bold m-0">${data.data[i].artist.name}</h3>
                          <p class="card-text text-secondary mt-1">Artista</p>
                        </div>
                      </div>
                      <div class="col-9 d-md-none"><h2 class="fw-bold mt-4">Brani più ascoltati</h2></div>
                    <div class="col-9 col-md-7 py-0 ps-3 rounded-2"
                      <div class="card border-0 p-3">
                        <div class="card-body h-100">
                          <ul class="list-unstyled mb-0 d-flex justify-content-between flex-column h-100">
                            <button class="border-0 p-0 shadow-none bg-transparent" onclick="playSong(
                              '${data.data[0].album.cover_medium}',
                              '${data.data[0].title.replaceAll("'", "")}',
                              '${data.data[0].artist.name}',
                              '${data.data[0].preview}'
                              )">
                            <li class="d-flex gap-4"><img
                            src="${data.data[0].album.cover_medium}"
                            alt="album-picture"
                            class="rounded-2 shadow object-fit-cover p-1 p-md-0"
                            style="width: 50px; height: 50px"
                          /><div class="d-flex flex-column justify-content-between"><h5 class="card-title fw-bold m-0 text-start ">${data.data[0].title.toUpperCase()}</h5><p class="text-secondary m-0 text-start">${data.data[i].artist.name}</p></div></li>
                            </button>

                           <button class="border-0 p-0 shadow-none bg-transparent" onclick="playSong(
                              '${data.data[1].album.cover_medium}',
                              '${data.data[1].title}',
                              '${data.data[1].artist.name}',
                              '${data.data[1].preview}'
                              )"> 
                          <li class="d-flex gap-4"><img
                            src="${data.data[1].album.cover_medium}"
                            alt="album-picture"
                            class="rounded-2 shadow object-fit-cover p-1 p-md-0 "
                            style="width: 50px; height: 50px"
                          /><div class="d-flex flex-column justify-content-between"><h5 class="card-title fw-bold m-0 text-start ">${data.data[1].title.toUpperCase()}</h5><p class="text-secondary m-0 text-start">${data.data[i].artist.name}</p></div></li>
                            </button>

                          <button class="border-0 p-0 shadow-none bg-transparent" onclick="playSong(
                              '${data.data[2].album.cover_medium}',
                              '${data.data[2].title}',
                              '${data.data[2].artist.name}',
                              '${data.data[2].preview}'
                              )"> 
                          <li class="d-flex gap-4"><img
                            src="${data.data[2].album.cover_medium}"
                            alt="album-picture"
                            class="rounded-2 shadow object-fit-cover p-1 p-md-0"
                            style="width: 50px; height: 50px"
                          /><div class="d-flex flex-column justify-content-between"><h5 class="card-title fw-bold m-0 text-start ">${data.data[2].title.toUpperCase()}</h5><p class="text-secondary m-0 text-start">${data.data[i].artist.name}</p></div></li>
                            </button>
                          
                             <button class="border-0 p-0 shadow-none bg-transparent" onclick="playSong(
                              '${data.data[3].album.cover_medium}',
                              '${data.data[3].title}',
                              '${data.data[3].artist.name}',
                              '${data.data[3].preview}'
                              )"> 
                          <li class="d-flex gap-4"><img
                            src="${data.data[3].album.cover_medium}"
                            alt="album-picture"
                            class="rounded-2 shadow object-fit-cover p-1 p-md-0"
                            style="width: 50px; height: 50px"
                          /><div class="d-flex flex-column justify-content-between"><h5 class="card-title fw-bold m-0 text-start ">${data.data[3].title.toUpperCase()}</h5><p class="text-secondary m-0 text-start">${data.data[i].artist.name}</p></div></li>
                          </button>
                          </ul>         
                        </div>
                      </div>
                    </div>
                  </div>
          `;

          searchDiv.appendChild(divCard);
        }
      }
      if (index === 0) {
        for (let i = 0; i < data.data.length; i++) {
          if (data.data[i].title.toLowerCase() === searchInput.toLowerCase()) {
            index++;
            const getRandom = () =>
              Math.floor(Math.random() * data.data.length);

            const rand1 = getRandom();
            const rand2 = getRandom();
            const rand3 = getRandom();
            const rand4 = getRandom();

            searchDiv.innerHTML = "";
            divCard.innerHTML = `<div class="container rounded-2 text-light px-0 mt-4">
          <div class="row justify-content-center justify-content-md-between">
          <div class="col-9 col-md-4"><h2 class="fw-bold mb-4">Risultato più rilevante</h2>
            </div>
          <div class="d-none d-md-flex col-9 col-md-7"><h2 class="fw-bold mb-4">Ti potrebbe piacere anche</h2>
            </div>
            </div>
                    <div class="row justify-content-center justify-content-md-between">
                    <div class="col-9 col-md-4 bg-dark py-3 ps-3 rounded-2"
          
                      <div class="card border-0 p-3">
                        <div class="card-body">
                              <button class="border-0 shadow-none bg-transparent" onclick="playSong(
                              '${data.data[i].album.cover_medium}',
                              '${data.data[i].title}',
                              '${data.data[i].artist.name}',
                              '${data.data[i].preview}'
                              )">
                                <img
                                src="${data.data[i].album.cover_medium}"
                                alt="Artist-picture"
                                class="rounded-circle mb-3 shadow object-fit-cover"
                                style="width: 150px; height: 150px"
                              />
                              </button>
                          <h3 class="card-title fw-bold m-0">${data.data[i].title}</h3>
                          <p class="card-text text-secondary mt-1">${data.data[i].artist.name}</p>
                        </div>
                      </div>
                    <div class="col-9 d-md-none col-9 col-md-7"><h2 class="fw-bold mt-4">Ti potrebbe piacere anche</h2></div>
                    <div class="col-9 col-md-7 py-0 ps-3 rounded-2"
          
                      <div class="card border-0 p-3">
                        <div class="card-body h-100">
                          <ul class="list-unstyled mb-0 d-flex justify-content-between flex-column h-100">
                            
                          <button class="border-0 p-0 shadow-none bg-transparent" onclick="playSong(
                              '${data.data[rand1].album.cover_medium}',
                              '${data.data[rand1].title}',
                              '${data.data[rand1].artist.name}',
                              '${data.data[rand1].preview}'
                              )">
                          <li class="d-flex gap-4 align-content-center"><img
                            src="${data.data[rand1].album.cover_medium}"
                            alt="album-picture"
                            class="rounded-2 shadow object-fit-cover p-1 p-md-0"
                            style="width: 50px; height: 50px"
                          /><div class="d-flex flex-column justify-content-between"><h5 class="card-title fw-bold m-0 text-start ">${data.data[rand1].title.toUpperCase()}</h5><p class="text-secondary m-0 text-start">${data.data[rand1].artist.name}</p></div></li>
                          </button>
                          
                          <button class="border-0 p-0 shadow-none bg-transparent" onclick="playSong(
                              '${data.data[rand2].album.cover_medium}',
                              '${data.data[rand2].title}',
                              '${data.data[rand2].artist.name}',
                              '${data.data[rand2].preview}'
                              )">
                          <li class="d-flex gap-4 align-content-center"><img
                            src="${data.data[rand2].album.cover_medium}"
                            alt="album-picture"
                            class="rounded-2 shadow object-fit-cover p-1 p-md-0"
                            style="width: 50px; height: 50px"
                          /><div class="d-flex flex-column justify-content-between"><h5 class="card-title fw-bold m-0 text-start ">${data.data[rand2].title.toUpperCase()}</h5><p class="text-secondary m-0 text-start">${data.data[rand2].artist.name}</p></div></li>
                          </button>
                          
                          <button class="border-0 p-0 shadow-none bg-transparent" onclick="playSong(
                              '${data.data[rand3].album.cover_medium}',
                              '${data.data[rand3].title}',
                              '${data.data[rand3].artist.name}',
                              '${data.data[rand3].preview}'
                              )">
                          <li class="d-flex gap-4 align-content-center"><img
                            src="${data.data[rand3].album.cover_medium}"
                            alt="album-picture"
                            class="rounded-2 shadow object-fit-cover p-1 p-md-0"
                            style="width: 50px; height: 50px"
                          /><div class="d-flex flex-column justify-content-between"><h5 class="card-title fw-bold m-0 text-start ">${data.data[rand3].title.toUpperCase()}</h5><p class="text-secondary m-0 text-start">${data.data[rand3].artist.name}</p></div></li>
                          </button>
                          
                          <button class="border-0 p-0 shadow-none bg-transparent" onclick="playSong(
                              '${data.data[rand4].album.cover_medium}',
                              '${data.data[rand4].title}',
                              '${data.data[rand4].artist.name}',
                              '${data.data[rand4].preview}'
                              )">
                          <li class="d-flex gap-4 align-content-center"><img
                            src="${data.data[rand4].album.cover_medium}"
                            alt="album-picture"
                            class="rounded-2 shadow object-fit-cover p-1 p-md-0"
                            style="width: 50px; height: 50px"
                          /><div class="d-flex flex-column justify-content-between"><h5 class="card-title fw-bold m-0 text-start ">${data.data[rand4].title.toUpperCase()}</h5><p class="text-secondary m-0 text-start">${data.data[rand4].artist.name}</p></div></li>
                          </button>
                          </ul>         
                        </div>
                      </div>
                    </div>
                  </div>
          `;
            searchDiv.appendChild(divCard);
          }
        }
      }
    })
    .catch((err) => {
      console.log("ARTISTA NON TROVATO e SERVER", err);
    });
};
