const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q="
const allParam = new URLSearchParams(location.search)
const id = allParam.get("id")

const form = document.getElementById("search-form")
form.addEventListener("submit", function (e) {
  e.preventDefault()
  const searchInput = form.querySelector("input").value
  console.log(searchInput)

  const fullUrl = url + searchInput
  getArtist(fullUrl)
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
      console.log(data.data[1].artist.picture_medium)

      divCard.innerHTML = `<div class="card bg-secondary">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src=${data.data[1].artist.picture_medium}
                        class="img-fluid rounded-start"
                        alt="artist-cover"
                      />
                    </div>
                    <div class="col-md-8">
                      <div
                        class="card-body p-0 ps-3 h-100 d-flex align-items-center"
                      >
                        <p class="fs-6 mb-1">${data.data[1].artist.name}</p>
                      </div>
                    </div>
                  </div>
                </div>`

      searchDiv.appendChild(divCard)
    })
    .catch((err) => {
      console.log("ERRORE NEL SERVER", err)
    })
}
