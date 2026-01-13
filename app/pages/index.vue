<template>
  <div class="home">
    <h1>Welcome to Auth Project</h1>
    <p>This is the home page.</p>
    <NuxtLink to="/dashboard" v-if="isAuthenticated" class="btn">Go to Dashboard</NuxtLink>
    <NuxtLink to="/login" v-else class="btn">Login</NuxtLink>
  </div>
</template>

<script setup>
const { isAuthenticated } = useAuth()
</script>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
}

.home h1 {
  margin-bottom: 1rem;
}

.home p {
  margin-bottom: 2rem;
  color: #666;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
