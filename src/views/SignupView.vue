<template>
    <div class="container">
        <form @submit.prevent="signup">
        <h2>SIGNUP</h2>
        <div class="form-group">
        <input type="text" name="username" placeholder="Username" v-model="username" required><br>
        </div>
        <div class="form-group">
        <input type="text" name="email" placeholder="Email" v-model="email" required><br>
        </div>
        <div class="form-group">
        <input type="text" name="password" placeholder="Password" v-model="password" required><br>
        </div>
        <button>Signup</button>
        </form>
    </div>
</template>


<script setup>
import {ref} from 'vue';
import axios from 'axios';

const username= ref('morgan')
const email= ref('morgan@gmail.com')
const password= ref('password')

const signup =  async () => {
   try {
      const response = await axios.post('http://127.0.0.1:8000/api/signup', {
      name: username.value,
      email: email.value,
      password: password.value
   });
   console.log(response);
   } catch (error) {
      console.log(error);
   }
}
</script>


<style scoped>
input{
    border-color: salmon;
    border-radius: 20px;
    height:40px;
    width:200px;
    margin-bottom: 10px;
}
button{
    border-color: salmon;
    border-radius: 20px;
}
</style>