<template>
  <div>
    <input type="file" @change="onFileChange" />
    <p v-if="imageUrl">✅ Uploaded: <a :href="imageUrl" target="_blank">{{ imageUrl }}</a></p>
    <p v-else-if="errorMsg" style="color: red">{{ errorMsg }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const imageUrl = ref('')
const errorMsg = ref('')

const onFileChange = async (e: Event) => {
  const file = (e.target as HTMLInputElement).files?.[0]
  if (!file) return

  const presignRes = await $fetch('/api/uploadthing-token', {
    method: 'POST',
    body: {
      name: file.name,
      type: file.type,
      size: file.size, // ✅ required
    },
  })

  const { presignedUrls, fileUrl } = presignRes[0]

  const res = await fetch(presignedUrls[0], {
    method: 'PUT',
    body: file,
    headers: {
      'Content-Type': file.type,
    },
  })

  if (res.ok) {
    imageUrl.value = fileUrl
  } else {
    errorMsg.value = 'Upload failed'
  }
}


</script>
