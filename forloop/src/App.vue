<template>
  <div id="app">
    <databinding/>
  </div>
</template>

<script>
import Databinding from './components/databinding.vue'


export default {
  name: 'App',
  components: {
 
    Databinding, 
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
  margin-top: 60px;
}
</style>
