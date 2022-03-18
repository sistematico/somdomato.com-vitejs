<script setup>
//import HelloWorld from './components/HelloWorld.vue'
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

<vue-plyr>
  <audio controls crossorigin playsinline>
    <source
        src="https://radio.somdomato.com/main"
        type="audio/mp3"
    />
  </audio>
</vue-plyr>

      <!-- <p class="lead">
        Pin a footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. A fixed navbar has been added with
        <code class="small">padding-top: 60px;</code> on the
        <code class="small">main &gt; .container</code>.
      </p>
      <p>
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
