<script setup lang="ts">
  const style = useStyle();
</script>

<template>
  <div :class="style.linkNavigation.layout">
    <NuxtLink href="/" :class="style.linkNavigation.item">Home</NuxtLink>
    <NuxtLink href="/about" :class="style.linkNavigation.item"><LazyLucideMapPin /> Cinemas</NuxtLink>
    <NuxtLink href="/product" :class="style.linkNavigation.item"> Product</NuxtLink>
    <NuxtLink href="/post" :class="style.linkNavigation.item"> Post</NuxtLink>
    <UiButtonAnimeFull/>
    <UiButtonAnimeRightToLeft/>

  </div>
</template>


