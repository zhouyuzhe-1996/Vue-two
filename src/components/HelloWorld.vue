<template>
  <div class="hello">
    <h1>123456</h1>
    <h1>{{ msg }}</h1>
    <button @click="yukuan">小可爱</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  methods:{
    yukuan:function(){
      this.$router.push({path:"/work",query:{
        id:"13"
      }})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
