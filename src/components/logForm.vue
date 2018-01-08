<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" v-model="usernameModel" placeholder="请输入用户名">
        </div>
        <span v-if="usernameErrors.status" class="g-form-error">{{usernameErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" v-model="passwordModel" placeholder="请输入密码">
        </div>
        <span v-if="passwordErrors.status" class="g-form-error">{{passwordErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn" @click="onLogin">
          <a class="button">登录</a>
        </div>
      </div>
      <p class="g-form-error">{{errorText}}</p>
    </div>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          usernameModel:'',
          passwordModel:'',
          usernameFirst:true,
          passwordFirst:true,
          errorText:''
        }
      },
      computed:{
        usernameErrors(){
          let errorText, status;

          if(/@/g.test(this.usernameModel)){
            status = false;
            errorText='';
          }else{
            status = true;
            errorText = '不包含@';
          }

          if(this.usernameFirst){
            this.usernameFirst=false;
            errorText='';
          }

          return {
            errorText,status
          }
        },
        passwordErrors(){
          let errorText, status;
          if(/^\w{1,6}$/g.test(this.passwordModel)){

            status = false;
            errorText='';
          }else{
            status = true;
            errorText = '密码不是1-6位';
          }

          if(this.passwordFirst){
            this.passwordFirst=false;
            errorText='';
          }

          return {
            errorText,status
          }
        }
      },
      methods:{
        onLogin(){
          if(this.usernameErrors.status||this.passwordErrors.status){
            this.errorText = '部分选项未通过';
            return ;
          }else{
            this.errorText='';
            this.$emit('has-log',this.usernameModel);
            this.$emit('')
//            this.$http.post('api/login')
//              .then((data)=>{
//                this.$emit('has-log',data)
//              },(error)=>{
//                console.log(error);
//              })
          }

        }
      }
    }
</script>

<style>

</style>
