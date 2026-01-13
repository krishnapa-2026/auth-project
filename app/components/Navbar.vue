<template>
  <nav class="navbar">
    <div class="navbar-content">
      <NuxtLink to="/" class="logo">Auth Project</NuxtLink>
      <div class="nav-links">
        <NuxtLink to="/dashboard" v-if="isAuthenticated">Dashboard</NuxtLink>
        <NuxtLink to="/login" v-if="!isAuthenticated">Login</NuxtLink>
        <button v-if="isAuthenticated" @click="handleLogout" class="logout-btn">Logout</button>
      </div>
    </div>
  </nav>
</template>

<script setup>
const { isAuthenticated, logout } = useAuth()

const handleLogout = () => {
  logout()
}
</script>

<style scoped>
.navbar {
  background-color: #333;
  color: white;
  padding: 1rem 2rem;
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.nav-links a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-links a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.logout-btn {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.logout-btn:hover {
  background-color: #c82333;
}
</style>
