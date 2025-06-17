<script setup lang="ts">


</script>


<template>
  <div class="flex justify-between items-center w-[100%]">
    <Input type="text" placeholder="Search" class="max-w-[400px] !bg-[#2A2A2F]" />

    <div class="flex items-center gap-x-8">
      <img src="https://www.legend.com.kh/_ipx/s_117x44/legend-cinema-logo.png" alt="logo"/>
      <Button variant="outline" class="border-1 !border-gray-500">
        <Ticket />
        Ticket
      </Button>

      <Button variant="outline" class="border-1 !border-gray-500">
        <User/>
        Join Now
      </Button>

      <Button variant="outline" class="border-1 !border-gray-500">
        <Bell/>
      </Button>

      <MsSelecteLanguage/>

    </div>

  </div>


</template>


<style lang="css">


</style>