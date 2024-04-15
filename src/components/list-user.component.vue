<template>
  <pv-button>Crear usuario</pv-button>

  <ul v-for="user in users">
    <li>{{ user.id + ' - ' + user.name }}</li>
    <router-link :to="{ name: 'updateUser', params: { id: user.id } }">Edit</router-link>
  </ul>
</template>

<script>
export default {
  name: 'list-user',
  data() {
    return {
      start: 0,
      end: 10,
      users: []
    }
  }
}
</script>

<style scoped></style>
