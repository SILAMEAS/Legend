<script setup lang="ts">
import { ref, onMounted } from 'vue'


const containerRef = ref<any>(null)
const activeIndex = ref(0)

const images = ref([
  { url: 'https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/5fc3097e-92d6-40a9-ad08-57da9cf79ece.jpeg', alt: 'Image 1' },
  { url: 'https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/bab652d6-8f39-42d8-98c5-2661fc0a3bdd.jpeg', alt: 'Image 2' },
  { url: 'https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/0ee58116-137c-4301-a9dd-875bb7d74bd9.jpeg', alt: 'Image 3' },
  { url: 'https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/84fe69e2-26bf-44a5-89c6-d5b31ad603ad.jpeg', alt: 'Image 4' },
  { url: 'https://coolbeans.sgp1.digitaloceanspaces.com/legend-cinema-prod/b7918c9b-3fa8-4e08-ac21-b15e0ecd2979.jpeg', alt: 'Image 5' }
])

const slidePrev = () => containerRef.value?.swiper?.slidePrev()
const slideNext = () => containerRef.value?.swiper?.slideNext()

const onSlideChange = () => {
  const swiper = containerRef.value?.swiper
  if (swiper) {
    // Use realIndex for looped swipers to get actual index
    activeIndex.value = swiper.realIndex
  }
}

onMounted(() => {
  if (containerRef.value) {
    activeIndex.value = containerRef.value.swiper.realIndex
  }
})
</script>


<template>
  <div
      class="w-screen h-[470px]  md:h-[630px] flex items-center justify-center md:pt-[80px]"
  >
    <!-- Overlay with blur -->
    <MsOverlayBlur/>
    <div class="w-full max-w-4xl mx-auto px-4 z-5">
      <ClientOnly>
        <swiper-container
            ref="containerRef"
            :slides-per-view="1"
            :space-between="30"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :pagination="{ clickable: true }"
            :navigation="true"
            :loop="true"
            @slidechange="onSlideChange"
            class="image-swiper"
        >
          <swiper-slide v-for="(image, index) in images" :key="index">
            <div class="flex justify-center items-center h-full">
              <div
                  class="w-full h-[100%] flex items-center justify-center bg-cover bg-center transition-all duration-500 "
                  :style="{ backgroundImage: `url('${images[activeIndex].url}')` }"
              />
              <img
                  :src="image.url + '?height=400&width=600'"
                  :alt="image.alt"
                  class="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </div>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </div>
  </div>
</template>
