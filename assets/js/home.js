const centralPage = document.getElementById("central-page")

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

function scrollOrizzontal(direction, carouselName) {
  const container = document.getElementById(carouselName)
  const scrollAmount = container.scrollWidth * 0.1

  if (direction === "right") {
    container.scrollLeft += scrollAmount
  } else {
    container.scrollLeft -= scrollAmount
  }
}

const homePage = function (pushHistory = true) {
  document
    .getElementById("account-bar")
    .classList.replace("position-fixed", "position-sticky")

  document
    .getElementById("account-bar")
    .classList.replace("custom_width", "w-100")

  centralPage.innerHTML = `    <div
      class="card mb-3 bg-gradient-dark border-0 rounded-0 placeholder-glow d-none d-lg-block mx-3"
      id="ad-banner"
    >
      <div class="row g-0">
        <div class="col-3 d-flex align-items-center">
          <a id="ad-banner-song-album-id" href="#">
            <img
              id="ad-banner-song-cover"
              src="./assets/imgs/main/placeholder.jpg"
              class="img-fluid ms-3 my-3 placeholder"
              alt="song cover"
            />
          </a>
        </div>
        <div class="col-9">
          <div class="card-body ms-3">
            <div class="d-flex justify-content-between">
              <a
                href="#"
                class="text-decoration-none link-light"
                id="ad-banner-song-album-link"
              >
                <h5
                  id="ad-banner-song-album"
                  class="text-uppercase placeholder"
                >
                  Album
                </h5></a
              >

              <h6 class="text-uppercase placeholder">nascondi annunci</h6>
            </div>
            <h1 id="ad-banner-song-title" class="placeholder">Nome Brano</h1>
            <div>
              <a
                href="#"
                class="text-decoration-none link-light"
                id="ad-banner-song-artist-link"
              >
                <h5 id="ad-banner-song-artist" class="placeholder">
                  Nome artista
                </h5></a
              >
            </div>
            <div>
              <p id="ad-banner-song-description" class="placeholder">
                Ascolta il nuovo brano di
                <span>nome artista</span>!
              </p>
            </div>

            <button
              id="ad-banner-song-play-btn"
              class="btn btn-primary rounded-pill pb-2 me-2 disabled placeholder"
              style="width: 80px"
            >
              <small class="fw-bold"></small>
            </button>
            <button
              id="ad-banner-song-save-btn"
              class="btn btn-outline-light rounded-pill pb-2 disabled placeholder"
              style="width: 80px"
            >
              <small class="fw-bold"></small>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-3 mx-3">
      <div class="d-flex justify-content-between mb-2">
        <h4>Buonasera</h4>
        <div class="d-flex gap-2 align-items-center d-lg-none">
          <a class="btn rounded-circle p-1" id="forward-btn">
            <i
              class="bi bi-bell d-flex justify-content-center align-items-center m-0"
            ></i>
          </a>
          <a class="btn rounded-circle p-1" id="forward-btn">
            <i
              class="bi bi-clock-history d-flex justify-content-center align-items-center m-0"
            ></i>
          </a>
          <a class="btn rounded-circle p-1" id="forward-btn">
            <i
              class="bi bi-gear d-flex justify-content-center align-items-center m-0"
            ></i>
          </a>
        </div>
      </div>

      <div class="container.fluid p-0 placeholder-glow">
        <div class="row row-cols-2 row-cols-md-3 gx-4 gy-3">
          <div class="col recommended-album">
            <a href="#" class="text-decoration-none">
              <div class="card bg-body-tertiary border-0">
                <div class="row g-0">
                  <div class="col-4">
                    <img
                      src="./assets/imgs/main/placeholder.jpg"
                      class="img-fluid rounded-start placeholder"
                      alt="album-cover"
                    />
                  </div>
                  <div class="col-8">
                    <div
                      class="card-body p-0 ps-3 h-100 d-flex align-items-center pe-2"
                    >
                      <p class="fs-6 mb-1 placeholder text-truncate">
                        Nome album
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col recommended-album">
            <a href="#" class="text-decoration-none">
              <div class="card bg-body-tertiary border-0">
                <div class="row g-0">
                  <div class="col-4">
                    <img
                      src="./assets/imgs/main/placeholder.jpg"
                      class="img-fluid rounded-start placeholder"
                      alt="album-cover"
                    />
                  </div>
                  <div class="col-8">
                    <div
                      class="card-body p-0 ps-3 h-100 d-flex align-items-center pe-2"
                    >
                      <p class="fs-6 mb-1 placeholder text-truncate">
                        Nome album
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col recommended-album">
            <a href="#" class="text-decoration-none">
              <div class="card bg-body-tertiary border-0">
                <div class="row g-0">
                  <div class="col-4">
                    <img
                      src="./assets/imgs/main/placeholder.jpg"
                      class="img-fluid rounded-start placeholder"
                      alt="album-cover"
                    />
                  </div>
                  <div class="col-8">
                    <div
                      class="card-body p-0 ps-3 h-100 d-flex align-items-center pe-2"
                    >
                      <p class="fs-6 mb-1 placeholder text-truncate">
                        Nome album
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col recommended-album">
            <a href="#" class="text-decoration-none">
              <div class="card bg-body-tertiary border-0">
                <div class="row g-0">
                  <div class="col-4">
                    <img
                      src="./assets/imgs/main/placeholder.jpg"
                      class="img-fluid rounded-start placeholder"
                      alt="album-cover"
                    />
                  </div>
                  <div class="col-8">
                    <div
                      class="card-body p-0 ps-3 h-100 d-flex align-items-center pe-2"
                    >
                      <p class="fs-6 mb-1 placeholder text-truncate">
                        Nome album
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col recommended-album">
            <a href="#" class="text-decoration-none">
              <div class="card bg-body-tertiary border-0">
                <div class="row g-0">
                  <div class="col-4">
                    <img
                      src="./assets/imgs/main/placeholder.jpg"
                      class="img-fluid rounded-start placeholder"
                      alt="album-cover"
                    />
                  </div>
                  <div class="col-8">
                    <div
                      class="card-body p-0 ps-3 h-100 d-flex align-items-center pe-2"
                    >
                      <p class="fs-6 mb-1 placeholder text-truncate">
                        Nome album
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col recommended-album">
            <a href="#" class="text-decoration-none">
              <div class="card bg-body-tertiary border-0">
                <div class="row g-0">
                  <div class="col-4">
                    <img
                      src="./assets/imgs/main/placeholder.jpg"
                      class="img-fluid rounded-start placeholder"
                      alt="album-cover"
                    />
                  </div>
                  <div class="col-8">
                    <div
                      class="card-body p-0 ps-3 h-100 d-flex align-items-center pe-2"
                    >
                      <p class="fs-6 mb-1 placeholder text-truncate">
                        Nome album
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div>
        <div class="d-flex justify-content-between mt-4 d-flex d-md-flex">
          <h6 class="fw-bold fs-4 m-0 text-dec">Altro di ciò che ti piace</h6>
          <a
            href="#"
            class="fw-bold fs-6 m-0 text-secondary text-decoration-none"
            >VISUALIZZA TUTTO</a
          >
        </div>
        <div class="position-relative d-flex">
          <div
            id="trendingOneCarousel"
            class="d-flex gap-1 overflow-x-scroll overflow-y-visible snap-stop scroll-container py-3 grid-row-switcher"
          >
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/main/image-1.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder fw-bolder">
                      Hot Hits Italia
                    </h5>
                    <p class="card-text text-muted text-muted">
                      La playlist più calda del
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/main/image-2.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">big on the internet</h5>
                    <p class="card-text text-muted">iskyle</p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/main/image-3.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Pop Rising</h5>
                    <p class="card-text text-muted">
                      The hits of tomorrow are on
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/main/image-4.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Canzoni Tristi</h5>
                    <p class="card-text text-muted">it's ok not to be ok</p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/main/image-5.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">in tendenza</h5>
                    <p class="card-text text-muted">
                      Viral & Trending: le canzoni
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/main/image-6.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder fw-bolder">Jazz Vibes</h5>
                    <p class="card-text text-muted text-muted">
                      Tutto il meglio del Jazz
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/main/image-7.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Waking up Music</h5>
                    <p class="card-text text-muted">playlist mattina</p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/main/image-8.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Young punk</h5>
                    <p class="card-text text-muted">
                      spacca tutto con la ribellione giovanile
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/main/image-9.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">
                      Canzoni sotto la doccia
                    </h5>
                    <p class="card-text text-muted">il tuo concerto</p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/main/image-10.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Musica allegra</h5>
                    <p class="card-text text-muted">
                      sentiti bene con te stesso
                    </p>
                  </div>
                </div></a
              >
            </div>
          </div>
          <div>
            <button
              class="carousel-control-prev carousel-button"
              type="button"
              onclick="scrollOrizzontal('left', 'trendingOneCarousel')"
              data-bs-theme="light"
              style="max-width: 100px"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next btn-scroll carousel-button"
              type="button"
              onclick="scrollOrizzontal('right', 'trendingOneCarousel')"
              data-bs-theme="light"
              style="max-width: 100px"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div class="d-flex justify-content-between mt-4 d-flex d-md-flex">
          <h6 class="fw-bold fs-4 m-0 text-dec">Top Playlist</h6>
          <a
            href="#"
            class="fw-bold fs-6 m-0 text-secondary text-decoration-none"
            >VISUALIZZA TUTTO</a
          >
        </div>
        <div class="position-relative d-flex">
          <div
            id="trendingTwoCarousel"
            class="d-flex gap-1 overflow-x-scroll overflow-y-visible snap-stop scroll-container py-3 grid-row-switcher"
          >
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-1.jpeg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Aperitivo Sunset</h5>
                    <p class="card-text text-muted">
                      Deep house e chillout per il tuo golden hour
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-2.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Focus Mode</h5>
                    <p class="card-text text-muted">
                      Lo-fi beats per la massima concentrazione
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-3.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Rock Anthems</h5>
                    <p class="card-text text-muted">
                      I grandi classici che hanno fatto la storia
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-4.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Cena Tra Amici</h5>
                    <p class="card-text text-muted">
                      Sottofondo acustico per chiacchierare
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-5.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Allenamento Cardio</h5>
                    <p class="card-text text-muted">
                      Energia pura per superare i tuoi limiti
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-6.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Indie Italia</h5>
                    <p class="card-text text-muted">
                      Il meglio della scena indipendente attuale
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-7.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Notte Urbana</h5>
                    <p class="card-text text-muted">
                      Rap e R&B per quando cala il buio
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-8.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Synthwave Drive</h5>
                    <p class="card-text text-muted">
                      Atmosfere anni '80 per i tuoi viaggi in auto
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-9.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Sunday Morning</h5>
                    <p class="card-text text-muted">
                      Risveglio lento tra jazz e soul
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-10.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Metal Blast</h5>
                    <p class="card-text text-muted">
                      Riff pesanti per scaricare la tensione
                    </p>
                  </div>
                </div></a
              >
            </div>
          </div>
          <div>
            <button
              class="carousel-control-prev carousel-button"
              type="button"
              onclick="scrollOrizzontal('left', 'trendingTwoCarousel')"
              data-bs-theme="light"
              style="max-width: 100px"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next btn-scroll carousel-button"
              type="button"
              onclick="scrollOrizzontal('right', 'trendingTwoCarousel')"
              data-bs-theme="light"
              style="max-width: 100px"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div class="d-flex justify-content-between mt-4 d-flex d-md-flex">
          <h6 class="fw-bold fs-4 m-0 text-dec">
            Le più ascoltate dai tuoi amici
          </h6>
          <a
            href="#"
            class="fw-bold fs-6 m-0 text-secondary text-decoration-none"
            >VISUALIZZA TUTTO</a
          >
        </div>
        <div class="position-relative d-flex">
          <div
            id="trendingThreeCarousel"
            class="d-flex gap-1 overflow-x-scroll overflow-y-visible snap-stop scroll-container py-3 grid-row-switcher"
          >
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-11.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Lofi Morning</h5>
                    <p class="card-text text-muted">
                      Battiti soft per il tuo caffè
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-12.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Deep Focus</h5>
                    <p class="card-text text-muted">
                      Concentrazione massima in arrivo
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-13.jpeg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Urban Flow</h5>
                    <p class="card-text text-muted">
                      Il ritmo della città nelle orecchie
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-14.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Vintage Vinyl</h5>
                    <p class="card-text text-muted">
                      Classici intramontabili da riscoprire
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-15.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Gym Hardcore</h5>
                    <p class="card-text text-muted">
                      Supera i tuoi limiti oggi
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-16.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Chill Sunset</h5>
                    <p class="card-text text-muted">
                      Aperitivo in musica al tramonto
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-17.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Midnight Drive</h5>
                    <p class="card-text text-muted">
                      Synthwave per viaggi notturni
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-18.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Indie Discovery</h5>
                    <p class="card-text text-muted">
                      Le gemme nascoste del momento
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-19.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Acoustic Soul</h5>
                    <p class="card-text text-muted">
                      Chitarra, voce e pura emozione
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-20.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Summer Anthem</h5>
                    <p class="card-text text-muted">
                      L'energia dell'estate tutto l'anno
                    </p>
                  </div>
                </div></a
              >
            </div>
          </div>
          <div>
            <button
              class="carousel-control-prev carousel-button"
              type="button"
              onclick="scrollOrizzontal('left', 'trendingThreeCarousel')"
              data-bs-theme="light"
              style="max-width: 100px"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next btn-scroll carousel-button"
              type="button"
              onclick="scrollOrizzontal('right', 'trendingThreeCarousel')"
              data-bs-theme="light"
              style="max-width: 100px"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div class="d-flex justify-content-between mt-4 d-flex d-md-flex">
          <h6 class="fw-bold fs-4 m-0 text-dec">Wrapped</h6>
          <a
            href="#"
            class="fw-bold fs-6 m-0 text-secondary text-decoration-none"
            >VISUALIZZA TUTTO</a
          >
        </div>
        <div class="position-relative d-flex">
          <div
            id="trendingFourCarousel"
            class="d-flex gap-1 overflow-x-scroll overflow-y-visible snap-stop scroll-container py-3 grid-row-switcher"
          >
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-21.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Cena Tra Amici</h5>
                    <p class="card-text text-muted">
                      Il sottofondo perfetto per chiacchierare
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-22.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Techno Bunker</h5>
                    <p class="card-text text-muted">
                      Battiti incessanti per la notte
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-23.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Rainy Day Jazz</h5>
                    <p class="card-text text-muted">
                      Malinconia e sax sotto la pioggia
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-24.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Rock Anthems</h5>
                    <p class="card-text text-muted">
                      Le leggende che hanno fatto la storia
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-25.jpeg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Chillhop Study</h5>
                    <p class="card-text text-muted">
                      Ritmi lo-fi per sessioni intense
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-26.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Viral TikTok</h5>
                    <p class="card-text text-muted">
                      Tutti i trend che hai sentito nei video
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-27.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Road Trip Classic</h5>
                    <p class="card-text text-muted">
                      Canta a squarciagola in autostrada
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-28.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Alt-Pop Universe</h5>
                    <p class="card-text text-muted">
                      Suoni diversi per gusti originali
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-29.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Morning Yoga</h5>
                    <p class="card-text text-muted">
                      Trova il tuo equilibrio interiore
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-30.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">80s Flashback</h5>
                    <p class="card-text text-muted">
                      Ritorno al futuro con i synth
                    </p>
                  </div>
                </div></a
              >
            </div>
          </div>
          <div>
            <button
              class="carousel-control-prev carousel-button"
              type="button"
              onclick="scrollOrizzontal('left', 'trendingFourCarousel')"
              data-bs-theme="light"
              style="max-width: 100px"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next btn-scroll carousel-button"
              type="button"
              onclick="scrollOrizzontal('right', 'trendingFourCarousel')"
              data-bs-theme="light"
              style="max-width: 100px"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div class="d-flex justify-content-between mt-4 d-flex d-md-flex">
          <h6 class="fw-bold fs-4 m-0 text-dec">Playlist popolari</h6>
          <a
            href="#"
            class="fw-bold fs-6 m-0 text-secondary text-decoration-none"
            >VISUALIZZA TUTTO</a
          >
        </div>
        <div class="position-relative d-flex">
          <div
            id="trendingFiveCarousel"
            class="d-flex gap-1 overflow-x-scroll overflow-y-visible snap-stop scroll-container py-3 grid-row-switcher"
          >
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-31.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder fw-bolder">
                      Hot Hits Italia
                    </h5>
                    <p class="card-text text-muted text-muted">
                      La playlist più calda del
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-32.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">big on the internet</h5>
                    <p class="card-text text-muted">iskyle</p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-33.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Pop Rising</h5>
                    <p class="card-text text-muted">
                      The hits of tomorrow are on
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-34.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Canzoni Tristi</h5>
                    <p class="card-text text-muted">it's ok not to be ok</p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-35.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">in tendenza</h5>
                    <p class="card-text text-muted">
                      Viral & Trending: le canzoni
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-36.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder fw-bolder">Jazz Vibes</h5>
                    <p class="card-text text-muted text-muted">
                      Tutto il meglio del Jazz
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-37.jpeg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Waking up Music</h5>
                    <p class="card-text text-muted">playlist mattina</p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-38.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Young punk</h5>
                    <p class="card-text text-muted">
                      spacca tutto con la ribellione giovanile
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-39.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">
                      Canzoni sotto la doccia
                    </h5>
                    <p class="card-text text-muted">il tuo concerto</p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-40.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Musica allegra</h5>
                    <p class="card-text text-muted">
                      sentiti bene con te stesso
                    </p>
                  </div>
                </div></a
              >
            </div>
          </div>
          <div>
            <button
              class="carousel-control-prev carousel-button"
              type="button"
              onclick="scrollOrizzontal('left', 'trendingFiveCarousel')"
              data-bs-theme="light"
              style="max-width: 100px"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next btn-scroll carousel-button"
              type="button"
              onclick="scrollOrizzontal('right', 'trendingFiveCarousel')"
              data-bs-theme="light"
              style="max-width: 100px"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div class="d-flex justify-content-between mt-4 d-flex d-md-flex">
          <h6 class="fw-bold fs-4 m-0 text-dec">
            Brani strumentali per il buon umore
          </h6>
          <a
            href="#"
            class="fw-bold fs-6 m-0 text-secondary text-decoration-none"
            >VISUALIZZA TUTTO</a
          >
        </div>
        <div class="position-relative d-flex">
          <div
            id="trendingSixCarousel"
            class="d-flex gap-1 overflow-x-scroll overflow-y-visible snap-stop scroll-container py-3 grid-row-switcher"
          >
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-41.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Caffè e Vinile</h5>
                    <p class="card-text text-muted">
                      Il risveglio perfetto per la domenica
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-42.png"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Bass Boosted</h5>
                    <p class="card-text text-muted">Fai tremare le pareti</p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-43.png"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Vibrazioni Positive</h5>
                    <p class="card-text text-muted">
                      Solo buone energie per la tua giornata
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-44.png"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Cucina Italiana</h5>
                    <p class="card-text text-muted">
                      Classici mentre prepari la cena
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-45.png"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Latino Caliente</h5>
                    <p class="card-text text-muted">
                      Ritmi che non ti fanno stare fermo
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-46.jpeg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Piano Relax</h5>
                    <p class="card-text text-muted">
                      Note dolci per calmare la mente
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-47.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Hip Hop Golden Era</h5>
                    <p class="card-text text-muted">Il meglio degli anni '90</p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-48.jpeg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Synthwave Drive</h5>
                    <p class="card-text text-muted">
                      Atmosfere retro-futuristiche
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-49.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Work From Home</h5>
                    <p class="card-text text-muted">
                      Musica strumentale per non distrarsi
                    </p>
                  </div>
                </div></a
              >
            </div>
            <div class="position-relative poster-container">
              <a href="#" class="link-light text-decoration-none">
                <div class="card p-2 flex-column gap-3 border-0 bg-black h-100">
                  <img
                    src="/assets/imgs/search/image-50.jpg"
                    class=""
                    alt="music-image"
                    width="150"
                    height="150"
                  />
                  <div class="card-body p-0">
                    <h5 class="card-title fw-bolder">Rock Alternativo</h5>
                    <p class="card-text text-muted">
                      Chitarre sporche e voci potenti
                    </p>
                  </div>
                </div></a
              >
            </div>
          </div>
          <div>
            <button
              class="carousel-control-prev carousel-button"
              type="button"
              onclick="scrollOrizzontal('left', 'trendingSixCarousel')"
              data-bs-theme="light"
              style="max-width: 100px"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next btn-scroll carousel-button"
              type="button"
              onclick="scrollOrizzontal('right', 'trendingSixCarousel')"
              data-bs-theme="light"
              style="max-width: 100px"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>`
  if (pushHistory) {
    window.history.pushState({ page: "home" }, "", "#home")
  }

  const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q="

  const getAdBannerSong = function (song) {
    const urlCompleto = `${url}${song}`

    fetch(urlCompleto)
      .then((result) => {
        if (result.ok) {
          return result.json()
        } else {
          throw new Error("ERRORE JSON", result.status)
        }
      })
      .then((data) => {
        const songContainer = document.getElementById("ad-banner")
        const songAlbumId = document.getElementById("ad-banner-song-album-id")
        const songCover = document.getElementById("ad-banner-song-cover")
        const songAlbum = document.getElementById("ad-banner-song-album")
        const songAlbumLink = document.getElementById(
          "ad-banner-song-album-link",
        )
        const songTitle = document.getElementById("ad-banner-song-title")
        const songArtist = document.getElementById("ad-banner-song-artist")
        const songArtistLink = document.getElementById(
          "ad-banner-song-artist-link",
        )
        const songDescription = document.getElementById(
          "ad-banner-song-description",
        )
        const songPlayBtn = document.getElementById("ad-banner-song-play-btn")
        const songSaveBtn = document.getElementById("ad-banner-song-save-btn")

        songContainer.classList.remove("placeholder-glow")
        songContainer.querySelector("h6").classList.remove("placeholder")
        songAlbumId.classList.remove("placeholder")
        songAlbumId.href = `#album-${data.data[0].album.id}`
        songAlbumId.addEventListener("click", (event) => {
          event.preventDefault()
          albumPage(data.data[0].album.id)
        })
        songCover.classList.remove("placeholder")
        songCover.src = data.data[0].album.cover_xl
        songAlbum.classList.remove("placeholder")
        songAlbum.innerText = data.data[0].album.title
        songAlbumLink.href = `#album-${data.data[0].album.id}`
        songAlbumLink.addEventListener("click", (event) => {
          event.preventDefault()
          albumPage(data.data[0].album.id)
        })
        songTitle.classList.remove("placeholder")
        songTitle.innerText = data.data[0].title
        songArtist.classList.remove("placeholder")
        songArtist.innerText = data.data[0].artist.name
        songArtistLink.href = `#artist-${data.data[0].artist.id}`
        songArtistLink.addEventListener("click", (event) => {
          event.preventDefault()
          artistPage(data.data[0].artist.id)
        })
        songDescription.classList.remove("placeholder")
        songDescription.querySelector("span").innerText =
          data.data[0].artist.name
        songPlayBtn.classList.remove("disabled", "placeholder")
        songPlayBtn.querySelector("small").innerText = "Play"
        songPlayBtn.addEventListener("click", () => {
          albumPage(data.data[0].album.id)
        })
        songSaveBtn.classList.remove("disabled", "placeholder")
        songSaveBtn.querySelector("small").innerText = "Salva"

        songSaveBtn.addEventListener("click", () => {
          const libreria = JSON.parse(localStorage.getItem("libreria")) || []
          const albumId = data.data[0].album.id

          libreria.push({
            albumId: albumId,
            albumTitle: data.data[0].album.title,
            albumCover: data.data[0].album.cover_medium,
            artistName: data.data[0].artist.name,
            artistId: data.data[0].artist.id,
          })

          localStorage.setItem("libreria", JSON.stringify(libreria))
          songSaveBtn.querySelector("small").innerText = "Salvato "
        })
      })
      .catch((err) => {
        console.log("ERRORE NEL SERVER", err)
      })
  }

  const getTopReleases = function () {
    const newMusicFridayItalia = [
      "VOLEVO CAPIRE",
      "Focu 'Ranni",
      "Potential",
      "Comuni Immortali",
      "First Light",
      "drop dead",
      "Wait For You",
      "Foto Mosse",
      "La piu bella del mondo",
      "Amarsi nel disordine",
    ]
    let randomSongIndex = Math.floor(
      Math.random() * newMusicFridayItalia.length,
    )
    let randomSong = newMusicFridayItalia[randomSongIndex]
    getAdBannerSong(randomSong)
  }
  getTopReleases()

  let recommendedAlbum = [
    926698181, 958295021, 3602971, 926720971, 926721331, 693008911,
  ]

  if (!localStorage.getItem("lastAlbumId")) {
    localStorage.setItem("lastAlbumId", JSON.stringify(recommendedAlbum))
  }

  recommendedAlbum = JSON.parse(localStorage.getItem("lastAlbumId"))

  const urlAlbum = "https://striveschool-api.herokuapp.com/api/deezer/album/"

  const getRecommendedAlbum = function (albumIndex, domIndex) {
    const urlAlbumCompleto = `${urlAlbum}${recommendedAlbum[albumIndex]}`

    fetch(urlAlbumCompleto)
      .then((result) => {
        if (result.ok) {
          return result.json()
        } else {
          throw new Error("ERRORE JSON", result.status)
        }
      })
      .then((data) => {
        const recommendedCard = document.querySelector(
          `.recommended-album:nth-of-type(${domIndex})`,
        )
        if (recommendedCard) {
          recommendedCard.querySelector("img").src = data.cover_medium
          recommendedCard.querySelector("img").classList.remove("placeholder")
          recommendedCard.querySelector("p").innerText = data.title
          recommendedCard.querySelector("p").classList.remove("placeholder")
          const albumLink = recommendedCard.querySelector("a")
          albumLink.href = `#album-${data.id}`
          albumLink.addEventListener("click", (event) => {
            event.preventDefault()
            albumPage(data.id)
          })
        }
      })
      .catch((err) => {
        console.log("ERRORE NEL SERVER", err)
      })
  }

  for (let i = 0; i < 6; i++) {
    const arrayIndex = recommendedAlbum.length - 1 - i
    const domPosition = i + 1
    getRecommendedAlbum(arrayIndex, domPosition)
  }
}

const albumPage = function (albumId, pushHistory = true) {
  document
    .getElementById("account-bar")
    .classList.replace("position-fixed", "position-sticky")

  document
    .getElementById("account-bar")
    .classList.replace("custom_width", "w-100")
  centralPage.innerHTML = `          <div class="mx-3 mt-3 mt-lg-0">
            <div class="row align-items-end g-4 placeholder-glow">
              <div class="col-12 col-lg-auto text-center text-lg-start">
                <img
                  src="./assets/imgs/main/placeholder.jpg"
                  alt="Album cover"
                  class="rounded-3 shadow album-main-cover placeholder"
                  style="object-fit: cover; max-width: 200px; max-height: 200px"
                />
              </div>

              <div class="col-12 col-lg d-flex flex-column justify-content-end">
                <span
                  class="text-uppercase small fw-semibold text-white-50 d-none d-lg-block"
                  >Album</span
                >
                <div>
                  <h1
                    class="display-3 fw-bold mt-2 mb-2 fs-1 fs-lg-1 placeholder"
                  >
                    Gioventù brucata
                  </h1>
                </div>

                <div
                  class="d-flex align-items-center gap-2 text-white-50 flex-wrap"
                >
                  <button class="btn ps-0" id="artist-link-btn">
                    <img
                      src="./assets/imgs/main/placeholder.jpg"
                      alt="Artist image"
                      class="rounded-circle artist-avatar placeholder"
                      width="28"
                      height="28"
                    />
                    <span class="fw-semibold text-white artist-name placeholder"
                      >Pinguini Tattici Nucleari</span
                    >
                  </button>
                  <span
                    class="album-cover d-none d-lg-inline placeholder text-transparent"
                    >•</span
                  >
                  <span
                    class="artist-name d-none d-lg-inline placeholder text-transparent"
                    >2017</span
                  >
                  <span
                    class="album-year d-none d-lg-inline placeholder text-transparent"
                    >•</span
                  >
                  <span
                    class="album-meta d-none d-lg-inline placeholder text-transparent"
                    >12 brani, 53 min 20 sec.</span
                  >

                  <span
                    class="d-lg-none text-white-50 col-12 placeholder text-transparent"
                  >
                    Album • 2017</span
                  >
                </div>
              </div>
            </div>
          </div>

          <div
            class="d-flex align-items-center justify-content-between px-4 pt-3 pb-2"
          >
            <div class="d-flex align-items-center gap-3">
              <button
                class="btn btn-primary rounded-circle d-none d-lg-flex align-items-center justify-content-center p-3 playAudio"
                style="width: 56px; height: 56px"
              >
                <i class="bi bi-play-fill fs-1"></i>
              </button>

              <i class="bi bi-heart fs-4 fs-lg-3 text-white-50"></i>
              <i class="bi bi-arrow-down-circle fs-4 fs-lg-3 text-white-50"></i>
              <i class="bi bi-three-dots fs-4 fs-lg-3 text-white-50"></i>
            </div>

            <div class="d-flex d-lg-none align-items-center gap-3">
              <i class="bi bi-shuffle fs-4 text-white-50"></i>
              <button
                class="btn btn-primary rounded-circle d-flex align-items-center justify-content-center p-2 playAudio"
                style="width: 48px; height: 48px"
              >
                <i class="bi bi-play-fill fs-3"></i>
              </button>
            </div>
          </div>
          <table
            class="table table_custom table-hover align-middle table-borderless mb-0"
          >
            <thead>
              <tr
                class="text-white-50 small fw-semibold border-bottom border-secondary d-none d-lg-table-row"
              >
                <th scope="col" class="col-1 text-center">#</th>
                <th scope="col" class="col-5">TITOLO</th>
                <th scope="col" class="col-3 text-end">RIPRODUZIONI</th>
                <th scope="col" class="col-3 text-end pe-4">
                  <i class="bi bi-clock me-2"></i>
                </th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>`

  if (pushHistory) {
    window.history.pushState(
      { page: "album", albumId },
      "",
      `#album-${albumId}`,
    )
  }

  const params = new URLSearchParams(window.location.search)

  fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${albumId}`)
    .then((res) => res.json())
    .then((album) => {
      const artistBtn = document.getElementById("artist-link-btn")
      if (artistBtn) {
        artistBtn.addEventListener("click", () => {
          artistPage(album.artist.id)
          window.scrollTo(0, 0)
        })
      }
      initAudioPlayer(album)
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
        const rank = track.rank
          ? Number(track.rank).toLocaleString("it-IT")
          : "—"

        const mobileRow = document.createElement("div")
        mobileRow.className =
          "d-lg-none d-flex justify-content-between align-items-center w-100 mb-3"
        mobileRow.setAttribute("data-track-index", index)
        mobileRow.style.cursor = "pointer"
        mobileRow.innerHTML = `
        <div class="d-flex align-items-center gap-3">
          <div class="ms-3">
            <div class="fw-semibold">${track.title}</div>
            <div class="small text-white-50">${album.artist.name}</div>
          </div>
        </div>
        <i class="bi bi-three-dots-vertical text-white-50 fs-3 me-4"></i>
      `

        const desktopRow = document.createElement("tr")
        desktopRow.className = "d-none d-lg-table-row"
        desktopRow.setAttribute("data-track-index", index)
        desktopRow.style.cursor = "pointer"
        desktopRow.innerHTML = `
        <td class="text-white-50 text-center">${index + 1}</td>
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

      document.querySelectorAll(".placeholder-glow").forEach((el) => {
        el.classList.remove("placeholder-glow")
      })

      document.querySelectorAll(".placeholder").forEach((el) => {
        el.classList.remove("placeholder", "text-transparent")
      })

      initAudioPlayer(album)
    })
    .catch((err) => console.error("Errore fetch album:", err))
}

const artistPage = function (artistId, pushHistory = true) {
  if (pushHistory) {
    window.history.pushState(
      { page: "artist", artistId },
      "",
      `#artist-${artistId}`,
    )
  }
  centralPage.innerHTML = `
            <div
            id="artist-img"
            style="height: 50vh"
            class="position-sticky top-0 z-0"
          ></div>
          <div
            class="px-lg-4 position-relative z-2"
            style="
              background: #212529;
              background: linear-gradient(
                0deg,
                rgba(33, 37, 41, 1) 0%,
                rgba(33, 37, 41, 1) 80%,
                rgba(65, 69, 72, 0) 100%
              );
            "
          >
            <!-- HEADER ARTISTA -->
            <div class="position-relative bg-transparent">
              <!-- IMMAGINE ARTISTA -->
              <section id="artistDinamic" class="bg-transparent"></section>
            </div>

            <!-- CONTENUTO -->
            <div class="container-fluid mb-4 py-4">
              <!-- BOTTONI -->
              <div class="d-flex align-items-center gap-3 mb-4">
                <button
                  class="btn btn-primary rounded-circle d-none d-lg-flex align-items-center justify-content-center p-3 playAudio"
                  style="width: 56px; height: 56px"
                >
                  <i class="bi bi-play-fill fs-1"></i>
                </button>
                <button class="btn btn-outline-light btn-sm px-4 fw-bold">
                  FOLLOWING
                </button>

                <button class="btn text-white fs-4 p-0">
                  <i class="bi bi-three-dots"></i>
                </button>
              </div>

              <div class="row">
                <!-- LISTA BRANI -->
                <div class="col-12 col-lg-7">
                  <h3 class="fw-bold mb-4">Popolari</h3>
                  <div id="songDiv"></div>
                </div>

                <!-- COLONNA DESTRA -->
                <div class="col-12 col-lg-5 mt-5 mt-lg-0">
                  <h3 class="fw-bold mb-4">Brani che ti piacciono</h3>

                  <div class="d-flex align-items-center gap-3 placeholder-glow">
                    <div class="position-relative">
                      <img
                        src="./assets/imgs/main/placeholder.jpg"
                        alt="artist profile"
                        class="rounded-circle placeholder"
                        id="small-artist-profile"
                        width="55"
                        height="55"
                      />
                      <div
                        class="position-absolute bottom-0 end-0 bg-primary rounded-circle d-flex align-items-center justify-content-center"
                      >
                        <i class="bi bi-heart-fill text-white lh-1 m-1"></i>
                      </div>
                    </div>

                    <div>
                      <div class="fw-bold placeholder">
                        Hai messo Mi piace a 11 brani
                      </div>
                      <div class="text-secondary small" id="like"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  `

  document
    .getElementById("account-bar")
    .classList.replace("position-sticky", "position-fixed")

  document
    .getElementById("account-bar")
    .classList.replace("w-100", "custom_width")

  fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}`)
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("ERRORE NEL JSON", response.status)
      }
    })
    .then((data) => {
      const profileSection = document.getElementById("artistDinamic")
      const like = document.getElementById("like")
      document.getElementById("artist-img").innerHTML = `
      <div class="h-100 w-100" style="background-image: url('${data.picture_xl}');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;"></div>`
      profileSection.innerHTML = `
      
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
      like.innerHTML = `
          <div class="text-secondary small" id="like">Di ${data.name}</div>
        `
      document.getElementById("small-artist-profile").src = data.picture_small
    })
    .catch((err) => {
      console.log("Errore del server", err)
    })
  fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/artist/" +
      artistId +
      "/top?limit=50",
  )
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("ERRORE NEL JSON", response.status)
      }
    })
    .then((data) => {
      const songDiv = document.getElementById("songDiv")
      const nuovoAlbum = {
        artist: { name: data.data[0].artist.name },
        cover_small: data.data[0].album.cover_small,
        tracks: {
          data: data.data.slice(0, 5),
        },
      }
      // for (i = 0; i < 5; i++) {
      //   songDiv.innerHTML += `
      //   <div class="d-flex align-items-center py-2">
      //     <div class="text-secondary me-3 ">${i + 1}</div>
      //       <a href="#" id="song-${i}" data-track-index="${i}">
      //         <img
      //           src="${data.data[i].album.cover}"
      //           alt=""
      //           class="me-3"
      //           width="40"
      //           height="40"
      //         />
      //       </a>
      //       <div class="fw-semibold flex-grow-1">${data.data[i].title}</div>
      //       <div class="text-secondary me-4 d-none d-md-block">276.616.912</div>
      //       <div class="text-secondary">
      //         ${String(data.data[i].duration)[0]}:${String(data.data[i].duration).slice(1)}
      //     </div>
      //   </div>
      //   `
      // }
      for (let i = 0; i < 5; i++) {
        songDiv.innerHTML += `
        <div class="d-flex align-items-center py-2" data-track-index="${i}" style="cursor: pointer">
          <div class="text-secondary me-3">${i + 1}</div>
          <img
            src="${data.data[i].album.cover}"
            alt=""
            class="me-3"
            width="40"
            height="40"
          />
          <div class="fw-semibold flex-grow-1">${data.data[i].title}</div>
          <div class="text-secondary me-4 d-none d-md-block">276.616.912</div>
          <div class="text-secondary">
            ${String(data.data[i].duration)[0]}:${String(data.data[i].duration).slice(1)}
          </div>
        </div>`
      }
      initAudioPlayer(nuovoAlbum)
    })
    .catch((err) => {
      console.log("ARTISTA NON TROVATO", err)
    })

  document.querySelectorAll(".placeholder-glow").forEach((el) => {
    el.classList.remove("placeholder-glow")
  })

  document.querySelectorAll(".placeholder").forEach((el) => {
    el.classList.remove("placeholder", "text-transparent")
  })
}

function startPlayer(data, tipo) {
  fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/album/${data.album.id}`,
  )
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("ERRORE NEL JSON", response.status)
      }
    })
    .then((dataAlbum) => {
      initAudioPlayer(dataAlbum)
      console.log(dataAlbum)
    })
    .catch((err) => {
      console.log("Errore del server", err)
    })
}
let currentAlbum = null
let currentAudio = null // laudio che ce adesso
let currentTrackIndex = null // lindice  della traccia attiva

let playerInitialized = false

function initAudioPlayer(album) {
  currentAlbum = album
  const volumeFill = document.querySelector(".col-4:last-child .progress-bar")
  const volumeBar = document.querySelector(".col-4:last-child .progress")
  const trackBar = document.querySelector(".col-4.flex-column .progress")
  const trackFill = document.querySelector(".col-4.flex-column .progress-bar")
  const currentTimeTxt = document.querySelector(
    ".col-4.flex-column small:first-child",
  )

  function updatePlayerBar(track) {
    const titoloDesktop = document.querySelector(
      "nav.fixed-bottom.d-lg-flex .fw-bold.small",
    )
    if (titoloDesktop !== null) titoloDesktop.textContent = track.title

    const artistaDesktop = document.querySelector(
      "nav.fixed-bottom.d-lg-flex .text-muted.small",
    )
    if (artistaDesktop !== null) artistaDesktop.textContent = album.artist.name

    const copertina = document.querySelector("nav.fixed-bottom.d-lg-flex img")
    if (copertina !== null) {
      copertina.src =
        track.album?.cover_small ||
        album.cover_small ||
        "./assets/imgs/main/image-1.jpg"
    }

    const copertinaMobile = document.querySelector(
      "nav.position-fixed.d-lg-none img",
    )
    if (copertinaMobile !== null) {
      copertinaMobile.src =
        track.album?.cover_small ||
        album.cover_small ||
        "./assets/imgs/main/image-1.jpg"
    }

    const titoloMobile = document.querySelector(
      "nav.position-fixed .fw-bold.small",
    )
    if (titoloMobile !== null) titoloMobile.textContent = track.title

    const artistaMobile = document.querySelector(
      "nav.position-fixed .text-muted.small",
    )
    if (artistaMobile !== null) artistaMobile.textContent = album.artist.name

    document
      .querySelectorAll("[data-track-index] .fw-semibold")
      .forEach((t) => t.classList.remove("text-primary"))
    document
      .querySelectorAll(
        `[data-track-index='${currentTrackIndex}'] .fw-semibold`,
      )
      .forEach((r) => r.classList.add("text-primary"))
  }

  function setPlayingState(produrre) {
    const bottoneDesktop = document.querySelector("nav.fixed-bottom .btn-light")
    if (bottoneDesktop) {
      bottoneDesktop.innerHTML = produrre
        ? '<i class="bi bi-pause-fill fs-3"></i>'
        : '<i class="bi bi-play-fill fs-3"></i>'
    }

    const bottoneMobile = document.getElementById("mobilePlayBtn")
    if (bottoneMobile !== null) {
      bottoneMobile.innerHTML = produrre
        ? '<i class="bi bi-pause-fill"></i>'
        : '<i class="bi bi-play-fill"></i>'
    }

    document.querySelectorAll(".playAudio i").forEach((icona) => {
      icona.className = produrre
        ? "bi bi-pause-fill fs-1"
        : "bi bi-play-fill fs-1"
    })
  }

  function togglePlayPause() {
    if (currentAudio === null) {
      playTrack(album.tracks.data[0], 0)
      return
    }
    if (currentAudio.paused) {
      currentAudio.play().then(() => setPlayingState(true))
    } else {
      currentAudio.pause()
      setPlayingState(false)
    }
  }

  function playTrack(traccia, indice) {
    if (trackFill) trackFill.style.width = "0%"

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

    currentAudio.addEventListener("timeupdate", function () {
      const percentuale = (currentAudio.currentTime / 30) * 100
      if (trackFill) trackFill.style.width = percentuale + "%"
      if (currentTimeTxt) {
        const secondi = Math.floor(currentAudio.currentTime)
        currentTimeTxt.textContent = `0:${secondi < 10 ? "0" + secondi : secondi}`
      }
    })

    const volumeAttuale = parseFloat(volumeFill.style.width) / 100
    currentAudio.volume = isNaN(volumeAttuale) ? 1 : volumeAttuale

    currentAudio.play().then(() => {
      setPlayingState(true)
      updatePlayerBar(traccia)
    })

    currentAudio.addEventListener("ended", function () {
      currentTrackIndex = null
      setPlayingState(false)
      const tracciaSucessiva = album.tracks.data[indice + 1]
      if (tracciaSucessiva) playTrack(tracciaSucessiva, indice + 1)
    })
  }

  if (!playerInitialized) {
    playerInitialized = true

    trackBar.addEventListener("click", function (evento) {
      if (currentAudio === null) return
      const percentuale =
        (evento.clientX - trackBar.getBoundingClientRect().left) /
        trackBar.offsetWidth
      currentAudio.currentTime = percentuale * 30
      if (trackFill) trackFill.style.width = percentuale * 100 + "%"
    })

    volumeBar.addEventListener("click", function (evento) {
      const percentuale =
        (evento.clientX - volumeBar.getBoundingClientRect().left) /
        volumeBar.offsetWidth
      if (volumeFill) volumeFill.style.width = percentuale * 100 + "%"
      if (currentAudio !== null) currentAudio.volume = percentuale
    })

    const bottonePlayDesktop = document.querySelector(
      "nav.fixed-bottom .btn-light",
    )
    if (bottonePlayDesktop !== null) {
      const nuovoBottone = bottonePlayDesktop.cloneNode(true)
      bottonePlayDesktop.parentNode.replaceChild(
        nuovoBottone,
        bottonePlayDesktop,
      )
      nuovoBottone.addEventListener("click", togglePlayPause)
    }

    const bottonePlayMobile = document.getElementById("mobilePlayBtn")
    if (bottonePlayMobile !== null) {
      const nuovoBottoneMobile = bottonePlayMobile.cloneNode(true)
      bottonePlayMobile.parentNode.replaceChild(
        nuovoBottoneMobile,
        bottonePlayMobile,
      )
      nuovoBottoneMobile.addEventListener("click", togglePlayPause)
    }

    const bottoneSuccessivo = document.querySelector(
      "nav.fixed-bottom .bi-skip-end-fill",
    )
    if (bottoneSuccessivo !== null) {
      bottoneSuccessivo
        .closest("button")
        .addEventListener("click", function () {
          if (
            currentTrackIndex !== null &&
            currentAlbum.tracks.data[currentTrackIndex + 1]
          ) {
            playTrack(
              currentAlbum.tracks.data[currentTrackIndex + 1],
              currentTrackIndex + 1,
            )
          }
        })
    }

    const bottonePrecedente = document.querySelector(
      "nav.fixed-bottom .bi-skip-start-fill",
    )
    if (bottonePrecedente !== null) {
      bottonePrecedente
        .closest("button")
        .addEventListener("click", function () {
          if (currentTrackIndex > 0) {
            playTrack(
              currentAlbum.tracks.data[currentTrackIndex - 1],
              currentTrackIndex - 1,
            )
          }
        })
    }
  }

  document.querySelectorAll(".playAudio").forEach((bottone) => {
    const nuovoBottone = bottone.cloneNode(true)
    bottone.parentNode.replaceChild(nuovoBottone, bottone)
    nuovoBottone.addEventListener("click", togglePlayPause)
  })

  document.querySelectorAll("[data-track-index]").forEach((riga) => {
    const indiceTraccia = parseInt(riga.getAttribute("data-track-index"))
    riga.addEventListener("click", () =>
      playTrack(album.tracks.data[indiceTraccia], indiceTraccia),
    )
  })
}

const searchPage = function (pushHistory = true) {
  document
    .getElementById("account-bar")
    .classList.replace("position-fixed", "position-sticky")

  document
    .getElementById("account-bar")
    .classList.replace("custom_width", "w-100")
  if (pushHistory) {
    window.history.pushState({ page: "search" }, "", "#search")
  }
  centralPage.innerHTML = `
    <section class="p-2 container-fluid" style="height: 100vh">
      <form id="search-form">
        <div>
          <h1 class="ms-3 ms-md-0 text-md-center">Cerca</h1>
          <div
            class="input-group bg-dark rounded overflow-hidden mt-5 me-auto ms-auto"
            style="max-width: 400px"
          >
            <span class="input-group-text bg-dark border-0 pe-1">
              <i class="bi bi-search text-white fs-5"></i>
            </span>

            <input
              type="text"
              class="form-control bg-dark border-0 text-white shadow-none py-2"
              placeholder="Cosa vuoi ascoltare?"
              style="outline: none"
            />
          </div>
        </div>
      </form>
      <div id="search-container">
        <div>
          <h2 class="fw-bold text-center mt-3">Sfoglia tutto</h2>
          <div class="container-fluid py-3">
            <div class="row g-3">
              <div class="col-6 col-md-4 col-xl-2">
                <div
                  class="card-spotify rounded-3"
                  style="background-color: #e94c1d"
                >
                  <h5 class="fw-bold">Podcast</h5>
                  <img
                    src="./assets/imgs/search/image-52.jpg"
                    class="spotify-card-img"
                    alt="Podcast"
                  />
                </div>
              </div>

              <div class="col-6 col-md-4 col-xl-2">
                <div
                  class="card-spotify rounded-3"
                  style="background-color: #1e3264"
                >
                  <h5 class="fw-bold">Creati per te</h5>
                  <img
                    src="./assets/imgs/search/image-51.jpg"
                    class="spotify-card-img"
                    alt="Creati per te"
                  />
                </div>
              </div>

              <div class="col-6 col-md-4 col-xl-2">
                <div
                  class="card-spotify rounded-3"
                  style="background-color: #774194"
                >
                  <h5 class="fw-bold">Nuove uscite</h5>
                  <img
                    src="./assets/imgs/search/image-50.jpg"
                    class="spotify-card-img"
                    alt="Nuove uscite"
                  />
                </div>
              </div>

              <div class="col-6 col-md-4 col-xl-2">
                <div
                  class="card-spotify rounded-3"
                  style="background-color: #d84000"
                >
                  <h5 class="fw-bold">Pop</h5>
                  <img
                    src="./assets/imgs/search/image-49.jpg"
                    class="spotify-card-img"
                    alt="Pop"
                  />
                </div>
              </div>

              <div class="col-6 col-md-4 col-xl-2">
                <div
                  class="card-spotify rounded-3"
                  style="background-color: #e8115b"
                >
                  <h5 class="fw-bold">Hip Hop</h5>
                  <img
                    src="./assets/imgs/search/image-48.jpeg"
                    class="spotify-card-img"
                    alt="Hip Hop"
                  />
                </div>
              </div>

              <div class="col-6 col-md-4 col-xl-2">
                <div
                  class="card-spotify rounded-3"
                  style="background-color: #148a08"
                >
                  <h5 class="fw-bold">Rock</h5>
                  <img
                    src="./assets/imgs/search/image-47.jpg"
                    class="spotify-card-img"
                    alt="Rock"
                  />
                </div>
              </div>

              <div class="col-6 col-md-4 col-xl-2">
                <div
                  class="card-spotify rounded-3"
                  style="background-color: #503750"
                >
                  <h5 class="fw-bold">Latina</h5>
                  <img
                    src="./assets/imgs/search/image-46.jpeg"
                    class="spotify-card-img"
                    alt="Latina"
                  />
                </div>
              </div>

              <div class="col-6 col-md-4 col-xl-2">
                <div
                  class="card-spotify rounded-3"
                  style="background-color: #006450"
                >
                  <h5 class="fw-bold">Dance</h5>
                  <img
                    src="./assets/imgs/search/image-34.jpg"
                    class="spotify-card-img"
                    alt="Dance"
                  />
                </div>
              </div>
              <div class="col-6 col-md-4 col-xl-2">
                <div
                  class="card-spotify rounded-3"
                  style="background-color: #e94c1d"
                >
                  <h5 class="fw-bold">Podcast</h5>
                  <img
                    src="./assets/imgs/search/image-35.jpg"
                    class="spotify-card-img"
                    alt="Podcast"
                  />
                </div>
              </div>

              <div class="col-6 col-md-4 col-xl-2">
                <div
                  class="card-spotify rounded-3"
                  style="background-color: #1e3264"
                >
                  <h5 class="fw-bold">Creati per te</h5>
                  <img
                    src="./assets/imgs/search/image-36.jpg"
                    class="spotify-card-img"
                    alt="Creati per te"
                  />
                </div>
              </div>

              <div class="col-6 col-md-4 col-xl-2">
                <div
                  class="card-spotify rounded-3"
                  style="background-color: #774194"
                >
                  <h5 class="fw-bold">Nuove uscite</h5>
                  <img
                    src="./assets/imgs/search/image-37.jpeg"
                    class="spotify-card-img"
                    alt="Nuove uscite"
                  />
                </div>
              </div>

              <div class="col-6 col-md-4 col-xl-2">
                <div
                  class="card-spotify rounded-3"
                  style="background-color: #d8b800"
                >
                  <h5 class="fw-bold">Indie</h5>
                  <img
                    src="./assets/imgs/search/image-38.jpg"
                    class="spotify-card-img"
                    alt="Pop"
                  />
                </div>
              </div>

              <div class="col-6 col-md-4 col-xl-2">
                <div
                  class="card-spotify rounded-3"
                  style="background-color: #e8115b"
                >
                  <h5 class="fw-bold">Hip Hop</h5>
                  <img
                    src="./assets/imgs/search/image-39.jpg"
                    class="spotify-card-img"
                    alt="Hip Hop"
                  />
                </div>
              </div>

              <div class="col-6 col-md-4 col-xl-2">
                <div
                  class="card-spotify rounded-3"
                  style="background-color: #148a08"
                >
                  <h5 class="fw-bold">Rock</h5>
                  <img
                    src="./assets/imgs/search/image-40.jpg"
                    class="spotify-card-img"
                    alt="Rock"
                  />
                </div>
              </div>

              <div class="col-6 col-md-4 col-xl-2">
                <div
                  class="card-spotify rounded-3"
                  style="background-color: #503750"
                >
                  <h5 class="fw-bold">Latina</h5>
                  <img
                    src="./assets/imgs/search/image-41.jpg"
                    class="spotify-card-img"
                    alt="Latina"
                  />
                </div>
              </div>

              <div class="col-6 col-md-4 col-xl-2">
                <div
                  class="card-spotify rounded-3"
                  style="background-color: #006450"
                >
                  <h5 class="fw-bold">Dance</h5>
                  <img
                    src="./assets/imgs/search/image-42.png"
                    class="spotify-card-img"
                    alt="Dance"
                  />
                </div>
              </div>
              <div class="col-6 col-md-4 col-xl-2">
                <div
                  class="card-spotify rounded-3"
                  style="background-color: #774194"
                >
                  <h5 class="fw-bold">Nuove uscite</h5>
                  <img
                    src="./assets/imgs/search/image-43.png"
                    class="spotify-card-img"
                    alt="Nuove uscite"
                  />
                </div>
              </div>

              <div class="col-6 col-md-4 col-xl-2">
                <div
                  class="card-spotify rounded-3"
                  style="background-color: #d84000"
                >
                  <h5 class="fw-bold">Pop</h5>
                  <img
                    src="./assets/imgs/search/image-44.png"
                    class="spotify-card-img"
                    alt="Pop"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav
        class="navbar fixed-bottom bg-body-tertiary original-player-bar d-none d-lg-flex"
      >
        <div class="container-fluid">
          <div class="row w-100 align-items-center mt-3 mb-3">
            <div class="col-4 d-flex align-items-center gap-2">
              <img
                id="song-cover"
                src="./assets/imgs/main/image-1.jpg"
                alt="icona canzone"
                style="
                  width: 56px;
                  height: 56px;
                  object-fit: cover;
                  border-radius: 4px;
                "
              />
              <div>
                <div id="song-name" class="fw-bold small">Fat Funny Friend</div>
                <div id="song-artist" class="text-muted small">Maddie Zahm</div>
              </div>
              <i class="bi bi-heart ms-3"></i>
            </div>
            <div class="col-4 d-flex flex-column align-items-center gap-1">
              <div class="d-flex align-items-center gap-3">
                <button class="btn btn-link text-white p-0">
                  <i class="bi bi-shuffle"></i>
                </button>
                <button class="btn btn-link text-white p-0">
                  <i class="bi bi-skip-start-fill fs-3"></i>
                </button>
                <button
                  onclick="stopPlaySong()"
                  class="btn btn-light rounded-circle d-flex align-items-center justify-content-center"
                  style="width: 40px; height: 40px"
                >
                  <i class="bi bi-play-fill fs-3"></i>
                </button>
                <button class="btn btn-link text-white p-0">
                  <i class="bi bi-skip-end-fill fs-3"></i>
                </button>
                <button class="btn btn-link text-white p-0">
                  <i class="bi bi-repeat"></i>
                </button>
              </div>
              <div class="d-flex align-items-center gap-2 w-100">
                <small class="text-muted">0:38</small>
                <div class="progress flex-grow-1" style="height: 4px">
                  <div class="progress-bar bg-white" style="width: 19%"></div>
                </div>
                <small class="text-muted">3:20</small>
              </div>
            </div>
            <div
              class="col-4 d-flex align-items-center justify-content-end gap-3"
            >
              <button class="btn btn-link text-white p-0 fs-5">
                <span class="e-10310-button__icon-wrapper">
                  <svg
                    viewBox="0 0 16 16"
                    width="20"
                    height="20"
                    fill="currentColor"
                  >
                    <path
                      d="M13.426 2.574a2.831 2.831 0 0 0-4.797 1.55l3.247 3.247a2.831 2.831 0 0 0 1.55-4.797M10.5 8.118l-2.619-2.62L4.74 9.075 2.065 12.12a1.287 1.287 0 0 0 1.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 1 1 4.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 0 1-3.933-3.933l2.676-3.045z"
                    ></path>
                  </svg>
                </span>
              </button>
              <button class="btn btn-link text-white p-0 fs-5">
                <span class="e-10310-button__icon-wrapper">
                  <svg
                    viewBox="0 0 16 16"
                    width="20"
                    height="20"
                    fill="currentColor"
                  >
                    <path
                      d="M15 15H1v-1.5h14zm0-4.5H1V9h14zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5m2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2z"
                    ></path>
                  </svg>
                </span>
              </button>
              <button class="btn btn-link text-white p-0 fs-5">
                <span class="e-10310-button__icon-wrapper">
                  <svg
                    viewBox="0 0 16 16"
                    width="20"
                    height="20"
                    fill="currentColor"
                  >
                    <path
                      d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15h-6.5A1.75 1.75 0 0 1 6 13.25zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25zm-6 0a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 0 1 0 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5zM4 15H2v-1.5h2z"
                    ></path>
                    <path
                      d="M13 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                    ></path>
                  </svg>
                </span>
              </button>
              <div class="d-flex align-items-center gap-2">
                <span class="e-10310-button__icon-wrapper">
                  <svg
                    viewBox="0 0 16 16"
                    width="20"
                    height="20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.64 3.64 0 0 1-1.33-4.967 3.64 3.64 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.14 2.14 0 0 0 0 3.7l5.8 3.35V2.8zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88"
                    ></path>
                    <path
                      d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127z"
                    ></path>
                  </svg>
                </span>
                <div class="progress" style="width: 90px; height: 6px">
                  <div class="progress-bar bg-white" style="width: 80%"></div>
                </div>
              </div>
              <button class="btn btn-link text-white p-0 fs-5">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABOElEQVR4AcyVXRLBMBSFW6vwhje7wEowYyF2goUYluGNR7uo70RzJyVTadSMTk5+bpNzmpub20Hx4+d/BaqqWoFTBFdsZ++YvncwhXgMRsCVbIGyLPdg4QHbDQzBHahPUxTZAm51XeGSHd0V2IMLsPK1QEjObtbGXHe+EvhELo1sgRTybIEP5AeIBZqMQ4Z8zkp3oDGfY1N06bCZliEAgS7RhPbtQB3jS5V8Bny5LpBbDrnFuTO0VEkCkCvOlQJMpIWz8coEIFFu2TbeMsAucu/z5C9nqSsmwGgJZsDKC3mSz21x3QkFatOz6YNcTFGBvsijAn2SxwSUz/2BZvlcpCFCFykEfT4fs5Pwb/UWXSFJWz8UODJRYdjI59hUZFfbGSbA7dwApQD7SzH2fcstXRVMoOvC1PkPAAAA//9vuTSfAAAABklEQVQDACRkiDF0aCKCAAAAAElFTkSuQmCC"
                  alt="icon"
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <nav
        class="navbar position-fixed mb-4 bg-body-tertiary original-player-bar d-lg-none w-100 rounded-3"
        style="
          bottom: 70px;
          left: 8px;
          right: 8px;
          width: calc(100% - 16px) !important;
          padding: 10px 12px;
        "
      >
        <div class="container-fluid p-0">
          <div class="d-flex align-items-center justify-content-between w-100">
            <div
              class="d-flex align-items-center gap-2 flex-grow-1"
              style="min-width: 0"
            >
              <img
                src="./assets/imgs/main/image-1.jpg"
                alt="icona canzone"
                style="
                  width: 36px;
                  height: 36px;
                  object-fit: cover;
                  border-radius: 4px;
                  flex-shrink: 0;
                "
              />
              <div style="min-width: 0">
                <div class="fw-bold small text-truncate">Fat Funny Friend</div>
                <div class="text-muted small text-truncate">Maddie Zahm</div>
              </div>
            </div>

            <div class="d-flex align-items-center gap-3 flex-shrink-0 ms-2">
              <button class="btn btn-link text-white p-0">
                <svg
                  viewBox="0 0 16 16"
                  width="20"
                  height="20"
                  fill="currentColor"
                >
                  <path
                    d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15h-6.5A1.75 1.75 0 0 1 6 13.25zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25zm-6 0a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 0 1 0 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5zM4 15H2v-1.5h2z"
                  ></path>
                  <path
                    d="M13 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                  ></path>
                </svg>
              </button>

              <button class="btn btn-link text-white p-0">
                <i class="bi bi-heart fs-5"></i>
              </button>

              <button
                class="btn btn-link text-white p-0"
                style="font-size: 1.6rem; line-height: 1"
              >
                <i class="bi bi-play-fill"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <nav class="navbar fixed-bottom fixed-navbar-spotify d-lg-none">
        <div class="d-flex justify-content-between" style="width: 100%">
          <div class="container-fluid d-flex flex-column align-items-center">
            <a class="navbar-brand m-0 p-0 text-center" href="/home.html"
              ><i class="bi bi-house-fill fs-2"></i
            ></a>
            <p class="mb-1">Home</p>
          </div>
          <div class="container-fluid d-flex flex-column align-items-center">
            <a class="navbar-brand m-0 p-0 text-center" href="search.html"
              ><i class="bi bi-search fs-2"></i
            ></a>
            <p class="mb-1">Search</p>
          </div>
          <div class="container-fluid d-flex flex-column align-items-center">
            <a class="navbar-brand m-0 p-0 text-center" href="#"
              ><i class="bi bi-collection fs-2"></i
            ></a>
            <p class="mb-1">La tua libreria</p>
          </div>
        </div>
      </nav>
    </section>
  `
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

  const playSong = function (songCover, songName, artistName, songPreview) {
    document.getElementById("song-cover").src = songCover
    document.getElementById("song-name").innerText = songName
    document.getElementById("song-artist").innerText = artistName

    if (currentAudio) currentAudio.pause()
    currentAudio = new Audio(songPreview)
    currentAudio.play()
    currentAudio.volume = 0.1
  }

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

            data.data.sort((a, b) => b.rank - a.rank)
            searchDiv.innerHTML = ""
            divCard.innerHTML = `<div class="container rounded-2 text-light px-0 mt-4">
  <div class="row justify-content-center justify-content-md-between">
    <div class="col-9 col-md-4"><h2 class="fw-bold mb-4">Risultato più rilevante</h2></div>
    <div class="d-none d-md-flex col-md-7"><h2 class="fw-bold mb-4">Brani più ascoltati</h2></div>
  </div>
  <div class="row justify-content-center justify-content-md-between">
    <div class="col-9 col-md-4 bg-dark py-3 ps-3 rounded-2">
      <div class="card border-0 p-3">
        <div class="card-body">
          <a href="#" onclick="artistPage(${data.data[i].artist.id}); return false;">   
            <img
              src="${data.data[i].artist.picture_medium}"
              alt="Artist-picture"
              class="rounded-circle mb-3 shadow object-fit-cover"
              style="width: 150px; height: 150px; cursor: pointer;"
            />
          </a>
          <h3 class="card-title fw-bold m-0">${data.data[i].artist.name}</h3>
          <p class="card-text text-secondary mt-1">Artista</p>
        </div>
      </div>
    </div>
    <div class="col-9 d-md-none"><h2 class="fw-bold mt-4">Brani più ascoltati</h2></div>
    <div class="col-9 col-md-7 py-0 ps-3 rounded-2">
      <div class="card border-0 p-3">
        <div class="card-body h-100">
          <ul class="list-unstyled mb-0 d-flex justify-content-between flex-column h-100">
            
            <li class="d-flex gap-4 align-items-center">
              <a href="#" onclick="event.stopPropagation(); albumPage(${data.data[0].album.id}); return false;">
                <img src="${data.data[0].album.cover_medium}" alt="album-picture" class="rounded-2 shadow object-fit-cover p-1 p-md-0" style="width: 50px; height: 50px; cursor: pointer;" />
              </a>
              <div class="d-flex flex-column justify-content-between flex-grow-1">
                <a href="#" onclick="event.stopPropagation(); albumPage(${data.data[0].album.id}); return false;" class="text-decoration-none">
                  <h5 class="card-title fw-bold m-0 text-start text-white">${data.data[0].title.toUpperCase()}</h5>
                </a>
                <p class="text-secondary m-0 text-start">${data.data[0].artist.name}</p>
              </div>
              <button class="border-0 p-0 shadow-none bg-transparent" onclick="event.stopPropagation(); playSong('${data.data[0].album.cover_medium}', '${data.data[0].title.replaceAll("'", "")}', '${data.data[0].artist.name}', '${data.data[0].preview}')">
                <i class="bi bi-play-circle fs-4 text-white"></i>
              </button>
            </li>

            <li class="d-flex gap-4 align-items-center mt-2">
              <a href="#" onclick="event.stopPropagation(); albumPage(${data.data[1].album.id}); return false;">
                <img src="${data.data[1].album.cover_medium}" alt="album-picture" class="rounded-2 shadow object-fit-cover p-1 p-md-0" style="width: 50px; height: 50px; cursor: pointer;" />
              </a>
              <div class="d-flex flex-column justify-content-between flex-grow-1">
                <a href="#" onclick="event.stopPropagation(); albumPage(${data.data[1].album.id}); return false;" class="text-decoration-none">
                  <h5 class="card-title fw-bold m-0 text-start text-white">${data.data[1].title.toUpperCase()}</h5>
                </a>
                <p class="text-secondary m-0 text-start">${data.data[1].artist.name}</p>
              </div>
              <button class="border-0 p-0 shadow-none bg-transparent" onclick="event.stopPropagation(); playSong('${data.data[1].album.cover_medium}', '${data.data[1].title.replaceAll("'", "")}', '${data.data[1].artist.name}', '${data.data[1].preview}')">
                <i class="bi bi-play-circle fs-4 text-white"></i>
              </button>
            </li>

            <li class="d-flex gap-4 align-items-center mt-2">
              <a href="#" onclick="event.stopPropagation(); albumPage(${data.data[2].album.id}); return false;">
                <img src="${data.data[2].album.cover_medium}" alt="album-picture" class="rounded-2 shadow object-fit-cover p-1 p-md-0" style="width: 50px; height: 50px; cursor: pointer;" />
              </a>
              <div class="d-flex flex-column justify-content-between flex-grow-1">
                <a href="#" onclick="event.stopPropagation(); albumPage(${data.data[2].album.id}); return false;" class="text-decoration-none">
                  <h5 class="card-title fw-bold m-0 text-start text-white">${data.data[2].title.toUpperCase()}</h5>
                </a>
                <p class="text-secondary m-0 text-start">${data.data[2].artist.name}</p>
              </div>
              <button class="border-0 p-0 shadow-none bg-transparent" onclick="event.stopPropagation(); playSong('${data.data[2].album.cover_medium}', '${data.data[2].title.replaceAll("'", "")}', '${data.data[2].artist.name}', '${data.data[2].preview}')">
                <i class="bi bi-play-circle fs-4 text-white"></i>
              </button>
            </li>

            <li class="d-flex gap-4 align-items-center mt-2">
              <a href="#" onclick="event.stopPropagation(); albumPage(${data.data[3].album.id}); return false;">
                <img src="${data.data[3].album.cover_medium}" alt="album-picture" class="rounded-2 shadow object-fit-cover p-1 p-md-0" style="width: 50px; height: 50px; cursor: pointer;" />
              </a>
              <div class="d-flex flex-column justify-content-between flex-grow-1">
                <a href="#" onclick="event.stopPropagation(); albumPage(${data.data[3].album.id}); return false;" class="text-decoration-none">
                  <h5 class="card-title fw-bold m-0 text-start text-white">${data.data[3].title.toUpperCase()}</h5>
                </a>
                <p class="text-secondary m-0 text-start">${data.data[3].artist.name}</p>
              </div>
              <button class="border-0 p-0 shadow-none bg-transparent" onclick="event.stopPropagation(); playSong('${data.data[3].album.cover_medium}', '${data.data[3].title.replaceAll("'", "")}', '${data.data[3].artist.name}', '${data.data[3].preview}')">
                <i class="bi bi-play-circle fs-4 text-white"></i>
              </button>
            </li>

          </ul>         
        </div>
      </div>
    </div>
  </div>
</div>`

            searchDiv.appendChild(divCard)
          }
        }
        if (index === 0) {
          for (let i = 0; i < data.data.length; i++) {
            if (
              data.data[i].title.toLowerCase() === searchInput.toLowerCase()
            ) {
              index++
              const getRandom = () =>
                Math.floor(Math.random() * data.data.length)

              const rand1 = getRandom()
              const rand2 = getRandom()
              const rand3 = getRandom()
              const rand4 = getRandom()

              searchDiv.innerHTML = ""
              divCard.innerHTML = `<div class="container rounded-2 text-light px-0 mt-4">
          <div class="row justify-content-center justify-content-md-between">
            <div class="col-9 col-md-4"><h2 class="fw-bold mb-4">Risultato più rilevante</h2></div>
            <div class="d-none d-md-flex col-9 col-md-7"><h2 class="fw-bold mb-4">Ti potrebbe piacere anche</h2></div>
          </div>
          <div class="row justify-content-center justify-content-md-between">
            <div class="col-9 col-md-4 bg-dark py-3 ps-3 rounded-2">
              <div class="card border-0 p-3">
                <div class="card-body">
                  <a href="#" onclick="albumPage(${data.data[0].album.id}); return false;">
                    <img
                      src="${data.data[0].album.cover_medium}"
                      alt="Album-picture"
                      class="rounded-circle mb-3 shadow object-fit-cover"
                      style="width: 150px; height: 150px; cursor: pointer;"
                    />
                  </a>
                  <h3 class="card-title fw-bold m-0">${data.data[0].title}</h3>
                  <p class="card-text text-secondary mt-1">${data.data[0].artist.name}</p>
                  <button class="btn btn-primary btn-sm mt-2" onclick="event.stopPropagation(); playSong('${data.data[0].album.cover_medium}', '${data.data[0].title.replaceAll("'", "")}', '${data.data[0].artist.name}', '${data.data[0].preview}')">
                    <i class="bi bi-play-fill"></i> Play
                  </button>
                </div>
              </div>
            </div>
            <div class="col-9 d-md-none col-9 col-md-7"><h2 class="fw-bold mt-4">Ti potrebbe piacere anche</h2></div>
            <div class="col-9 col-md-7 py-0 ps-3 rounded-2">
              <div class="card border-0 p-3">
                <div class="card-body h-100">
                  <ul class="list-unstyled mb-0 d-flex justify-content-between flex-column h-100">
                    
                    <li class="d-flex gap-4 align-content-center">
                      <a href="#" onclick="event.stopPropagation(); albumPage(${data.data[rand1].album.id}); return false;">
                        <img src="${data.data[rand1].album.cover_medium}" alt="album-picture" class="rounded-2 shadow object-fit-cover p-1 p-md-0" style="width: 50px; height: 50px; cursor: pointer;" />
                      </a>
                      <div class="d-flex flex-column justify-content-between flex-grow-1">
                        <a href="#" onclick="event.stopPropagation(); albumPage(${data.data[rand1].album.id}); return false;" class="text-decoration-none">
                          <h5 class="card-title fw-bold m-0 text-start text-white">${data.data[rand1].title.toUpperCase()}</h5>
                        </a>
                        <p class="text-secondary m-0 text-start">${data.data[rand1].artist.name}</p>
                      </div>
                      <button class="border-0 p-0 shadow-none bg-transparent" onclick="event.stopPropagation(); playSong('${data.data[rand1].album.cover_medium}', '${data.data[rand1].title.replaceAll("'", "")}', '${data.data[rand1].artist.name}', '${data.data[rand1].preview}')">
                        <i class="bi bi-play-circle fs-4 text-white"></i>
                      </button>
                    </li>
                  
                    <li class="d-flex gap-4 align-content-center mt-2">
                      <a href="#" onclick="event.stopPropagation(); albumPage(${data.data[rand2].album.id}); return false;">
                        <img src="${data.data[rand2].album.cover_medium}" alt="album-picture" class="rounded-2 shadow object-fit-cover p-1 p-md-0" style="width: 50px; height: 50px; cursor: pointer;" />
                      </a>
                      <div class="d-flex flex-column justify-content-between flex-grow-1">
                        <a href="#" onclick="event.stopPropagation(); albumPage(${data.data[rand2].album.id}); return false;" class="text-decoration-none">
                          <h5 class="card-title fw-bold m-0 text-start text-white">${data.data[rand2].title.toUpperCase()}</h5>
                        </a>
                        <p class="text-secondary m-0 text-start">${data.data[rand2].artist.name}</p>
                      </div>
                      <button class="border-0 p-0 shadow-none bg-transparent" onclick="event.stopPropagation(); playSong('${data.data[rand2].album.cover_medium}', '${data.data[rand2].title.replaceAll("'", "")}', '${data.data[rand2].artist.name}', '${data.data[rand2].preview}')">
                        <i class="bi bi-play-circle fs-4 text-white"></i>
                      </button>
                    </li>
                  
                    <li class="d-flex gap-4 align-content-center mt-2">
                      <a href="#" onclick="event.stopPropagation(); albumPage(${data.data[rand3].album.id}); return false;">
                        <img src="${data.data[rand3].album.cover_medium}" alt="album-picture" class="rounded-2 shadow object-fit-cover p-1 p-md-0" style="width: 50px; height: 50px; cursor: pointer;" />
                      </a>
                      <div class="d-flex flex-column justify-content-between flex-grow-1">
                        <a href="#" onclick="event.stopPropagation(); albumPage(${data.data[rand3].album.id}); return false;" class="text-decoration-none">
                          <h5 class="card-title fw-bold m-0 text-start text-white">${data.data[rand3].title.toUpperCase()}</h5>
                        </a>
                        <p class="text-secondary m-0 text-start">${data.data[rand3].artist.name}</p>
                      </div>
                      <button class="border-0 p-0 shadow-none bg-transparent" onclick="event.stopPropagation(); playSong('${data.data[rand3].album.cover_medium}', '${data.data[rand3].title.replaceAll("'", "")}', '${data.data[rand3].artist.name}', '${data.data[rand3].preview}')">
                        <i class="bi bi-play-circle fs-4 text-white"></i>
                      </button>
                    </li>
                  
                    <li class="d-flex gap-4 align-content-center mt-2">
                      <a href="#" onclick="event.stopPropagation(); albumPage(${data.data[rand4].album.id}); return false;">
                        <img src="${data.data[rand4].album.cover_medium}" alt="album-picture" class="rounded-2 shadow object-fit-cover p-1 p-md-0" style="width: 50px; height: 50px; cursor: pointer;" />
                      </a>
                      <div class="d-flex flex-column justify-content-between flex-grow-1">
                        <a href="#" onclick="event.stopPropagation(); albumPage(${data.data[rand4].album.id}); return false;" class="text-decoration-none">
                          <h5 class="card-title fw-bold m-0 text-start text-white">${data.data[rand4].title.toUpperCase()}</h5>
                        </a>
                        <p class="text-secondary m-0 text-start">${data.data[rand4].artist.name}</p>
                      </div>
                      <button class="border-0 p-0 shadow-none bg-transparent" onclick="event.stopPropagation(); playSong('${data.data[rand4].album.cover_medium}', '${data.data[rand4].title.replaceAll("'", "")}', '${data.data[rand4].artist.name}', '${data.data[rand4].preview}')">
                        <i class="bi bi-play-circle fs-4 text-white"></i>
                      </button>
                    </li>
                  </ul>         
                </div>
              </div>
            </div>
          </div>
        </div>`
              searchDiv.appendChild(divCard)
            }
          }
        }
      })
      .catch((err) => {
        console.log("ARTISTA NON TROVATO e SERVER", err)
      })
  }
}

function handlePopState(event) {
  const state = event.state || { page: "home" }

  switch (state.page) {
    case "search":
      searchPage(false)
      break
    case "album":
      if (state.albumId) {
        albumPage(state.albumId, false)
      } else {
        homePage(false)
      }
      break
    case "artist":
      if (state.artistId) {
        artistPage(state.artistId, false)
      } else {
        homePage(false)
      }
      break
    default:
      homePage(false)
  }
}

document.getElementById("search-mobile").addEventListener("click", (e) => {
  e.preventDefault()
  searchPage()
})

document.getElementById("home-mobile").addEventListener("click", (e) => {
  e.preventDefault()
  homePage()
})

window.addEventListener("popstate", handlePopState)
window.history.replaceState({ page: "home" }, "", "#home")
homePage(false)
document.querySelectorAll(".colore_bt").forEach((el) => {
  el.addEventListener("click", function () {
    this.classList.toggle("text-primary")
  })
  const stopPlaySong = function () {
    if (currentAudio.paused) {
      currentAudio.play()
    } else {
      currentAudio.pause()
    }
  }
})
