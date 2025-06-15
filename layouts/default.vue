<template>
  <div class="container mx-auto">
    <HeaderNavbar/>
    <Navbar/>
    <slot/>
    <p>footer</p>
  </div>
</template>


<script setup lang="ts">
import HeaderNavbar from "~/components/headerNavbar.vue";
</script>