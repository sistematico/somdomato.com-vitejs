<script setup>
import { ref, onMounted } from 'vue'

//const streamData = ref(null)
const musica = ref('')
const ouvintes = ref('')
const audiosrc = ref('https://radio.somdomato.com/main')

const onPausePlyr = _ => {
  audiosrc.value = 'https://radio.somdomato.com/main?nc=' + Math.floor(Date.now() / 1000)
}

const fetchData = _ => {
  fetch('https://radio.somdomato.com/json')
  .then(res=>res.json())
  .then((response) => {
    if (musica.value)
      musica.value.innerText = response.icestats.source.title
    if (ouvintes.value)
      ouvintes.value.innerText = response.icestats.source.listeners
  }).catch((error) => {
    console.log('Looks like there was a problem: \n', error);
  })
}

onMounted(() => {
  audiosrc.value = 'https://radio.somdomato.com/main?nc=' + Math.floor(Date.now() / 1000) 
  fetchData()

  setInterval(function () { 
    fetchData()
  }, 5000)
})
</script>
<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Rádio Som do Mato</a>
        <!-- <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div> -->
      </div>
    </nav>
  </header>

  <main class="flex-shrink-0">
    <div class="container">
      <h1 class="mt-5">Rádio Som do Mato</h1>
       <p class="lead" ref="musica">Carregando...</p>
        <vue-plyr>
          <audio @pause='onPausePlyr' controls crossorigin playsinline>
            <source
                :src="audiosrc"
                type="audio/mp3"
            />
          </audio>
        </vue-plyr>
        <!-- <p>
          Back to
          <a href="/docs/5.1/examples/sticky-footer/">the default sticky footer</a> minus the navbar.
        </p> -->
    </div>
  </main>
  <footer class="footer mt-auto py-3">
    <div class="container">
      <p class="text-muted m-0">&copy; 2012-2022 Rádio Som do Mato</p>
      <p class="text-muted m-0">A mais sertaneja!</p>
      <p class="text-muted m-0 small">Ouvintes: <span ref="ouvintes">0</span></p>
    </div>
  </footer>
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
</template>

<style>
@import "./scss/app.scss";
</style>
