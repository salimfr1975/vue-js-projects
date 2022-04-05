<template>
  <div id="app">
    <Home message="fddfs" data="AFCI" msg="Paris - France"/>
  <h1>Data Binding in Vue js msg1="vcv"</h1>
  <DataBind />
  </div>
</template>

<script>
import Home from './components/Home.vue'
import DataBind from './components/dataBind.vue'
export default {
  name: 'App',
  components: {
    Home,
    DataBind,
    
    
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


