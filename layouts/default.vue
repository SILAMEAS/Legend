<template>
    <div class="flex flex-col overflow-hidden">
      <div class="flex items-center flex-col z-[10] absolute w-screen -mx-auto bg-[#1E1A13]/50 justify-center">
        <div class="container mx-auto  px-2 py-5">
          <MsHeaderNavbar/>
          <Separator class="my-2 bg-[#3A301F]"/>
          <MsNavbar/>
        </div>
      </div>
          <MsMembershipSwiper />
      <!-- Swiper -->
     <div class="container mx-auto">
       <slot/>
       <MsFooter/>
     </div>
    </div>
</template>
<script setup lang="ts">
</script>