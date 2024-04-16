<template>
  <div>
    <pv-button>Crear usuario</pv-button>

    <ul v-for="user in users">
      <li>{{ user.id + ' - ' + user.name }}</li>
      <router-link :to="{ name: 'updateUser', params: { id: user.id } }">Edit</router-link>

      <pv-button @click="deleteUser(user.id)">Delete</pv-button>
    </ul>
  </div>
</template>

<script>
import router from '@/router.js'
import { UserApiServices } from '@/services/user-api.services.js'

export default {
  name: 'list-user',
  data() {
    return {
      users: [],
      userService: new UserApiServices()
    }
  },
  methods: {
    deleteUser(id) {
      this.userApiServices.delete(id).then((response) => {
        if (response.status == 200) {
          alert('User saved')
          router.push('users')
        } else {
          alert('Erro savgin  user')
        }
      })
    }
  },
  async created() {
    const response = await this.userService.getAll() // Promesa
    this.users = response.data
    /*this.userService.getAll().then((response) => {
      this.users = response.data
    })*/
  }
}
</script>

<style scoped></style>
