<script setup>
defineProps({
  ouvintes: [String, Number]
})
</script>
<template>
  <footer class="footer mt-auto py-3" style="background-color: #2B2522;">
    <div class="container">
      <p class="text-muted m-0">&copy; 2012-2022 <span class="d-none d-sm-inline">Rádio </span>Som do Mato</p>
      <p class="text-muted m-0 fst-italic">Por amor à música sertaneja.</p>
      <p class="text-muted m-0 fs-6 small">Ouvintes: {{ ouvintes }}</p>
    </div>
  </footer>
</template>