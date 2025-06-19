<script setup lang="ts">

import {useActiveRoute} from "~/composables/useActiveRoute";

const {isActive}=useActiveRoute();
</script>

<template>
  <div class="flex flex-col p-5 gap-y-3">
    <div class="flex items-center gap-x-2">
      <layoutDashboard/>
      Dashboard
    </div>
    <div class="flex items-center gap-x-2">
      <Clapperboard/>
      Movie
    </div>
    <div class="flex items-center gap-x-2">
      <Film/>
      Cinema
    </div>
    <div class="flex items-center gap-x-2">
      <Cog/>
      Set up
    </div>
    <div class="flex items-center gap-x-2">
      <User/>
      User
    </div>
  </div>
</template>
