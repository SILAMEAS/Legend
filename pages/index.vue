<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'

const { theme, setTheme } = useTheme()

const hi = () => {
  alert('hi')
}

const isDark = computed({
  get: () => theme.value === 'dark',
  set: (val) => setTheme(val ? 'dark' : 'light'),
})
</script>

<template>
  <div class="flex flex-col">
    <!-- Swiper -->
    <div class="relative h-[700px]">
      <MsMembershipSwiper />
    </div>

    <!-- Content -->
    <Button>Test</Button>
    <div class="flex items-center gap-2">
      <Button @click="hi">HI</Button>
      <Switch v-model:checked="isDark" />
      <span>{{ theme }}</span>
    </div>
  </div>
</template>
