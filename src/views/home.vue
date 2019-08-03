<template>
  <div class="home">
    <h1>Home</h1>
    <img alt="Vue logo" src="../assets/logo.png" />
    <Home :menus="this.menus" />
  </div>
</template>

<script>
import Home from '@/components/Home.vue'
export default {
  name: 'home',
  data() {
    return {
      menus: [],
    }
  },
  components: {
    Home,
  },
}
</script>
