<script setup>
import BaseLayout from './layouts/Base.vue'
import Modal from './components/Modal.vue'
import Carousel from './components/Carousel.vue'
</script>
<template>
  <base-layout>
    <div class="container-fluid text-center">

      <div class="container text-center">
        <div class="row">
          <img src="/assets/img/logo.svg" class="img-fluid my-3" alt="Rádio Som do Mato" />
        </div>
      </div>

      <div class="container-fluid text-center">
        <div class="row">
          <Carousel />
        </div>
      </div>

      <div class="container text-center my-3">
        <div class="row">
          <iframe
            src="https://chat.somdomato.com"
            style="width:100%; height:680px; border:0; display:block; margin: 0 0"
          ></iframe>
        </div>
      </div>
    </div>
  </base-layout>
</template>