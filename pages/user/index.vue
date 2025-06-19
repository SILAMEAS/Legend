<script setup lang="ts">
import type {UserType} from "~/types/UserType";
const { mutate: getUser } = useApiMutation<Array<UserType>>()
const data = await getUser('/api/user', 'GET')
</script>

<template>
  <p>List User</p>
  <p v-if="data.length == 0">No users found.
  </p>
  <p v-else v-for="user in data">
    {{ user.email }} {{ user.name }}
  </p>

</template>