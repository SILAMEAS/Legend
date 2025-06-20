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

  try {
    const presignRes = await $fetch('/api/uploadthing-token', {
      method: 'POST',
      body: {
        name: file.name,
        type: file.type,
        size: file.size,
      },
    })

    const uploadData = presignRes.data[0] // ✅ UploadThing gives you `.data`

    const formData = new FormData()

    // Append fields from UploadThing
    Object.entries(uploadData.fields).forEach(([key, value]) => {
      formData.append(key, value)
    })

    // Append actual file (MUST be named `file`)
    formData.append('file', file)

    // Upload to S3 using form POST
    const res = await fetch(uploadData.url, {
      method: 'POST',
      body: formData,
    })

    if (res.ok) {
      imageUrl.value = uploadData.fileUrl // ✅ Show the public file URL
      errorMsg.value = ''
    } else {
      errorMsg.value = 'Upload failed'
    }
  } catch (err) {
    console.error(err)
    errorMsg.value = 'Upload error'
  }
}


</script>
