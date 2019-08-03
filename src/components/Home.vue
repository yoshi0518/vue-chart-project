<template>
  <div class="menu">
    <div v-for="menu in menus" :key="menu.id" style="margin-top: 20px; margin-bottom: 20px;">
      <router-link :to="menu.url">
        {{ menu.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: ['menus'],
}
</script>
