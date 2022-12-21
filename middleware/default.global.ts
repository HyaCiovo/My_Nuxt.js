export default defineNuxtRouteMiddleware((to, from) => {
  console.log("要去那个页面:" + to.path)
  console.log("来自那个页面:" + from.path)
})