<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-link to="/">helloword组件</router-link>
    <router-link to="/work">work组件</router-link> -->
    <!-- <router-link to="/page">page组件</router-link> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
*{
  margin:0;
  padding:0;
}

</style>
