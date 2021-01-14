<template>
  <div>
    <div class="topbox">
      <div><img src="../../static/山.jpg" alt="" srcset="" /></div>
      <ul>
        <!-- <li>导航1</li>
        <li>导航1</li>
        <li>导航1</li>
        <li>导航1</li>
        <li>导航1</li> -->
        <li v-for="(item,index) in data" :key="index">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        data:{
            type:Array,
            required:true
        }
    }
};
</script>

<style scoped lang="scss">
$kuan: 150px;
@mixin hunhe {
  display: flex;
  justify-content: space-sround;
  align-items: center;
}
.topbox {
  width: 100%;
  height: 200px;
  background-color: rgb(185, 185, 253);
  @include hunhe;
  div {
    width: 100%;
    height: 80px;
    img {
      width: $kuan;
    }
    height: 80px;
  }
  ul {
    line-height: 100px;
    @include hunhe;
    list-style: none;
    li {
        width:$kuan;
        &:hover{
            background-color: rgb(250, 90, 90);
        }
    }
  }
}
</style>