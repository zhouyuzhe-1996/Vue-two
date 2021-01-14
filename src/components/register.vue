<template>
  <div>
    <el-form
      :model="register"
      style="width: 30%; margin: 0 auto"
      label-width="100px"
    >
      <el-form-item label="用户名">
        <el-input v-model="register.username" placeholder="请输入用户名">
        </el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="register.password" placeholder="请输入密码">
        </el-input>
      </el-form-item>
    </el-form>
    <el-row>
      <el-button type="success" @click="reg">成功按钮</el-button>
    </el-row>
    
  </div>
</template>

<script>
export default {
    // 反向代理

  data() {
    return {
      register: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    reg() {
      this.$http
        .post("/api/register", this.register)
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>