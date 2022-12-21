<template>
  <h1>HomePage</h1>
  <NuxtLink href="/about">about</NuxtLink><br />
  <NuxtLink href="/weff">weff</NuxtLink><br />
  <NuxtLink href="/nested">nested</NuxtLink><br />
  <button @click="go">go</button>
  <!-- <div>{{ list}}</div>
  <div>{{ state.list ?? '无数据' }}</div>
  <h2>{{ data ?? '无数据' }}</h2>
  <button @click="hello">Hello</button>
  <br />
  <button @click="bye">Bye</button>
  <br />
  <button @click="fetch">fetchData</button> -->
</template>
<script setup lang="ts">
// import axios from "@/utils/request";
// const data = ref()
const go = () => {
  navigateTo("/weff", { replace: true })
}
// const state = reactive<{ table: any, list: any[] }>({ table: null, list: [] })
// //useFetch用法
// const { data: list, refresh } = useFetch('/proxy/fetchData', { server: false })
// onMounted(() => {
//   fetchData()
// })
// const fetch = async () => {
//   refresh()
//   state.table = await $fetch('/fetchData')
// }
// const hello = async () => {
//   data.value = await $fetch('/api/hello')
// }
// const fetchData = async () => {
//   const res = await axios.get<any>("/proxy/fetchData");
//   state.list = res.data;
// };
// const bye = async () => {
//   data.value = await $fetch('/api/bye')
// }
</script>