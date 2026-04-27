<script setup lang="ts">
import Footer from './layouts/footer.vue';
import Header from './layouts/header.vue';

</script>

<template>
  <UApp>
    <Header></Header>
    <UMain>
      <NuxtPage />
    </UMain>
    <Footer></Footer>
  </UApp>
</template>
