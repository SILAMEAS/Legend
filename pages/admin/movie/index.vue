

<script setup lang="ts">
const { uploadImage } = useImageUpload();
const image = ref(null);

const handleFileChange = async (e: Event) => {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file) return
  const imageUrl = await uploadImage(file)
  console.log('Uploaded image URL:', imageUrl)
  image.value=imageUrl;
}
definePageMeta({
  layout: 'default-admin'
})
</script>


<template>
  <div>
    <p>All Movie</p>
    <input type="file" @change="handleFileChange" />
    <img v-if="image" :src='image' :alt="image" />
  </div>
</template>