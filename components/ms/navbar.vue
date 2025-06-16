<script setup lang="ts">
  import {useRoute} from "nuxt/app";

  const route = useRoute();
  const isActive = (path: string) => route.fullPath === path
</script>

<template>
 <div class="flex container justify-between">
   <div class="flex gap-x-5">
    <!--     Home   -->
     <NuxtLink href="/" class="link" :class="{'active-link':isActive('/')}">
       <House/> Home
     </NuxtLink>
     <!--     About   -->
     <NuxtLink href="/about" class="link" :class="{'active-link':isActive('/about')}">
       <MapPin/> About
     </NuxtLink>
     <!--     Product   -->
     <NuxtLink href="/product" class="link" :class="{'active-link':isActive('/product')}">
       <ShoppingBag/> Product
     </NuxtLink>
     <!--     Post   -->
     <NuxtLink href="/post" class="link" :class="{'active-link':isActive('/post')}">
       <ShoppingBag/> Post
     </NuxtLink>

   </div>
   <div class="flex items-center gap-2">
     <Locate class="svg"/>
     <p>select</p>
   </div>
 </div>
</template>


