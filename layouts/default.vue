<template>
    <div class="flex flex-col overflow-hidden">
      <div class="flex items-center flex-col z-[10] fixed w-screen -mx-auto /50 justify-center">
        <div class="container mx-auto  px-2 py-5">
          <MsHeaderNavbar/>
          <Separator class="my-2 bg-[#3A301F]"/>
          <MsNavbar/>
        </div>
      </div>
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