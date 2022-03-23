<script setup>
import { ref, computed } from 'vue'
import BaseLayout from './layouts/Base.vue'
import Carousel from './components/Carousel.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import NotFound from './pages/NotFound.vue'

const routes = {
  '/': Home,
  '/about': About
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>
<template>
  <base-layout>
    <div class="container-fluid text-center">
      <div class="container-fluid text-center">
        <div class="row">
          <Carousel />
        </div>
      </div>
      <div class="container text-center my-3">
        <div class="row">
          <component :is="currentView" />
        </div>
      </div>
    </div>
  </base-layout>
</template>