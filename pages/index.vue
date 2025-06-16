<script setup lang="ts">
import { useAsyncData } from 'nuxt/app';
// Fetch Todo item
const { data, pending, error } = await useAsyncData<{ id: number; title: string; completed: boolean }>(
    'todo-1',
    () => $fetch('https://jsonplaceholder.typicode.com/todos/1'),
    {
      immediate: true,
    }
)

onMounted(() => {
  console.log('Todo data:', data.value)
})
</script>

<template>
  <div class="flex flex-col">
    <!--   Swiper    -->
    <div class="relative h-[700px]">
      <MsMembershipSwiper/>
    </div>
    <!-- Content -->
    <p v-if="pending">Loading...</p>
    <p v-else-if="error">Error: {{ error.message }}</p>
    <p v-else-if="data">{{ JSON.stringify(data, null, 2) }}</p>
    <p v-else>No data available</p>

    <MsSwitchIcon/>
  </div>
</template>

