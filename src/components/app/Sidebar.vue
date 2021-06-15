<template>
  <div>
    <Loader v-if="load" />
    <ul v-else class="sidenav sidenav-block open">
      <li v-for="(item, index) in planetsList" :key="index"><a @click="search(item)">{{ item.name }}</a></li>
      <div class="btn-groupe">
        <button class="btn m-10" @click="handlePrev">
          PREV
        </button>
        <button class="btn" @click="handleNext">
          NEXT
        </button>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['value', 'load'],
  data () {
    return {
    }
  },
  computed: {
    planetsList () {
      return this.$store.getters.planets
    }
  },
  methods: {
    getId (src) {
      return src.match(/\d/gi).join('')
    },
    async search (item) {
      this.$router.push('/planets/' + this.getId(item.url))
      await this.$store.dispatch('getPlanetFromId', this.getId(item.url))
    },
    handleNext () {
      this.$store.commit('INC')
      this.$store.dispatch('getPlanetsData')
    },
    handlePrev () {
      this.$store.commit('DEC')
      this.$store.dispatch('getPlanetsData')
    }
  }
}
</script>
