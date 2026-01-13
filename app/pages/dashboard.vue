<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <p>You are logged in 🎉</p>
    <p v-if="userInfo">Welcome, {{ userInfo.username }}!</p>

    <div class="dashboard-content">
      <div class="card">
        <h2>Protected Content</h2>
        <p>This page is protected by route middleware. Only authenticated users can access it.</p>
      </div>
    </div>

    <button @click="handleLogout" class="logout-btn">Logout</button>
  </div>
</template>

<script setup>
// Apply named middleware to protect this route
definePageMeta({
  middleware: 'auth'
})

const { logout, isAuthenticated } = useAuth()

// Get user info from cookie (in a real app, this would come from the token)
const authToken = useCookie('auth_token')
const userInfo = computed(() => {
  // In a real app, you'd decode the JWT token here
  return authToken.value ? { username: 'User' } : null
})

const handleLogout = () => {
  logout()
}
</script>

<style scoped>
.dashboard {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.dashboard h1 {
  margin-bottom: 1rem;
  text-align: center;
  color: #333;
}

.dashboard > p {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  text-align: center;
}

.dashboard-content {
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.card {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.card h2 {
  margin-bottom: 0.5rem;
  color: #333;
  font-size: 1.25rem;
}

.card p {
  color: #666;
  line-height: 1.6;
}

.logout-btn {
  display: block;
  margin: 2rem auto 0;
  padding: 0.75rem 1.5rem;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.logout-btn:hover {
  background-color: #c82333;
}
</style>
