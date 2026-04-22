const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q="
const allParam = new URLSearchParams(location.search)
const id = allParam.get("id")

const form = document.getElementById("search-form")
form.addEventListener("submit", function (e) {
  e.preventDefault()
  let searchInput = form.querySelector("input").value

  const fullUrl = url + searchInput
  getArtist(fullUrl)
  searchInput = ""
})

const getArtist = function (url) {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("ERRORE NEL JSON", response.status)
      }
    })
    .then((data) => {
      const divCard = document.createElement("div")
      const searchDiv = document.getElementById("search-container")
      const randIndex = Math.floor(Math.random() * data.data.length)

      let searchInput = form.querySelector("input").value
      let index = 0

      for (let i = 0; i < data.data.length; i++) {
        if (
          data.data[i].artist.name.toLowerCase() === searchInput.toLowerCase()
        ) {
          index++
          data.data.sort((a, b) => a.rank - b.rank)
          searchDiv.innerHTML = ""
          divCard.innerHTML = `<div class="container rounded-2 text-light px-0 mt-4">
          <div class="row justify-content-between">
          <div class="col-4"><h2 class="fw-bold mb-4">Risultato più rilevante</h2>
            </div>
          <div class="col-7"><h2 class="fw-bold mb-4">Brani più ascoltati</h2>
            </div>
            </div>
                    <div class="row justify-content-between">
                    <div class="col-4 bg-dark py-3 ps-3 rounded-2"
          
                      <div class="card border-0 p-3">
                        <div class="card-body">
                          <img
                            src="${data.data[i].artist.picture_medium}"
                            alt="Artist-picture"
                            class="rounded-circle mb-3 shadow object-fit-cover"
                            style="width: 150px; height: 150px"
                          />
          
                          <h3 class="card-title fw-bold m-0">${data.data[i].artist.name}</h3>
                          <p class="card-text text-secondary mt-1">Artista</p>
                        </div>
                      </div>
                    <div class="col-7 py-0 ps-3 rounded-2"
          
                      <div class="card border-0 p-3">
                        <div class="card-body h-100">
                          <ul class="list-unstyled mb-0 d-flex justify-content-between flex-column h-100">
                            <li class="d-flex gap-4"><img
                            src="${data.data[0].album.cover_medium}"
                            alt="album-picture"
                            class="rounded-2 shadow object-fit-cover"
                            style="width: 50px; height: 50px"
                          /><div class="d-flex flex-column justify-content-between"><h5 class="card-title fw-bold m-0 ">${data.data[0].title.toUpperCase()}</h5><p class="text-secondary m-0">${data.data[i].artist.name}</p></div></li>
                            <li class="d-flex gap-4"><img
                            src="${data.data[1].album.cover_medium}"
                            alt="album-picture"
                            class="rounded-2 shadow object-fit-cover"
                            style="width: 50px; height: 50px"
                          /><div class="d-flex flex-column justify-content-between"><h5 class="card-title fw-bold m-0 ">${data.data[1].title.toUpperCase()}</h5><p class="text-secondary m-0">${data.data[i].artist.name}</p></div></li>
                            <li class="d-flex gap-4"><img
                            src="${data.data[2].album.cover_medium}"
                            alt="album-picture"
                            class="rounded-2 shadow object-fit-cover"
                            style="width: 50px; height: 50px"
                          /><div class="d-flex flex-column justify-content-between"><h5 class="card-title fw-bold m-0 ">${data.data[2].title.toUpperCase()}</h5><p class="text-secondary m-0">${data.data[i].artist.name}</p></div></li>
                            <li class="d-flex gap-4"><img
                            src="${data.data[3].album.cover_medium}"
                            alt="album-picture"
                            class="rounded-2 shadow object-fit-cover"
                            style="width: 50px; height: 50px"
                          /><div class="d-flex flex-column justify-content-between"><h5 class="card-title fw-bold m-0 ">${data.data[3].title.toUpperCase()}</h5><p class="text-secondary m-0">${data.data[i].artist.name}</p></div></li>
                          </ul>         
                        </div>
                      </div>
                    </div>
                  </div>
          `

          searchDiv.appendChild(divCard)
        }
      }
      if (index === 0) {
        for (let i = 0; i < data.data.length; i++) {
          if (data.data[i].title.toLowerCase() === searchInput.toLowerCase()) {
            index++
            const getRandom = () => Math.floor(Math.random() * data.data.length)

            const rand1 = getRandom()
            const rand2 = getRandom()
            const rand3 = getRandom()
            const rand4 = getRandom()

            searchDiv.innerHTML = ""
            divCard.innerHTML = `<div class="container rounded-2 text-light px-0 mt-4">
          <div class="row justify-content-between">
          <div class="col-4"><h2 class="fw-bold mb-4">Risultato più rilevante</h2>
            </div>
          <div class="col-7"><h2 class="fw-bold mb-4">Ti potrebbe piacere anche</h2>
            </div>
            </div>
                    <div class="row justify-content-between">
                    <div class="col-4 bg-dark py-3 ps-3 rounded-2"
          
                      <div class="card border-0 p-3">
                        <div class="card-body">
                          <img
                            src="${data.data[i].album.cover_medium}"
                            alt="Artist-picture"
                            class="rounded-circle mb-3 shadow object-fit-cover"
                            style="width: 150px; height: 150px"
                          />
          
                          <h3 class="card-title fw-bold m-0">${data.data[i].title}</h3>
                          <p class="card-text text-secondary mt-1">${data.data[i].artist.name}</p>
                        </div>
                      </div>
                    <div class="col-7 py-0 ps-3 rounded-2"
          
                      <div class="card border-0 p-3">
                        <div class="card-body h-100">
                          <ul class="list-unstyled mb-0 d-flex justify-content-between flex-column h-100">
                            <li class="d-flex gap-4"><img
                            src="${data.data[rand1].album.cover_medium}"
                            alt="album-picture"
                            class="rounded-2 shadow object-fit-cover"
                            style="width: 50px; height: 50px"
                          /><div class="d-flex flex-column justify-content-between"><h5 class="card-title fw-bold m-0 ">${data.data[rand1].title.toUpperCase()}</h5><p class="text-secondary m-0">${data.data[rand1].artist.name}</p></div></li>
                            <li class="d-flex gap-4"><img
                            src="${data.data[rand2].album.cover_medium}"
                            alt="album-picture"
                            class="rounded-2 shadow object-fit-cover"
                            style="width: 50px; height: 50px"
                          /><div class="d-flex flex-column justify-content-between"><h5 class="card-title fw-bold m-0 ">${data.data[rand2].title.toUpperCase()}</h5><p class="text-secondary m-0">${data.data[rand2].artist.name}</p></div></li>
                            <li class="d-flex gap-4"><img
                            src="${data.data[rand3].album.cover_medium}"
                            alt="album-picture"
                            class="rounded-2 shadow object-fit-cover"
                            style="width: 50px; height: 50px"
                          /><div class="d-flex flex-column justify-content-between"><h5 class="card-title fw-bold m-0 ">${data.data[rand3].title.toUpperCase()}</h5><p class="text-secondary m-0">${data.data[rand3].artist.name}</p></div></li>
                            <li class="d-flex gap-4"><img
                            src="${data.data[rand4].album.cover_medium}"
                            alt="album-picture"
                            class="rounded-2 shadow object-fit-cover"
                            style="width: 50px; height: 50px"
                          /><div class="d-flex flex-column justify-content-between"><h5 class="card-title fw-bold m-0 ">${data.data[rand4].title.toUpperCase()}</h5><p class="text-secondary m-0">${data.data[rand4].artist.name}</p></div></li>
                          </ul>         
                        </div>
                      </div>
                    </div>
                  </div>
          `

            searchDiv.appendChild(divCard)
          }
        }
      }
    })
    .catch((err) => {
      console.log("ARTISTA NON TROVATO e SERVER", err)
    })
}
