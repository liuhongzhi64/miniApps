<template>
  <div class="login">
    <div class="loginInput">
      <el-input placeholder="请输入账号" class="userAccountNumber" v-model="userAccountNumber" clearable></el-input>
      <el-input placeholder="请输入密码" class="password" v-model="password" clearable show-password></el-input>
      <div class="btn">
        <el-checkbox v-model="checked">三天内自动登录</el-checkbox>
        <el-popover placement="bottom" title="注意" width="200" trigger="click" content="请填写正确的账号和密码">
          <el-button class="loginBtn" :plain="true" @click="goToIndex" slot="reference">登录</el-button>
        </el-popover>
        <div class="register-hint">
          <div class="register el-icon-warning" @click="giToRegister "><span style="margin-left:5px">注册</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userAccountNumber: "", //用户账号
      password: "", //密码
      checked: false //是否三天内自动登录
    };
  },
  methods: {
    goToIndex() {
      if (this.userAccountNumber != "" && this.password != "") {
        this.$router.history.push("/index");
        this.$message({
          message: "登录成功",
          type: "success"
        });
      }
    },
    giToRegister() {
      this.$router.history.push("/register");
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
    background: url("../../assets/imgs/login1.jpg") no-repeat;
    background-size: 100%;
//   background-color: #ccc;
  .loginInput {
    width: 20%;
    height: 15%;
    border: 1px solid #eee;
    position: fixed;
    top: 35%;
    right: 8%;
    padding: 2% 20px 7%;
    display: flex;
    flex-direction: column;
    .userAccountNumber,
    .password {
      width: 70%;
      margin: 10px auto;
    }
    .btn {
      width: 70%;
      margin: 10px auto;
      .loginBtn {
        margin-top: 5%;
        margin-bottom: 5%;
        width: 100%;
      }
      .register {
        color: #fff;
        text-align: right;
        cursor: pointer;
        position:absolute;
        right: 20%;
      }
    }
  }
}
</style>