<script setup lang="ts">

const { locales, setLocale } = useI18n()
</script>

<template>
  <div class="flex flex-col">

    <!-- Content -->
    <div>
      <button v-for="locale in locales" @click="setLocale(locale.code)">
        {{ locale.name }}
      </button>
      <h1>{{ $t('welcome') }}</h1>
    </div>
  </div>
</template>
