<template>
  <div class="flex w-full ">
    <div class="w-[200px] h-screen border-r-1 border-white/30">
      <MsAdminLeftSide/>
    </div>
    <div class="flex grow p-5">
      <slot/>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>