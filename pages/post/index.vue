<script setup lang="ts">
import { useRoute, useAsyncData } from 'nuxt/app'

const route = useRoute()

// Fetch posts with useAsyncData
const { data: posts, pending, error, refresh } = await useAsyncData<Array<{ id: number; title: string }>>(
    `posts-${route.fullPath}`, // Unique key to avoid cache collisions
    () => $fetch('https://jsonplaceholder.typicode.com/posts'),
    {
      immediate: true, // Fetch immediately on mount
      watch: [route], // Re-fetch when route changes
      dedupe: 'cancel', // Cancel duplicate requests during navigation
    }
)

// Debug: Log data updates
watch(posts, (newPosts) => {
  console.log('Posts updated:', newPosts)
})
</script>

<template>
  <p v-if="pending">Loading...</p>
  <p v-else-if="error">Error: {{ error.message }}</p>
  <pre v-else-if="posts" v-for="i in posts">{{ i.id }}</pre>
  <p v-else>No data available</p>
</template>