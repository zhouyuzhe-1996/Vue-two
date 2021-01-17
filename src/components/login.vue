<template>
  <div>
    <el-form
      :model="loginform"
      style="width: 30%; margin: 0 auto"
      label-width="100px"
    >
      <el-form-item label="用户名">
        <el-input v-model="loginform.username" placeholder="请输入用户名">
        </el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="loginform.password" placeholder="请输入密码">
        </el-input>
      </el-form-item>
    </el-form>
    <el-row>
      <el-button type="success" @click="login">成功按钮</el-button>
    </el-row>
  </div>
</template>

<script>
import Cookie from 'js-colie'
export default {
  // 反向代理

  data() {
    return {
      loginform: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      this.$http.post("/api/login", this.loginform).then((res) => {
        console.log(res);
        if (res.data.code === 0) {
          Cookie.set('token'.res.data.token);
          Cookie.set('username',this.loginfrom.username);
          this.$store.commit('setToken',res,data.token);
          this.$store.commit('changesSignIn',1);
          this.$message.success('登陆成功');

        }

        // alert({data.msg})
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>