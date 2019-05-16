<template>
    <div class="login_container">
      <div class="login_box">
        <div class="logo">
          <img  src="../../assets/images/logo.png" >
        </div>
        <el-form :model="form" ref="form" :rules="rules" class="demo-ruleForm">
          <el-form-item   prop="username" >
            <el-input prefix-icon="iconfont icon-user-fill" v-model="form.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item  prop="password">
            <el-input type="password" prefix-icon="iconfont icon-eye-slash" v-model="form.password" autocomplete="off"></el-input>
          </el-form-item>
           <el-form-item>
            <el-button type="primary" @click="submit()">提交</el-button>
            <el-button @click="resetForm()">重置</el-button>
           </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submit () {
      this.$refs.form.validate(async status => {
        if (status) {
          const {data: {data, meta}} = await this.$http.post('login', this.form)
          if (meta.status !== 200) return this.$message.error('登录失败')
          sessionStorage.setItem('token', data.token)
          this.$message.success('登录成功')
          this.$router.push('/home')
        }
      })
    },
    resetForm () {
      this.form.username = ''
      this.form.password = ''
    }
  }
}
</script>
<style >
 .login_container {
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgb(250, 65, 96),pink,skyblue);
  }
  .login_box {
    width: 400px;
    height: 250px;
    box-shadow: 0 0 10px  rgb(251, 186, 197);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -60%);
    border-radius: 4px;
    background: linear-gradient(125deg, rgb(251, 122, 144),pink,skyblue);
    padding: 0 15px;
    box-sizing: border-box;
  }
  .logo{
    padding:10px 0;
    text-align: center;
  };
</style>
