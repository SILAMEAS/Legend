<script setup lang="ts">


</script>


<template>
  <div class="hidden md:flex justify-between items-center w-[100%] ">
    <Input type="text" placeholder="Search" class="max-w-[400px] !bg-[#2A2A2F]" />

    <div class="flex items-center gap-x-8">
      <img src="https://www.legend.com.kh/_ipx/s_117x44/legend-cinema-logo.png" alt="logo"/>
      <Button variant="outline" class="border-1 !border-gray-500">
        <Ticket />
        {{$t('ticket')}}
      </Button>

      <Button variant="outline" class="border-1 !border-gray-500">
        <User/>
        {{$t('join_now')}}
      </Button>

      <Button variant="outline" class="border-1 !border-gray-500">
        <Bell/>
      </Button>

      <MsSelecteLanguage/>

    </div>

  </div>


<!--  Mobile -->
  <div class="h-[50px] flex  justify-between items-center w-full md:hidden ">
   <div class="flex gap-2 items-center h-full ">
     <div class="h-[33px] bg-gray-900 rounded-full flex items-center justify-center w-[33px]">
       <Ticket class="w-[20px] h-[20px]"/>
     </div>

     <div class="h-[33px] bg-gray-900 rounded-full flex items-center justify-center w-[33px]">
       <Bell class="w-[20px] h-[20px]"/>
     </div>
   </div>

    <img src="https://www.legend.com.kh/_ipx/s_117x44/legend-cinema-logo.png" alt="logo" class="w-[100px] h-[30px]"/>

    <div class="flex items-center gap-x-1">
      <MsSelecteLanguage/>

      <div class="h-[33px] bg-gray-900 rounded-full flex items-center justify-center w-[33px]">
        <Search class="w-[20px] h-[20px]"/>
      </div>
    </div>


  </div>


</template>


<style lang="css">


</style>