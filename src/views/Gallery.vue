<template>
  <div>
    <FilterPanel @selectClimate="selectedClimate"/>
    <PlanetsList :data="isData" :planets="filteredPlanets"/>
  </div>
</template>

<script>
import FilterPanel from '@/components/FilterPanel.vue'
import PlanetsList from '@/components/PlanetsList.vue'
export default {
  components: {
    FilterPanel, PlanetsList
  },
  data () {
    return {
      isData: false,
      planets: [],
      filteredPlanets: []
    }
  },
  methods: {
    filterPlanets (value) {
      return this.planets.filter(elem => {
        if (elem.climate.includes(value)) {
          return elem
        }
      })
    },
    /* filtered planets array from selected climate name, return new array */
    selectedClimate (newVal) {
      this.filteredPlanets = this.filterPlanets(newVal)
      console.log('filtered', this.filteredPlanets)
      console.log('filteredVal', newVal)
      this.isData = true
    }
  },
  async mounted () {
    this.$store.commit('DEFAULT_PAGE')
    this.$store.commit('CLEAR_PLANETS_DATA')
    for (let i = 0; i < 6; i++) {
      await this.$store.dispatch('getPlanetsData')
      this.planets.push(...this.$store.getters.planets)
      this.$store.commit('INC')
    }
  },
  beforeDestroy () {
    this.filteredPlanets = []
    this.planets = []
    this.isData = false
  }
}
</script>
