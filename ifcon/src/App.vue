<template>
  <div id="app">
    <ifcondition/>
 </div>
</template>

<script>
import ifcondition from './components/ifcondition.vue'
export default {
  name: 'App',
  components: {
    ifcondition,
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
