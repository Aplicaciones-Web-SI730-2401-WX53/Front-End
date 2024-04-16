<template>
  <div>
    <label>Update user</label>
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
    <pv-button @click="update()">save</pv-button>
  </div>
</template>

<script>
import { UserApiServices } from '@/services/user-api.services.js'
import router from '@/router.js'

export default {
  name: 'update-user',
  data() {
    return {
      id: 0,
      name: '',
      username: '',
      email: '',

      userApiServices: new UserApiServices()
    }
  },
  methods: {
    update() {
      const body = {
        name: this.name,
        username: this.username,
        email: this.email
      }
      this.userApiServices.update(body, this.id).then((response) => {
        if (response.status === 200) {
          alert('User updated')
          router.push('users')
        } else {
          alert('Erro updating  user')
        }
      })
    }
  },
  mounted() {
    this.id = this.$route.params.id

    this.userApiServices.getByid(this.id).then((response) => {
      this.username = response.data.username
      this.name = response.data.name
      this.email = response.data.email
    })
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
