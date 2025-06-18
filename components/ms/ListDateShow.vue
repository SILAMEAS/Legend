<script setup lang="ts">

const listDates=ref([
    {
    day:"Today",
    th:18,
    month:"jun"
    },
  {
    day:"Mon",
    th:19,
    month:"jun"
  },
  {
    day:"Tue",
    th:20,
    month:"jun"
  },
  {
    day:"Wen",
    th:21,
    month:"jun"
  },
  {
    day:"Thu",
    th:22,
    month:"jun"
  },
  {
    day:"Fri",
    th:23,
    month:"jun"
  },
  {
    day:"Sat",
    th:24,
    month:"jun"
  },
  {
    day:"Sun",
    th:24,
    month:"jun"
  }
]);
const selected = ref(listDates.value[0]);

console.log(listDates.value);
console.log(selected.value);
</script>

<template>
  <div class="flex w-full  mt-[20px] gap-x-3 overflow-auto">
    <div class="min-w-[200px] h-[100px] border-2  rounded-md " v-for="date in listDates" :class="date===selected?'border-red-500':'border-gray-500'">
      <div class="flex flex-col justify-between items-center h-full py-2 text-lg text-gray-400">
        <p>{{ date.day }}</p>
        <p class="font-bold text-white"> {{ date.th }}</p>
        <p>{{ date.month }}</p>
      </div>
    </div>
  </div>
</template>
