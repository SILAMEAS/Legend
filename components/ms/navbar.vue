<script setup lang="ts">
import { useRoute } from 'nuxt/app'

// ✅ i18n composables
const { localePath } = useI18nCustom()

// ✅ active route checker (locale-aware)
const route = useRoute()
const isActive = (path: string) => route.fullPath === localePath(path)
</script>

<template>
  <div class="flex container justify-between">
    <div class="flex gap-x-5">
      <!-- Home -->
      <NuxtLink
          :to="localePath('/')"
          class="link"
          :class="{ 'active-link': isActive('/') }"
      >
        <House /> {{ $t('home') }}
      </NuxtLink>

      <!-- Cinemas -->
      <NuxtLink
          :to="localePath('/cinemas')"
          class="link"
          :class="{ 'active-link': isActive('/cinemas') }"
      >
        <MapPin /> {{ $t('cinemas') }}
      </NuxtLink>

      <!-- Promotion -->
      <NuxtLink
          :to="localePath('/promotion')"
          class="link"
          :class="{ 'active-link': isActive('/promotion') }"
      >
        <Tags /> {{ $t('offers') }}
      </NuxtLink>

      <!-- Food and Drinks -->
      <NuxtLink
          :to="localePath('/food-and-drinks')"
          class="link"
          :class="{ 'active-link': isActive('/food-and-drinks') }"
      >
        <Popcorn /> {{ $t('food_and_drinks') }}
      </NuxtLink>
    </div>

  </div>
</template>

