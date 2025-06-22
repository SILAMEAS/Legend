<script setup lang="ts">
import { ref } from "vue"

const { mutate: getUsers, loading } = useApiMutation<Array<any>>()
const data = await getUsers('/api/user', 'GET')

// Selected user state
const selectedUser = ref<UserType | null>(null)

definePageMeta({
  layout: "default-admin"
})
</script>

<template>
  <div class="grid grid-cols-10 gap-4 p-5">
    <!-- User List -->
    <div class="col-span-7">
      <div class="space-y-4">
        <h2 class="text-lg font-semibold">Users</h2>

        <div v-if="loading" class="space-y-2">
          <Skeleton v-for="i in 5" :key="i" class="h-6 w-full rounded" />
        </div>

        <table v-else class="w-full text-sm divide-y divide-border">
          <thead class="bg-muted text-left">
          <tr>
            <th class="py-2 px-4">#</th>
            <th class="py-2 px-4">Name</th>
            <th class="py-2 px-4">Email</th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="(user, index) in data"
              :key="user.email"
              @click="selectedUser = user"
              class="cursor-pointer hover:bg-muted transition"
              :class="selectedUser?.email === user.email ? 'bg-muted' : ''"
          >
            <td class="py-2 px-4 font-medium">{{ index + 1 }}</td>
            <td class="py-2 px-4">{{ user.name }}</td>
            <td class="py-2 px-4">{{ user.email }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- User Details Panel -->
    <div class="col-span-3 bg-gray-600 text-white p-6 rounded-xl space-y-2">
      <h2 class="text-xl font-semibold mb-4">User Details</h2>

      <template v-if="selectedUser">
        <p><span class="font-semibold">Name:</span> {{ selectedUser.name }}</p>
        <p><span class="font-semibold">Email:</span> {{ selectedUser.email }}</p>
        <!-- Add more fields as needed -->
      </template>

      <template v-else>
        <p class="text-white/70">Click on a user to view details</p>
      </template>
    </div>
  </div>
</template>
