<template>
  <div>
    <div class="count">
      <el-button type="primary" @click="add()">加</el-button>
      <h1>{{ num }}</h1>
      <h1>{{ num2 }}</h1>
      <el-button type="primary" @click="adds()">减</el-button>
    </div>
  </div>
</template>

<script>
export default {
  // data(){
  //     return {
  //      num:this.$store.state.num
  //     }
  // },
  computed: {
    // ...mapState({
    num() {
      return this.$store.state.num;
    },
    num2() {
        return this.$store.getters.count;
    },
    // }),
  },
  methods: {
    add() {
      // this.num++
      //   this.$store.commit("increment",{n:num,name:"Tom",age:19});
      this.$store.dispatch("increment");
    },
    adds() {
      // this.num--
    //   this.$store.commit("mincrement", {
    //     n: num,
    //     name: "Jary",
    //     age: 19,
    //     hobby: "paly",
    //   });
    this.$store.dispatch("mincrement");
    },
  },
};
</script>

<style>
.count {
  display: flex;
  justify-content: space-around;
}
</style>