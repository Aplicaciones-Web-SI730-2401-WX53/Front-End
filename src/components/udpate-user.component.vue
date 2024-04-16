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
    <pv-button>save</pv-button>
  </div>
</template>

<script>
export default {
  name: 'update-user',
  data() {
    return {
      name: '',
      username: '',
      email: ''
    }
  },
  methods: {}
}
</script>

<style scoped>
.row {
  display: grid;
  grid-template-columns: 30% 70%;
  margin: 10% 0;
}
</style>
