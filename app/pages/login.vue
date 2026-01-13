<template>
  <NuxtLayout name="auth">
    <div class="login">
      <h2>Login</h2>

      <form @submit.prevent="login">
        <input v-model="username" type="text" placeholder="Username" required />
        <input v-model="password" type="password" placeholder="Password" required />

        <button type="submit">Login</button>
      </form>
    </div>
  </NuxtLayout>
</template>

<script setup>
const username = ref('')
const password = ref('')

const login = () => {
  // Create a fake token
  const token = 'fake-jwt-token-123'

  // Store token in cookie
  const authToken = useCookie('auth_token')
  authToken.value = token

  // Redirect to dashboard
  navigateTo('/dashboard')
}
</script>

<style scoped>
.login {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input {
  display: block;
  margin: 10px 0;
  padding: 10px;
}
button {
  padding: 10px 20px;
}
</style>
