<template>
  <div>
    <top :data="people"></top>
    <div class="box">
      <div class="boxone" ref="box">{{ msg }}</div>
      <h1>news:{{ news }}</h1>
      <el-button type="primary" @click="btn()">按钮</el-button>
      <h1>{{bottomval}}</h1>
    </div>
    <bottom @change="getaa($event)"></bottom>
  </div>
</template>

<script>
import top from "../components/top";
import bottom from "../components/bottom";
export default {
  components: {
    top,
    bottom,
  },
  data() {
    return {
      msg: "你要好好努力",
      news: "",
      msgOne: "",
      people: [
        {
          name: "菜单一",
          id: 1,
        },
        {
          name: "菜单一",
          id: 1,
        },
        {
          name: "菜单一",
          id: 1,
        },
        {
          name: "菜单一",
          id: 1,
        },
        {
          name: "菜单一",
          id: 1,
        },
      ],
      bottomval:''
    };
  },
  methods: {
    btn() {
      this.msg = "在那桃花盛开的地方";
      // this.news = this.$refs.box.innerHTML
      this.$nextTick(() => {
        this.news = this.$refs.box.innerHTML;
      });
    },
    getaa(val) {
      console.log(val);
      this.bottomval = val
    }
  },
  mounted() {
    console.log(this.$refs.box);
    this.$refs.box.style.background = "#a1c5f4";

    this.$refs.box.style.color = "#f99";
  },
};
</script>

<style scoped lang="scss">
.box {
  width: 80%;
  height: 500px;
  margin: 10px auto;
  background-color: #f99;
  h1 {
    color: #fff;
  }
}
* {
  margin: 0;
  padding: 0;
}
</style>
