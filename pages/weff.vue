<template>
  <h1 :style="{ color: color }">Test Page</h1>
  <h2>{{ response ?? '无数据' }}</h2>
  <!-- <NuxtPage /> -->
</template>
<script setup lang="ts">
import auth from '~~/middleware/auth';

definePageMeta({
  middleware: auth
})
const color = useColor('blue')
const params = {
  id: '1321321331',
  name: 'zhuJr',
  number: '153****7956'
}
const response = await $fetch('/api/hello', { method: 'post', body: params })
// console.log(response)
// const data = await(await fetch('http://127.0.0.1:8085/fetchData')).json()

</script>