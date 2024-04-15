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
    <pv-button>login</pv-button>
  </div>
</template>

<script>
export default {
  name: 'main-login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {}
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
