<script setup>
  import NavBar from './nav.vue'
  import chatbox from './ChatBox.vue'
</script>

<template>
  <div class="homeBody">
    <NavBar/>
    <chatbox/>
  </div>
</template>

<style>
.homeBody{
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(240,242,245);
}
</style>