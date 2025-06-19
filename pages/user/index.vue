<script setup lang="ts">
  const data=await $fetch('/api/user');
  const users = data ?? [];

</script>

<template>
  <p>List User</p>
  <p v-if="users.length == 0">No users found.
  </p>
  <p v-else v-for="user in users">
    {{ user.email }} {{ user.name }}
  </p>

</template>