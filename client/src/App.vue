<template>
  <div id="App">
    <ServerStatus />
    <ServerData />
  </div>
</template>

<script>
import ServerStatus from './components/ServerStatus.vue';
import ServerData from './components/ServerData.vue';

export default {
  name: 'App',
  components: {
    ServerStatus,
    ServerData
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>