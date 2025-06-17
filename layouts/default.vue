<template>
  <div class="container mx-auto h-screen">
    <div class="flex items-center flex-col z-[10] fixed">
      <MsHeaderNavbar/>
      <MsNavbar/>
    </div>
    <ThemeToggle />
    <div class="z-[5] pt-20">
      <slot/>
    </div>
   <MsFooter/>
  </div>
</template>
<script setup lang="ts">
</script>