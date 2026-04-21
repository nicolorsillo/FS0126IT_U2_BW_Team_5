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
      let searchInput = form.querySelector("input").value
      let index = 0

      console.log(data.data)

      for (let i = 0; i < data.data.length; i++) {
        if (
          data.data[i].artist.name.toLowerCase() === searchInput.toLowerCase()
        ) {
          index++
          searchDiv.innerHTML = ""
          divCard.innerHTML = `<div class="container rounded-2 text-light px-0 mt-4">
          <div class="row justify-content-between">
          <div class="col-4"><h2 class="fw-bold mb-4">Risultato più rilevante</h2>
            </div>
          <div class="col-7"><h2 class="fw-bold mb-4">Brani</h2>
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
                    <div class="col-7 py-3 ps-3 rounded-2"
          
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
            searchDiv.innerHTML = ""
            divCard.innerHTML = `<div class="container rounded-2 text-light px-0 mt-4">
          <div class="row justify-content-between">
          <div class="col-4"><h2 class="fw-bold mb-4">Risultato più rilevante</h2>
            </div>
          <div class="col-7"><h2 class="fw-bold mb-4">Brani</h2>
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
                          <p class="card-text text-secondary mt-1">Artista</p>
                        </div>
                      </div>
                    <div class="col-7 py-3 ps-3 rounded-2"
          
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
                    </div>
                  </div>
          `

            searchDiv.appendChild(divCard)
          }
        }
      }
    })
    .catch((err) => {
      console.log("ARTISTA NON TROVATO", err)
    })
}
