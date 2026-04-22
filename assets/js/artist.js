const par = new URLSearchParams(window.location.search)
const artistId = par.get("id")

fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}`)
.then((response)=>{
     if (response.ok) {
        return response.json()
      } else {
        throw new Error("ERRORE NEL JSON", response.status)
      }
})
.then((data)=>{
    const profileSection = document.getElementById('artistDinamic')
    const like= document.getElementById('like')
    profileSection.innerHTML = `
    <div
      class="container-fluid px-0"
      style="
    height: 70vh;
    background-image: url('${data.picture_xl}');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    "
      ></div>
      
      <div class="position-absolute bottom-0 start-0 w-100 px-4 pb-4">
        <div class="pt-4">
          
          <div class="d-flex align-items-center gap-2 mb-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#3d91f4">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.5 12.5l1.5 1.5 3-3" stroke="white" stroke-width="2" fill="none"/>
            </svg>
            <span class="fw-semibold small">Artista verificato</span>
          </div>
          
          <h1 class="display-1 fw-bold lh-1 mb-3">${data.name}</h1>
          
          <p class="mb-0">${data.nb_fan} ascoltatori mensili</p>
          
        </div>
      </div>
    `
     like.innerHTML= `
          <div class="text-secondary small" id="like">Di ${data.name}</div>
        `
})
.catch((err) => {
      console.log("Errore del server", err)
    })
fetch('https://striveschool-api.herokuapp.com/api/deezer/artist/'+artistId+'/top?limit=50')
.then((response)=>{
     if (response.ok) {
        return response.json()
      } else {
        throw new Error("ERRORE NEL JSON", response.status)
      }
})
.then((data)=>{
    const songDiv= document.getElementById('songDiv')
    for(i=0; i < 5; i++){
        songDiv.innerHTML+= `
          <div class="d-flex align-items-center py-2">
          <div class="text-secondary me-3">${i+1}</div>
          <img src="${data.data[i].album.cover}" alt="" class="me-3" width="40" height="40" />
          <div class="fw-semibold flex-grow-1">${data.data[i].title}</div>
          <div class="text-secondary me-4 d-none d-md-block">276.616.912</div>
          <div class="text-secondary">${String(data.data[i].duration)[0]}:${String(data.data[i].duration).slice(1)}</div>
        </div>
        `
    }
})
 .catch((err) => {
      console.log("ARTISTA NON TROVATO", err)
    })