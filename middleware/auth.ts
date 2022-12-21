export default defineNuxtRouteMiddleware((to, from) => {
  console.log("auth:" + to.path)
  console.log("auth:" + from.path)
})