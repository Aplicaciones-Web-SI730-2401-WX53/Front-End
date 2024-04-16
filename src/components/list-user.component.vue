<template>
  <div>
    <pv-button>Crear usuario</pv-button>

    <ul v-for="user in users">
      <li>{{ user.id + ' - ' + user.name }}</li>
      <router-link :to="{ name: 'updateUser', params: { id: user.id } }">Edit</router-link>
      <pv-button @click="delete(user.id)">Eliminar</pv-button>
    </ul>
  </div>
</template>

<script>
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
    delete(id) {
      this.userService.delete(id).then((response) => {
        if (response.status == 200) {
          alert('user' + id + ' deleted')
        }
      })
    }
  },

  async created() {
    //this.users = await axios.get("http://localhost:3000/users") // Promesa

    this.userService.getAll().then((response) => {
      this.users = response.data
    })
  }
}
</script>

<style scoped></style>
