<template>
  <div class="container mx-auto">
    <div class="bg-black ">
      <MsHeaderNavbar/>
      <MsNavbar/>
    </div>
    <ThemeToggle />
    <slot/>
    <p>footer</p>
  </div>
</template>
<script setup lang="ts">
</script>