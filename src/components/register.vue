<template>
  <div>
    <el-form
      :model="register" ref="register"
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
      <el-form-item label="昵称">
        <el-input v-model="register.nick" placeholder="请输入昵称">
        </el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="register.age" placeholder="请输入年龄">
        </el-input>
      </el-form-item>
      <el-form-item label="tx">
        <el-input v-model="register.head_img" placeholder="请输入年龄">
        </el-input>
      </el-form-item>
    </el-form>
    <el-row>
      <el-button type="success" @click="reg()">立即注册</el-button>
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
        nick:"",
        age:"",
        head_img:""
      },
    };
  },
  methods: {
    reg() {
      this.$http
        .post("/dang/page/register", this.register)
        .then(res => {
          console.log(res);
          if(res.data.code===0){
            this.$message.success('注册成功')
            this.$router.push('/login')
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>