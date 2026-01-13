<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; {{ currentYear }} Auth Project. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background-color: #333;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
