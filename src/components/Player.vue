<script setup>
import { ref, onMounted } from 'vue'
import PlyrControls from '../js/plyr-controls'

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

onMounted(() => {
  document.getElementById("stream-restart").addEventListener("click", function() {
    onPausePlyr()
  })

  resetSrc()
})
</script>
<template>
    <div class="plyr__container">
      <vue-plyr ref="plyr" :options="{ controls: PlyrControls }">
        <audio @pause="resetSrc" controls crossorigin playsinline preload="none">
          <source src="https://radio.somdomato.com/main" type="audio/mp3" />
        </audio>
      </vue-plyr>
    </div>
</template>