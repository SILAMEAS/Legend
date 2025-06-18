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
       <House/>  {{$t('home')}}
     </NuxtLink>
     <!--     About   -->
     <NuxtLink href="/about" class="link" :class="{'active-link':isActive('/about')}">
       <MapPin/>  {{$t('about')}}
     </NuxtLink>
     <!--     Product   -->
     <NuxtLink href="/product" class="link" :class="{'active-link':isActive('/product')}">
       <ShoppingBag/>  {{$t('product')}}
     </NuxtLink>
     <!--     Post   -->
     <NuxtLink href="/post" class="link" :class="{'active-link':isActive('/post')}">
       <ShoppingBag/>  {{$t('post')}}
     </NuxtLink>

   </div>
 </div>
</template>


