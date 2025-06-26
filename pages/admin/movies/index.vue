
<template>
  <div class="max-w-xl mx-auto p-6">
    <h2 class="text-2xl font-bold mb-4">Add New Movie</h2>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <input v-model="title" placeholder="Title" class="input w-full" required />
      <textarea v-model="description" placeholder="Description" class="input w-full" rows="3" />
      <input v-model="duration" type="number" placeholder="Duration (minutes)" class="input w-full" />
      <input v-model="releaseDate" type="date" class="input w-full" />
      <input type="file" accept="image/*" @change="handleFile" />

      <button type="submit" class="btn w-full">Add Movie</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const { $supabase } = useNuxtApp()
const router = useRouter()

const title = ref('')
const description = ref('')
const duration = ref<number | null>(null)
const releaseDate = ref('')
const posterFile = ref<File | null>(null)

const handleFile = (e: Event) => {
  const target = e.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) posterFile.value = file
}

const uploadPoster = async () => {
  if (!posterFile.value) return null

  const fileExt = posterFile.value.name.split('.').pop()
  const fileName = `${Date.now()}.${fileExt}`
  const { data, error } = await $supabase
      .storage
      .from('posters')
      .upload(fileName, posterFile.value)

  if (error) {
    alert('Upload error: ' + error.message)
    return null
  }

  const { data: urlData } = $supabase
      .storage
      .from('posters')
      .getPublicUrl(fileName)

  return urlData?.publicUrl ?? null
}

const handleSubmit = async () => {
  const posterUrl = await uploadPoster()

  const { error } = await $supabase.from('movies').insert({
    title: title.value,
    description: description.value,
    duration_minutes: duration.value,
    release_date: releaseDate.value,
    poster_url: posterUrl
  })

  if (error) {
    alert('Error adding movie: ' + error.message)
  } else {
    alert('Movie added successfully!')
    router.push('/admin/movies')
  }
}
definePageMeta({
  layout: 'default-admin'
})
</script>

