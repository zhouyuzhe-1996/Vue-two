<template>
  <div>
      <!-- 子向父传值是（事件传值） -->
    <div class="bottombox">
      <el-button type="success" @click="btn()">向父组件传值按钮</el-button>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            aa:'你会成功的'
        }
    },
    methods:{
        btn(){
            this.$emit("change",this.aa)
        }
    }
};
</script>

<style scoped>
.bottombox {
  width: 100%;
  height: 100px;
  background-color: rgb(188, 188, 245);
}
</style>