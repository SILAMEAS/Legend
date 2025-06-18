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

      <!-- About -->
      <NuxtLink
          :to="localePath('/about')"
          class="link"
          :class="{ 'active-link': isActive('/about') }"
      >
        <MapPin /> {{ $t('about') }}
      </NuxtLink>

      <!-- Product -->
      <NuxtLink
          :to="localePath('/product')"
          class="link"
          :class="{ 'active-link': isActive('/product') }"
      >
        <ShoppingBag /> {{ $t('product') }}
      </NuxtLink>

      <!-- Post -->
      <NuxtLink
          :to="localePath('/post')"
          class="link"
          :class="{ 'active-link': isActive('/post') }"
      >
        <ShoppingBag /> {{ $t('post') }}
      </NuxtLink>
    </div>

  </div>
</template>

