export const useAuth = () => {
  const authToken = useCookie('auth_token')

  const isAuthenticated = computed(() => !!authToken.value)

  const login = (token: string) => {
    authToken.value = token
  }

  const logout = () => {
    authToken.value = null
    navigateTo('/login')
  }

  return {
    isAuthenticated,
    login,
    logout
  }
}
