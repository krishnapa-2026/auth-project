export default defineNuxtRouteMiddleware((to) => {
  const authToken = useCookie('auth_token')

  // Only protect specific routes (dashboard, profile, etc.)
  // Allow public routes like home, login, etc.
  const protectedRoutes = ['/dashboard']
  const isProtectedRoute = protectedRoutes.some(route => to.path.startsWith(route))

  // If accessing a protected route without auth, redirect to login
  if (isProtectedRoute && !authToken.value) {
    return navigateTo('/login')
  }

  // If already logged in and trying to access login page, redirect to dashboard
  if (authToken.value && to.path === '/login') {
    return navigateTo('/dashboard')
  }
})