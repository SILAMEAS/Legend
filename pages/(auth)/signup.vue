<template>
  <div class="p-4 max-w-md mx-auto">
    <h2 class="text-xl font-bold mb-4">Sign Up</h2>
    <form @submit.prevent="handleSignup">
      <input v-model="email" type="email" placeholder="Email" class="input mb-2 w-full" required />
      <input v-model="password" type="password" placeholder="Password" class="input mb-2 w-full" required />
      <button type="submit" class="btn w-full">Sign Up</button>
    </form>
    <p class="mt-2 text-sm">Already have an account? <NuxtLink to="/login">Login here</NuxtLink></p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const { $supabase } = useNuxtApp()

const email = ref('')
const password = ref('')

const handleSignup = async () => {
  const { data, error } = await $supabase.auth.signUp({
    email: email.value,
    password: password.value
  })

  if (!error && data.user) {
    await $supabase
        .from('profiles')
        .insert([{ id: data.user.id, full_name: '', role: 'user' }])
  }
  if (error) {
    alert('Signup failed: ' + error.message)
  } else {
    alert('Signup successful! Please check your email to confirm.')
  }
}

definePageMeta({
  layout:'auth'
})
</script>
