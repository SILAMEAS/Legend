

<script setup lang="ts">
const { uploadImage } = useImageUpload()

const handleFileChange = async (e: Event) => {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file) return
  const imageUrl = await uploadImage(file)
  console.log('Uploaded image URL:', imageUrl)
}
definePageMeta({
  layout: 'default-admin'
})
</script>


<template>
  <div>
    <p>All Movie</p>
    <input type="file" @change="handleFileChange" />
  </div>
</template>