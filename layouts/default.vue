<template>
    <div class="flex flex-col">
      <div class="flex items-center flex-col z-[10] absolute w-screen -mx-auto">
        <div class="container mx-auto">
          <MsHeaderNavbar/>
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