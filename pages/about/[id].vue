<template>
  <h3>{{ route.params.id }}</h3>
  <h3>Dynamic Page</h3>
</template>
<script setup lang="ts">
const route = useRoute()
</script>