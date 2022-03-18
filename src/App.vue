<script setup>
import { ref, onMounted } from 'vue'
//import HelloWorld from './components/HelloWorld.vue'

const musica = ref('')
const audiosrc = ref('https://radio.somdomato.com/main')


onMounted(() => {
  let ts = Math.floor(Date.now() / 1000)
  audiosrc.value = 'https://radio.somdomato.com/main?nc=' + ts 

  //console.log(`The initial count is ${count.value}.`)
      // mode:"cors",

    fetch('https://radio.somdomato.com/json')
      .then(res=>res.json())
      .then((response) => {
        console.log(response)
        musica = response.icestats.source.title
      }).catch((error) => {
        console.log('Looks like there was a problem: \n', error);
      }); 

  // setInterval(function () {
  // }, 5000);
})

//getData();
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

       <p class="lead">{{ musica }}</p>

<vue-plyr>
  <audio controls crossorigin playsinline>
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

  <footer class="footer mt-auto py-3 bg-light">
    <div class="container">
      <span class="text-muted">&copy; 2012-2022 Rádio Som do Mato - A mais sertaneja!</span>
    </div>
  </footer>

  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
</template>

<style>
@import "./scss/app.scss";
@import '../public/css/player.css';
</style>
