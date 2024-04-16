<template>
  <div>
    <label>Create user</label>
    <div class="row">
      <label>name</label>
      <pv-input-text id="name" v-model="name"></pv-input-text>
    </div>
    <div class="row">
      <label>username</label>
      <pv-input-text id="username" v-model="username"></pv-input-text>
    </div>
    <div class="row">
      <label>email</label>
      <pv-input-text id="email" v-model="email"></pv-input-text>
    </div>
    <pv-button @click="create()">save</pv-button>
  </div>
</template>

<script>
import { UserApiServices } from '@/services/user-api.services.js'
import router from '@/router.js'

export default {
  name: 'create-user',
  data() {
    return {
      name: '',
      username: '',
      email: '',
      userApiServices: new UserApiServices()
    }
  },
  methods: {
    create() {
      const body = {
        name: this.name,
        username: this.username,
        email: this.email
      }
      this.userApiServices.create(body).then((response) => {
        if (response.status == 201) {
          alert('User saved')
          router.push('users')
        } else {
          alert('Erro savgin  user')
        }
      })
    }
  }
}
</script>

<style scoped>
.row {
  display: grid;
  grid-template-columns: 30% 70%;
  margin: 10% 0;
}
</style>
