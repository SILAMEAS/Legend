<script setup lang="ts">
const { theme, toggleTheme } = useTheme()
</script>

<template>
  <div class="flex items-center justify-between p-4">
    <span class="text-lg font-semibold">Current: {{ theme }}</span>
    <button @click="toggleTheme" class="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white">
      Toggle Theme
    </button>
  </div>
</template>
