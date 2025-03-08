export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuth()
  if (!auth.value && to.path != '/signin') {
    return navigateTo('/signin')
  }
})
