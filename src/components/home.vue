<template>
  <div>
      <h1>我是home组件</h1>
      <h2>{{canshu}}</h2>
      <h2>{{$route.params.id}}</h2>
  </div>
</template>

<script>
export default {
    data(){
        return{
            canshu:''
        }
    },
    mounted(){
        console.log(this.$route)
        this.canshu = this.$route.params.id
    }

}
</script>

<style>

</style>