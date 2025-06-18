<script setup lang="ts">

const listDates = ref([
  {
    id: 0,
    day: "Today",
    th: 18,
    month: "jun"
  },
  {
    id: 1,
    day: "Mon",
    th: 19,
    month: "jun"
  },
  {
    id: 2,
    day: "Tue",
    th: 20,
    month: "jun"
  },
  {
    id: 3,
    day: "Wen",
    th: 21,
    month: "jun"
  },
  {
    id: 4,
    day: "Thu",
    th: 22,
    month: "jun"
  },
  {
    id: 5,
    day: "Fri",
    th: 23,
    month: "jun"
  },
  {
    id: 6,
    day: "Sat",
    th: 24,
    month: "jun"
  },
  {
    id: 7,
    day: "Sun",
    th: 24,
    month: "jun"
  }
]);
const selected = ref(listDates.value[0]);

const clickBox = (id: number) => {
  selected.value = listDates.value.find(item => item.id == id)??selected.value;
}

const scrollContainer = ref<HTMLElement | null>(null)
let isDown = false
let startX = 0
let scrollLeft = 0

const startDrag = (e: MouseEvent) => {
  isDown = true
  startX = e.pageX - (scrollContainer.value?.offsetLeft || 0)
  scrollLeft = scrollContainer.value?.scrollLeft || 0
}

const onDrag = (e: MouseEvent) => {
  if (!isDown || !scrollContainer.value) return
  e.preventDefault()
  const x = e.pageX - scrollContainer.value.offsetLeft
  const walk = x - startX
  scrollContainer.value.scrollLeft = scrollLeft - walk
}

const stopDrag = () => {
  isDown = false
}
</script>

<template>
  <div
      ref="scrollContainer"
      class="flex w-full mt-[20px] gap-x-3 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="stopDrag"
      @mouseleave="stopDrag"
  >
    <div
        class="min-w-[60px] h-[80px] md:min-w-[200px] md:h-[100px] border-2 rounded-md"
        v-for="date in listDates"
        :key="date.th"
        :class="date === selected ? 'border-red-500' : 'border-gray-500'"
    >
      <div class="flex flex-col justify-between items-center h-full py-2 text-sm md:text-lg text-gray-400"
           @click="clickBox(date.id)">
        <p>{{ date.day }}</p>
        <p class="font-bold text-white"> {{ date.th }}</p>
        <p>{{ date.month }}</p>
      </div>
    </div>
  </div>
</template>
