<template>
  <div
    id="carousellidesOnly"
    class="carousel slide carousel-fade mb-3 mx-0 px-0"
    data-bs-ride="carousel"
    data-bs-interval="10000"
  >
    <div class="carousel-inner">
      <div class="overlay">
        <img src="/assets/img/logotipo.png" alt="Rádio Som do Mato" />
      </div>
      <div class="carousel-item active">
        <img src="/assets/img/banner/henrique-e-juliano.jpg" class="d-block w-100" alt="Henrique & Juliano" style="object-position: 50% 40%;" />
      </div>
      <div class="carousel-item">
        <img src="/assets/img/banner/jorge-e-mateus.jpg" class="d-block w-100" alt="Jorge & Mateus" style="object-position: 50% 20%;" />
      </div>
      <div class="carousel-item">
        <img src="/assets/img/banner/ze-neto-e-cristiano.jpg" class="d-block w-100" alt="Zé Neto & Cristiano" style="object-position: 50% 10%;" />
      </div>
    </div>
  </div>
</template>
<style>
.overlay {
    /* background: url('/assets/img/logotipo.png') top left no-repeat; */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    pointer-events: none;
    text-align: right;
}

.overlay img {
    width: 100px;
    height: 100px;
    margin: 10px;
}

.carousel-item > img {
  position: relative;
  height: 22rem;
  object-fit: cover;
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .carousel-item > img {
    height: 22rem;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .carousel-item > img {
    height: 28rem;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .carousel-item > img {
    height: 32rem;
  }
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .carousel-item > img {
    height: 34rem;
  }
}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
  .carousel-item > img {
    height: 36rem;
  }
}
</style>