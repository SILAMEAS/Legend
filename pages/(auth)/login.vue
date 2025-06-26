<script setup>
import { useField, useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';
const { $supabase } = useNuxtApp()
const validationSchema = toTypedSchema(
    zod.object({
      email: zod.string().min(1, { message: 'This is required' }).email({ message: 'Must be a valid email' }),
      password: zod.string().min(1, { message: 'This is required' }).min(3, { message: 'Too short' }),
    })
);
const { handleSubmit, errors } = useForm({
  validationSchema,
});
const { value: email } = useField('email');
const { value: password } = useField('password');
const onSubmit = handleSubmit(async (values) => {
  const { data, error } = await $supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })

  if (error) {
    alert('Signup failed: ' + error.message)
  } else {
    alert('Signup successful! Please check your email to confirm.')
  }
});

definePageMeta({
  layout:'auth'
})
</script>
<template>
  <div class="border-2 border-white h-[400px] w-[300px] p-5 rounded-2xl">
    <p class="text-center text-2xl">Login</p>
    <Form @submit="onSubmit" class="mt-[30px] grid grid-cols-1 gap-10">
      <!--      Username -->
      <div>
        <Label for="terms">Username or email</Label>
        <Input name="email" v-model="email" type="email"/>
        <span class="text-red-500">{{ errors.email }}</span>
      </div>
      <!--      Password-->
      <div>
        <Label for="terms">Password</Label>
        <Input name="password" v-model="password" type="password" />
        <span class="text-red-500">{{ errors.password }}</span>
      </div>
      <Button>Submit</Button>
    </Form>
  </div>
</template>
