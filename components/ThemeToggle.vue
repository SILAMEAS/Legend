<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Sun, Moon } from 'lucide-vue-next'

const theme = ref<'light' | 'dark' | 'system'>('dark')

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' | null
  if (savedTheme) {
    theme.value = savedTheme
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme.value = 'dark'
    document.documentElement.classList.add('dark')
  }
})

const setTheme = (newTheme: 'light' | 'dark' | 'system') => {
  theme.value = newTheme
  if (newTheme === 'system') {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', 'system')
  } else {
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
  }
}
</script>

<template>
 <div>
   <DropdownMenu>
     <DropdownMenuTrigger as-child>
       <Button variant="outline" size="icon">
         <Sun v-if="theme === 'light'" class="h-5 w-5" />
         <Moon v-else class="h-5 w-5" />
         <span class="sr-only">Toggle theme</span>
       </Button>
     </DropdownMenuTrigger>
     <DropdownMenuContent align="end">
       <DropdownMenuItem @click="setTheme('light')">
         Light
       </DropdownMenuItem>
       <DropdownMenuItem @click="setTheme('dark')">
         Dark
       </DropdownMenuItem>
       <DropdownMenuItem @click="setTheme('system')">
         System
       </DropdownMenuItem>
     </DropdownMenuContent>
   </DropdownMenu>
 </div>
</template>