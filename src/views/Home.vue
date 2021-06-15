<template>
  <div id="main">
    <Sidebar :load="isLoad"/>
    <main class="content ">
      <div class="content-container">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from '@/components/app/Sidebar.vue'
export default {
  name: 'Home',
  components: {
    Sidebar
  },
  data () {
    return {
      isLoad: false
    }
  },
  methods: {
  },
  async mounted () {
    this.$store.commit('DEFAULT_PAGE')
    this.$store.commit('CLEAR_PLANETS_DATA')
    this.isLoad = true
    this.$store.commit('CLEAR_PLANETS_DATA')
    await this.$store.dispatch('getPlanetsData')
    this.isLoad = false
  }
}
</script>
