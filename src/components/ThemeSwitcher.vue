<template>
    <div>
      <button @click="toggleTheme">Toggle Theme</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const theme = ref(localStorage.getItem('theme') || 'theme-light');
  
      function setTheme(themeName) {
        localStorage.setItem('theme', themeName);
        document.documentElement.className = themeName;
      }
  
      function toggleTheme() {
        if (theme.value === 'theme-dark') {
          setTheme('theme-light');
        } else {
          setTheme('theme-dark');
        }
      }
  
      return {
        theme,
        toggleTheme,
      };
    },
  };
  </script>