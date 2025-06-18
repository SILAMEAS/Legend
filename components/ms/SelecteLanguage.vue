<template>
  <div class="relative inline-block text-left">
    <!-- Trigger Button -->
    <button
        @click="toggleDropdown"
        class="inline-flex items-center justify-center gap-2 rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        aria-expanded="true"
        aria-haspopup="true"
    >
      <img :src="selectedLanguage.flag" :alt="selectedLanguage.name" class="h-5 w-5 rounded-sm" />
      <span>{{ selectedLanguage.code }}</span>
      <ChevronDown class="h-4 w-4" />
    </button>

    <!-- Dropdown Menu -->
    <Transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
    >
      <div
          v-if="isOpen"
          class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
      >
        <div class="py-1" role="none">
          <button
              v-for="language in languages"
              :key="language.code"
              @click="selectLanguage(language)"
              class="group flex w-full items-center justify-between px-4 py-2 text-sm text-white hover:bg-gray-700"
              role="menuitem"
              tabindex="-1"
          >
            <div class="flex items-center gap-3">
              <img :src="language.flag" :alt="language.name" class="h-5 w-5 rounded-sm" />
              <span>{{ language.name }}</span>
            </div>
            <Check v-if="selectedLanguage.code === language.code" class="h-4 w-4 text-green-400" />
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronDown, Check } from 'lucide-vue-next'
const { locales, setLocale } = useI18n()

// Language options
const languages = ref([
  {
    code: 'en',
    name: 'English',
    flag: 'https://flagcdn.com/w20/gb.png'
  },
  {
    code: 'kh',
    name: 'ភាសាខ្មែរ',
    flag: 'https://flagcdn.com/w20/kh.png'
  },
  // {
  //   code: 'CN',
  //   name: '中文',
  //   flag: 'https://flagcdn.com/w20/cn.png'
  // }
])

// Reactive state
const isOpen = ref(false)
const selectedLanguage = ref(languages.value[0])

// Methods
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectLanguage = (language) => {
  selectedLanguage.value = language
  isOpen.value = false
  // Emit event or handle language change logic here
  console.log('Language changed to:', language.code)
  setLocale(language.code)

}

const closeDropdown = (event) => {
  if (!event.target.closest('.relative')) {
    isOpen.value = false
  }
}

// Lifecycle hooks
onMounted(() => {
  document.addEventListener('click', closeDropdown)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown)
})
</script>
