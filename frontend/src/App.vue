<template>
  <div class="btns">
    <button @click="handleLogin">Login</button>
    <button @click="handleLogout">Logout</button>
  </div>
</template>

<script setup>
  import axios from 'axios';
  const handleLogin = async () => {
    const { data } = await axios.get('http://localhost:3500/api/login', {
      withCredentials: true,
    });
  };

  const handleLogout = async () => {
    const { data } = await axios.get('http://localhost:3500/api/logout', {
      withCredentials: true,
    });
  };
</script>

<style scoped>
  .btns {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
  }
  button {
    padding: 10px 20px;
    border: none;
    background-color: #4caf50;
    color: white;
    cursor: pointer;
  }
  button:hover {
    background-color: #45a049;
  }
</style>
