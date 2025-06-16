<template>
  <div class="container mx-auto">
    <div class="bg-black ">
      <HeaderNavbar/>
      <Navbar/>
    </div>
    <slot/>
    <p>footer</p>
  </div>
</template>


<script setup lang="ts">
import HeaderNavbar from "~/components/headerNavbar.vue";
</script>