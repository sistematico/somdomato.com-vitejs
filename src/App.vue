<script setup>
import { ref, onMounted } from 'vue'
import PlyrControls from './js/plyr-controls'

const ouvintes = ref('0')
const plyr = ref(null)

function resetSrc() {
  document.querySelector("source").src = 'https://radio.somdomato.com/main?nc=' + Math.floor(Date.now() / 1000)
  document.querySelector("audio").load(); //call this to just preload the audio without playing
}

function onPausePlyr() {
  resetSrc()

  let playPromise = document.querySelector("audio").play()
  if (playPromise !== undefined) {
    playPromise
      .then(_ => {
        document.querySelector("audio").play()
      })
      .catch(error => { })
  }
}

function fetchData() {
  fetch('https://radio.somdomato.com/json')
  .then(res=>res.json())
  .then((response) => {
    document.getElementById("stream-title").innerHTML = response.icestats.source.title

    if (ouvintes.value) {
      ouvintes.value.innerText = response.icestats.source.listeners
    }
  }).catch((error) => {
    console.log('Looks like there was a problem: \n', error);
  })
}

onMounted(() => {
  document.getElementById("stream-title").innerHTML = 'Rádio Som do Mato'

  document.getElementById("stream-restart").addEventListener("click", function() {
    onPausePlyr()
  });

  resetSrc()
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
        <a class="navbar-brand" href="#">
          <img class="m-0 p-0" src="/assets/img/logotipo.svg" alt="Rádio Som do Mato" width="28" height="24">
          Rádio Som do Mato
        </a>
        <button
          class="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >

          <span class="navbar-toggler-icon"></span>
		      <!-- <input type="checkbox" name="main-nav" id="main-nav" class="burger-check"> -->
		      <!-- <label for="main-nav" class="burger menu"><span></span></label> -->

        </button>
        <div class="collapse navbar-collapse show" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <!-- <li class="nav-item">
              <a class="nav-link disabled">A mais sertaneja!</a>
            </li> -->
          </ul>    
          
          <ul class="navbar-nav mb-2 mb-md-0">
            <li class="nav-item">
              <a class="nav-link disabled" id="stream-title">Carregando...</a>
            </li>
          </ul>   

          <div class="plyr__container">
            <vue-plyr ref="plyr" :options="{ controls: PlyrControls }">
              <audio @pause="resetSrc" controls crossorigin playsinline>
                <source src="https://radio.somdomato.com/main" type="audio/mp3" />
              </audio>
            </vue-plyr>
          </div>

        </div>
      </div>
    </nav>
  </header>
  <main class="h-100 d-flex align-items-center">
    <div class="container text-center">
      <img src="/assets/img/logo.png" class="img-fluid" alt="...">
    </div>
  </main>
  <footer class="footer mt-auto py-3">
    <div class="container">
      <p class="text-muted m-0">&copy; 2012-2022 Rádio Som do Mato</p>
      <p class="text-muted m-0">Por amor à música sertaneja</p>
      <p class="text-muted m-0 small">Ouvintes: <span ref="ouvintes">0</span></p>
    </div>
  </footer>
</template>
<style>
@import "./scss/app.scss";
</style>
