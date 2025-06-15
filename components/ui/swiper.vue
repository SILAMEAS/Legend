<script setup lang="ts">
// Create 10 slides
const containerRef = ref(null)
const slides = ref(Array.from({ length: 10 }))

const swiper = useSwiper(containerRef)

onMounted(() => {
  console.log('Swiper instance:', swiper.instance)
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
            style="color: white;"
        >
          Slide {{ idx + 1 }}
        </swiper-slide>
      </swiper-container>
    </ClientOnly>

    <button @click="swiper.prev()" class="text-white">Prev</button>
    <button @click="swiper.next()">Next</button>
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