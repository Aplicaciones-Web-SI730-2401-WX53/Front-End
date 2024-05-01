<script setup></script>

<template>
  <nav>
    <RouterLink to="/">Login</RouterLink>
    <RouterLink to="/create-user">Create user v2</RouterLink>
    <RouterLink to="/users">List of users</RouterLink>
  </nav>
  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped></style>
