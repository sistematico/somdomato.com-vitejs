<template>
  <div
    id="carouselExampleSlidesOnly"
    class="carousel slide carousel-fade mb-3 mx-0 px-0"
    data-bs-ride="carousel"
    data-bs-interval="10000"
  >
    <div class="carousel-inner">
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