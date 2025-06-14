<template>
  <div class="flex  gap-x-10 py-2 bg-red-400 sticky">
    <NuxtLink href="/" class="link-custom"><LazyLucideHouse /> Home</NuxtLink>
    <NuxtLink href="/about" class="link-custom"><LazyLucideMapPin /> Cinemas</NuxtLink>
    <NuxtLink href="/product" class="link-custom"> Product</NuxtLink>
    <NuxtLink href="/post" class="link-custom"> Post</NuxtLink>

  </div>
</template>

<script setup lang="ts">
</script>

<style>
  .link-custom{
    display: flex;
    align-items: center;
    justify-content: center;
    row-gap: 2px
  }
  .link-custom svg {
    width: 1.25rem !important;
    height: 1.25rem !important;
  }
</style>

