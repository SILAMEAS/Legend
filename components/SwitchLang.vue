
<script setup lang="ts">

const { locales, setLocale, locale, localePath, switchLocalePath } = useI18nCustom()
</script>

<template>
  <div>
    <button v-for="locale in locales" @click="setLocale(locale.code)">
      {{ locale.name }}
    </button>
    <h1>{{ $t('welcome') }}</h1>
  </div>
  <div class="flex gap-2">
    <NuxtLink
        v-for="l in locales"
        :key="l.code"
        :to="switchLocalePath(l.code)"
        class="px-2 py-1 border rounded"
        :class="{ 'bg-blue-500 text-white': locale === l.code }"
    >
      {{ l.name }}
    </NuxtLink>
  </div>
</template>