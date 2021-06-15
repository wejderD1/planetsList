<template>
  <div>
    <div class="planets-list" v-if="data">
      <PlanetFullData v-for="item in planets" :key="item.name" :data="item"/>
    </div>
    <h3 v-else style="color: black">SELECT FILTER</h3>
  </div>
</template>

<script>
import PlanetFullData from '@/components/PlanetFullData.vue'
export default {
  props: ['data', 'planets'],
  components: {
    PlanetFullData
  },
  mounted () {
    // console.log('dataMount', this.planets)
  },
  beforeDestroy () {
    // console.log('data Before', this.planets)
  }
}
</script>
