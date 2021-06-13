<template>
  <div id="main">
    <Header />
    <Sidebar :load="isLoad"/>
    <main class="content ">
      <div class="content-container">
        <div class="cards-container">
          <router-view :load="isLoad"></router-view>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Header from '@/components/app/Header.vue'
import Sidebar from '@/components/app/Sidebar.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Sidebar
  },
  data () {
    return {
      data: {},
      isLoad: false
    }
  },
  methods: {
  },
  async mounted () {
    this.isLoad = true
    this.$store.commit('CLEAR_PLANETS_DATA')
    await this.$store.dispatch('getPlanetsData')
    this.isLoad = false
  }
}
</script>
