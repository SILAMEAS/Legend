


<template>
  <div class="container mx-auto overflow-auto">
    <div v-if="tickets.length === 0">No tickets found or loading...</div>
    <ul>
      <li v-for="ticket in tickets" :key="ticket.id">
        {{ ticket.seat_number }} - {{ ticket.showtimes?.movies?.title }}
      </li>
    </ul>
  </div>
</template>


<script setup lang="ts">
import { onMounted, ref } from 'vue'

const { $supabase } = useNuxtApp()

const tickets = ref<any[]>([])

onMounted(async () => {
  const { data, error } = await $supabase
      .from('tickets')
      .select('*, showtimes(*, movies(*), cinemas(*))')

  if (error) console.error(error)
  else tickets.value = data ?? []
})


definePageMeta({
  layout: 'default-admin'
})
</script>
