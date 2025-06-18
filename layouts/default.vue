<template>
    <div class="flex flex-col overflow-hidden">
      <MsHeaderNavbar/>
      <MsNavbar/>
<!--      Nav Bar-->
      <div class="hidden md:flex items-center flex-col z-[10] fixed w-screen bg-[#211B1F]/50 -mx-auto /50 justify-center">
        <div class="container mx-auto  px-2 py-5">
          <MsHeaderNavbar/>
          <Separator class="my-5 bg-[#3A301F]"/>
          <MsNavbar/>
        </div>
      </div>


<!--      Blue with swiper-->
          <OverlayBlurNavBar/>
          <MsMembershipSwiper />
      <!-- Swiper -->
     <div class="container mx-auto overflow-hidden">
       <slot/>
       <MsFooter/>
     </div>
    </div>
</template>
<script setup lang="ts">
import OverlayBlurNavBar from "~/components/ms/overlayBlurNavBar.vue";
</script>