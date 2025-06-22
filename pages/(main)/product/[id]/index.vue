<script setup lang="ts">
import {useRoute} from "nuxt/app";

const foo = useFoo();
const route = useRoute()
// Extract the id from the route (e.g., '2' from /product/2)
console.log("productId",route.params.id)

</script>
<template>
  <p> pruoduct with id {{foo}} {{route.params.id}}</p>
</template>