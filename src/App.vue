<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/app/Header.vue'
export default {
  components: {
    Header
  }
}
</script>
<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/styles/styles.scss"
</style>
