<template>
  <div class="min-h-screen bg-gray-900 p-6">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
            v-for="movie in movies"
            :key="movie.id"
            class="group relative bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          <!-- Movie Poster -->
          <div class="relative aspect-[3/4] overflow-hidden">
            <img
                :src="movie.poster+'?height=600&width=400'"
                :alt="movie.title"
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />

            <!-- Advance Ticket Banner -->
            <div
                v-if="movie.hasAdvanceTicket"
                class="absolute top-0 left-0 bg-red-600 text-white px-3 py-1 text-xs font-semibold transform -rotate-45 -translate-x-3 translate-y-6 shadow-lg"
                style="width: 120px; text-align: center;"
            >
              Advance Ticket
            </div>

            <!-- Age Rating Badge -->
            <div class="absolute bottom-3 right-3">
              <span
                  :class="getRatingClass(movie.rating)"
                  class="px-2 py-1 text-xs font-bold rounded"
              >
                {{ movie.rating }}
              </span>
            </div>
          </div>

          <!-- Movie Info -->
          <div class="p-4 space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-gray-400 text-sm">{{ movie.releaseDate }}</span>
            </div>
            <h3 class="text-white font-semibold text-lg leading-tight line-clamp-2">
              {{ movie.title }}
            </h3>
          </div>

          <!-- Hover Overlay -->
          <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <button class="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Movie {
  id: number
  title: string
  poster: string
  releaseDate: string
  rating: string
  hasAdvanceTicket: boolean
}

const movies = ref<Movie[]>([
  {
    id: 1,
    title: "Pernikahan Arwah",
    poster: "https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001959",
    releaseDate: "20 Jun 2025",
    rating: "R18",
    hasAdvanceTicket: true
  },
  {
    id: 2,
    title: "Elio",
    poster: "https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001854",
    releaseDate: "19 Jun 2025",
    rating: "TBC",
    hasAdvanceTicket: true
  },
  {
    id: 3,
    title: "28 Years Later",
    poster: "https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001855",
    releaseDate: "19 Jun 2025",
    rating: "R18",
    hasAdvanceTicket: true
  },
  {
    id: 4,
    title: "Witch Returns, The",
    poster: "https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001903",
    releaseDate: "18 Jun 2025",
    rating: "G",
    hasAdvanceTicket: false
  },
  {
    id: 5,
    title: "Soul Lantern, The",
    poster: "https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001947",
    releaseDate: "13 Jun 2025",
    rating: "NC15",
    hasAdvanceTicket: false
  },
  {
    id: 6,
    title: "How to Train Your Dragon",
    poster: "https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001923",
    releaseDate: "12 Jun 2025",
    rating: "G",
    hasAdvanceTicket: false
  },
  {
    id: 7,
    title: "Guardian, The",
    poster: "https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001902",
    releaseDate: "12 Jun 2025",
    rating: "NC15",
    hasAdvanceTicket: false
  },
  {
    id: 8,
    title: "Ballerina",
    poster: "https://tickets.legend.com.kh/CDN/media/entity/get/Movies/HO00001917",
    releaseDate: "12 Jun 2025",
    rating: "R18",
    hasAdvanceTicket: false
  }
])

const getRatingClass = (rating: string): string => {
  const ratingClasses: Record<string, string> = {
    'R18': 'bg-red-600 text-white',
    'TBC': 'bg-yellow-600 text-white',
    'G': 'bg-green-600 text-white',
    'NC15': 'bg-orange-600 text-white',
    'PG': 'bg-blue-600 text-white'
  }
  return ratingClasses[rating] || 'bg-gray-600 text-white'
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>