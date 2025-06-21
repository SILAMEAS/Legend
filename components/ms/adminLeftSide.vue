<script setup lang="ts">

const {localePath}=useI18nCustom();

const {isActive}=useActiveRoute();
</script>

<template>
  <div class="flex flex-col p-5 gap-y-3">
    <NuxtLink
        :to="localePath('/admin')"
        class="link   flex items-center gap-x-2"
        :class="{ 'active-link active-link-border': isActive('/admin') }">
        <layoutDashboard/>
        Dashboard
    </NuxtLink>

    <NuxtLink
        :to="localePath('/admin/movie')"
        class="link  flex items-center gap-x-2"
        :class="{ 'active-link active-link-border': isActive('/admin/movie') }">
        <Clapperboard/>
        Movie
    </NuxtLink>
    <NuxtLink
        :to="localePath('/admin/cinema')"
        class="link   flex items-center gap-x-2"
        :class="{ 'active-link active-link-border': isActive('/admin/cinema') }">
      <Film/>
      Cinema
    </NuxtLink>
    <NuxtLink
        :to="localePath('/admin/set-up')"
        class="link   flex items-center gap-x-2"
        :class="{ 'active-link active-link-border': isActive('/admin/set-up') }">
      <Cog/>
      Set up
    </NuxtLink>
    <NuxtLink
        :to="localePath('/admin/user')"
        class="link  flex items-center gap-x-2"
        :class="{ 'active-link active-link-border': isActive('/admin/user') }">
      <User/>
      User
    </NuxtLink>
  </div>
</template>
