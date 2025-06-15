<script setup lang="ts">
import { useAsyncData } from 'nuxt/app'

// Testing calling api
const {data:dataHello} = useFetch<Record<string, any>>("/api/hello");

console.log("hello",dataHello)

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
  <div>
    <!--   Swiper    -->
    <UiMembershipSwiper/>
    <!-- Content -->
    <p v-if="pending">Loading...</p>
    <p v-else-if="error">Error: {{ error.message }}</p>
    <p v-else-if="data">{{ JSON.stringify(data, null, 2) }}</p>
    <p v-else>No data available</p>
    <p> user calling api : {{JSON.stringify(dataHello?.user)}}</p>
  </div>
</template>

