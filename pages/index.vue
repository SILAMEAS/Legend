<script setup lang="ts">
import { useAsyncData } from 'nuxt/app'

// Create 10 slides
const containerRef = ref(null)
const slides = ref(Array.from({ length: 10 }))

const swiper = useSwiper(containerRef)

// Fetch todo item
const { data, pending, error } = await useAsyncData<{ id: number; title: string; completed: boolean }>(
    'todo-1',
    () => $fetch('https://jsonplaceholder.typicode.com/todos/1'),
    {
      immediate: true,
    }
)

onMounted(() => {
  console.log('Swiper instance:', swiper.instance)
  console.log('Todo data:', data.value)
})
</script>

<template>
  <div>
    <!-- Swiper -->
    <ClientOnly>
      <swiper-container ref="containerRef">
        <swiper-slide
            v-for="(slide, idx) in slides"
            :key="idx"
            style="background-color: rgb(32, 233, 70); color: white;"
        >
          Slide {{ idx + 1 }}
        </swiper-slide>
      </swiper-container>
    </ClientOnly>

    <button @click="swiper.prev()">Prev</button>
    <button @click="swiper.next()">Next</button>

    <!-- Content -->
    <p v-if="pending">Loading...</p>
    <p v-else-if="error">Error: {{ error.message }}</p>
    <p v-else-if="data">{{ JSON.stringify(data, null, 2) }}</p>
    <p v-else>No data available</p>
  </div>
</template>

<style lang="css">
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}
</style>