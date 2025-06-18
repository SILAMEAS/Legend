<template>
  <div class="min-h-screen bg-gray-900 p-8">
    <div class="max-w-md mx-auto">
      <h1 class="text-2xl font-bold text-white mb-6">Select Cinema Location</h1>

      <CinemaSelector @cinema-changed="handleCinemaChange" />

      <div v-if="selectedCinemaInfo" class="mt-6 p-4 bg-gray-800 rounded-lg">
        <h2 class="text-lg font-semibold text-white mb-2">Selected Cinema:</h2>
        <p class="text-gray-300">{{ selectedCinemaInfo.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedCinemaInfo = ref(null)

const handleCinemaChange = (cinema) => {
  selectedCinemaInfo.value = cinema
  // Here you could fetch showtimes for the selected cinema
  console.log('Parent received cinema change:', cinema)
}
</script>