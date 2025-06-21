<template>
  <div class="grid w-full grid-cols-12 h-screen overflow-hidden">
    <div class="col-span-2 h-screen border-r border-white/30">
      <MsAdminLeftSide />
    </div>
    <div class="col-span-10">
      <!-- Wrap slot content in a grid or let the page define it -->
      <slot />
    </div>
  </div>
</template>