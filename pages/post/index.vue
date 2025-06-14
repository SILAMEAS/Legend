<script setup lang="ts">
import {usePostStore} from "@/stores/service/post";

const postStore = usePostStore()

onMounted(() => postStore.fetchPosts())
</script>

<template>
  <div>
    <h1>Posts</h1>
    <button @click="postStore.fetchPosts" :disabled="postStore.loading">
      {{ postStore.loading ? 'Loading...' : 'Fetch Posts' }}
    </button>

    <p v-if="postStore.error" class="text-red-600">{{ postStore.error }}</p>

    <ul>
      <li v-for="post in postStore.posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>
