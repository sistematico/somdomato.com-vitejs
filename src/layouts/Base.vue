<script setup>
import { ref, onMounted } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Player from '../components/Player.vue'

const ouvintes = ref('')
ouvintes.value = 'Carregando...'

function fetchData() {
  fetch('https://radio.somdomato.com/json')
    .then(res=>res.json())
    .then((response) => {
      document.getElementById("stream-title").innerHTML = response.icestats.source.title
      ouvintes.value = response.icestats.source.listeners
    }).catch((error) => {
      console.log('Looks like there was a problem: \n', error)
    })
}

onMounted(() => {
  document.getElementById("stream-title").innerHTML = 'Rádio Som do Mato'

  fetchData()

  setInterval(function () { 
    fetchData()
  }, 5000)
})
</script>
<template>
  <Header>
    <template #title>
      <ul class="navbar-nav mb-2 mb-md-0">
        <li class="nav-item">
          <a class="nav-link disabled text-truncate" id="stream-title">Carregando...</a>
        </li>
      </ul>
    </template>
    <template #player>
      <Player />
    </template>
  </Header>
  <main class="flex-shrink-0 d-flex align-items-center mx-0">
    <slot />
  </main>
  <Footer :ouvintes="ouvintes" />
</template>
<style>
@import "../scss/app.scss";

#stream-title {
  max-width: 75px;
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  #stream-title {
    max-width: 100px;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  #stream-title {
    max-width: 200px;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  #stream-title {
    max-width: 275px;
  }
}

/* X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  #stream-title {
    max-width: 375px;
  }
}

/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
  #stream-title {
    max-width: 400px;
  }
}
</style>