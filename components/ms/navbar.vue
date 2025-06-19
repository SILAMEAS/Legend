<script setup lang="ts">

// ✅ i18n composables
const { localePath } = useI18nCustom()

// ✅ active route checker (locale-aware)
const {isActive}=useActiveRoute()
</script>

<template>
<!--  PC -->
  <div class="hidden md:flex container justify-between">
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
<!-- PHone-->
  <div class="flex md:hidden container justify-between fixed bottom-0 bg-black/80 h-[50px] left-0 z-[999]">
    <div class="flex w-full justify-around">
      <!-- Home -->
      <NuxtLink
          :to="localePath('/')"
          class="link"
          :class="{ 'active-link': isActive('/') }"
      >
        <House />
      </NuxtLink>

      <!-- Cinemas -->
      <NuxtLink
          :to="localePath('/cinemas')"
          class="link"
          :class="{ 'active-link': isActive('/cinemas') }"
      >
        <MapPin />
      </NuxtLink>

      <!-- Promotion -->
      <NuxtLink
          :to="localePath('/promotion')"
          class="link"
          :class="{ 'active-link': isActive('/promotion') }"
      >
        <Tags />
      </NuxtLink>

      <!-- Food and Drinks -->
      <NuxtLink
          :to="localePath('/food-and-drinks')"
          class="link"
          :class="{ 'active-link': isActive('/food-and-drinks') }"
      >
        <Popcorn />
      </NuxtLink>
    </div>

  </div>
</template>

