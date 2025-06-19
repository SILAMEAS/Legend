<!-- components/UploadForm.vue -->
<template>
  <form @submit.prevent="handleSubmit">
    <input type="file" @change="onFileChange" accept="image/*" />
    <button type="submit" :disabled="!file">Upload</button>
    <p v-if="message">{{ message }}</p>
    <img v-if="imageUrl" :src="imageUrl" alt="Uploaded image" style="max-width: 300px;" />
  </form>
</template>

<script setup>
import { ref } from 'vue';

const file = ref(null);
const message = ref('');
const imageUrl = ref('');

const onFileChange = (event) => {
  file.value = event.target.files[0];
};

const handleSubmit = async () => {
  if (!file.value) {
    message.value = 'Please select a file';
    return;
  }

  const formData = new FormData();
  formData.append('file', file.value);

  try {
    const response = await $fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    message.value = response.message;
    if (response.url) {
      imageUrl.value = response.url; // Display image locally
    }
  } catch (error) {
    message.value = error.data?.message || 'Upload failed';
  }
};
</script>