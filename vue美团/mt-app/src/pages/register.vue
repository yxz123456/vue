<template>
  <div class="page-register">
    <div class="header">
      <header>
        <a href="#" class="site-logo"></a>
        <div class="login">
          <span>已有美团账号？</span>
          <router-link :to="{name:'login'}">登录</router-link>
        </div>
      </header>
    </div>
    <div class="form">
      <el-form
        :model="formData"
        status-icon
        :rules="rules"
        ref="formData"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input type="text" v-model="formData.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" >
          <el-input type="password" v-model="formData.password" autocomplete="off" @input="checkPasswordRank"></el-input>
        </el-form-item>
        <div class="pw-strength">
          <div :class="['bar',strengthClass]"></div>
          <div class="letter">
            <span>弱</span>
            <span>中</span>
            <span>强</span>
          </div>
        </div>
        <el-form-item label="确认密码" prop="rePassword">
          <el-input type="password" v-model="formData.rePassword" autocomplete="off"></el-input>
        </el-form-item>
        
        <el-form-item>
          <el-button type="primary" @click="submitForm('formData')">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
      let checkUserName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        if (value.length < 4 || value.length > 16 ) {
          callback(new Error("用户名必须在4到16位之间的字母数字下划线组成"));
        }
        callback();
      }
    };
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.formData.rePassword !== "") {
          this.$refs.formData.validateField("rePassword");
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.formData.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      formData: {
        userName: "",
        password: "",
        rePassword: "",
      },
      strengthClass:'',
      rules: {
          userName: [
            { validator: checkUserName, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          rePassword: [
            { validator: validatePass2, trigger: 'blur' }
          ],
         
        }
    };
  },
  methods:{
      submitForm(formData){
          this.$refs[formData].validate((valid) => {
          if (valid) {
            api.register({
             params:this.formData
            }).then(res => {
              if(res.data.status == 'success'){
                this.$router.push({name:'login'})
              }
              else{
                alert(res.data.msg)
              }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      checkPasswordRank () {
          let regStr = /(\w)+/g;
          let regNum = /(\d)+/g;
          let reg = /_/g;
          //包含字母数字下划线
          let strongth = this.formData.password.match(regStr) && this.formData.password.match(regNum) && this.formData.password.match(reg)
          if(this.formData.password.length > 8 && strongth){
              this.strengthClass = 'strong'
          }
          else if(this.formData.password.length < 8 && strongth){
              this.strengthClass = 'normal'
          }
          else if(!this.formData.password.length){
              this.strengthClass = ''
          }
          else{
              this.strengthClass = 'week'
          }
      }
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/register/index.scss";
</style>
