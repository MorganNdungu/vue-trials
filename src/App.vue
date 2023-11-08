

<template>
  <div class="container">

    <nav class="nav-link">
      <RouterLink to="/" class="nav-item">Home</RouterLink>
      <RouterLink to="/about" class="nav-item">About</RouterLink>
      <RouterLink to="/services" class="nav-item">Our Services</RouterLink>
      <RouterLink to="/contacts" class="nav-item">Contact Us</RouterLink>
      <RouterLink to="/login" class="nav-item">LogIn</RouterLink>
      <RouterLink to="/signup" class="nav-item">SignUp</RouterLink>


    </nav>

  </div>
  <RouterView/>

</template>

<script setup>
import {RouterLink} from 'vue-router'
</script>

<style scoped>
.nav-link{
  background-color: black;
  padding: 10px 0px;
}
.nav-link .nav-item{
  color: white;
  padding: 0px 28px;
  text-decoration: none;
  font-size: medium;
  font-weight: bold;
}
</style>

