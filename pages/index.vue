<script>

</script>
<template>
 <div class="px-[20px] md:px-0">
<!--   Header -->
   <div class="flex items-center gap-x-5 font-medium text-sm md:text-2xl lg:text-3xl">
     <p>
       {{$t('now_showing')}}
     </p>
     |
     <p class="text-gray-600">
       {{$t('coming_soon')}}
     </p>
   </div>
   <!--   Box List -->
  <MsListDateShow/>
  <!--    Movie List -->
   <MsListMovies/>
<!--   <MsLoginCard/>-->
 </div>
</template>
