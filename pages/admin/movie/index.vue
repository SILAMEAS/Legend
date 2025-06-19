

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
  <MsUploadForm/>
</template>