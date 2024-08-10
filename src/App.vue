<script setup>
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <h1>Hello App!</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav class="nav">
    <RouterLink to="/" class="router-link">Go to Home</RouterLink>
    <RouterLink to="/basic-table" class="router-link"
      >Go to basic table</RouterLink
    >
    <RouterLink to="/multiheader-table" class="router-link"
      >Go to multiheader table</RouterLink
    >
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.nav {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}
.router-link {
  background: #86efac;
  color: #166534;
  font-weight: bold;
  padding: 4px 4px;
  border-radius: 4px;
}
</style>
