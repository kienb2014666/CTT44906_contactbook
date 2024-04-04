<script>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import AppHeader from './components/AppHeader.vue'
export default {
  components: {
    AppHeader,
  },
};
</script>
<template>
  <div id="app">
    <AppHeader />
    <div class="container mt-3 d-flex justify-content-center bg-light p-5 rounded shadow-sm">
      <router-view/>
    </div>
  </div>
</template>
<style>
.page {
    max-width: 400px;
    margin: auto;
    }
    
</style>
