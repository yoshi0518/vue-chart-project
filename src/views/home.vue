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
      menus: [
        { id: 1, name: '折れ線グラフ', url: '/line' },
        { id: 2, name: '縦棒グラフ', url: '/bar' },
        { id: 3, name: '横棒グラフ', url: '/horizontal_bar' },
        { id: 4, name: '円グラフ', url: '/pie' },
        { id: 5, name: 'ドーナツグラフ', url: '/doughnut' },
        { id: 6, name: 'レーダーチャート', url: '/radar' },
        { id: 7, name: '鶏頭図', url: '/polar_area' },
        { id: 8, name: '面グラフ', url: '/area' },
        { id: 9, name: '混合グラフ', url: '/mixed' },
      ],
    }
  },
  components: {
    Home,
  },
}
</script>
