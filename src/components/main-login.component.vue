<template>
  <div class="container">
    <div class="row">
      <label>email</label>
      <pv-input-text id="email" v-model="email"></pv-input-text>
    </div>
    <br />
    <div class="row">
      <label>password</label>
      <pv-input-text id="username" v-model="password"></pv-input-text>
    </div>
    <pv-button @click="login()">login</pv-button>
      <pv-button @click="logout()">logout</pv-button>
  </div>
</template>

<script>
import {AuthApiServices} from "@/services/auth-api.services.js";

export default {
  name: 'main-login',
  data() {
    return {
      email: '',
      password: '',
        apiAuthSer : new AuthApiServices()
    }
  },
  methods: {
      login(){
          //localStorage.setItem('email',this.email)
          //localStorage.setItem('password',this.password)

          let body ={
              email: this.email,
              password: this.password
          }

            this.apiAuthSer.login(body).then(response =>{
                localStorage.setItem('jwt',response.data)
            })
      },
      logout(){
          //localStorage.clear()
          localStorage.removeItem('password')
          this.password ='';
      }
  },
    mounted() {
        this.email =  localStorage.getItem('email')
        this.password=  localStorage.getItem('password')
    }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.row {
  display: grid;
  grid-template-columns: 30% 70%;
}
</style>
