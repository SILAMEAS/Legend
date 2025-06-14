<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold">Counter: {{ counter.count }}</h1>
    <button @click="counter.increment" class="bg-blue-500 text-white px-4 py-2 rounded">Increment</button>
    <button @click="counter.decrement" class="bg-blue-500 text-white px-4 py-2 rounded ml-2">Decrement</button>
  </div>
</template>

<script setup lang="ts">
const counter = useCounterStore()
</script>
