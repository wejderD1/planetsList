<template>
  <div class="cards-container">
    <div v-if="isData" class="content-card">
      <!-- <a><i class="btn-close material-icons" @click="close">close</i></a> -->
      <h2 class="info-title">{{ planetParams.name }}</h2>
      <p class="info-text">
        <span>rotation-period: </span>{{ planetParams.rotation_period }}
      </p>
      <p class="info-text"><span>climate: </span>{{ planetParams.climate }}</p>
      <p class="info-text"><span>gravity: </span>{{ planetParams.gravity }}</p>
      <p class="info-text">
        <span>created: </span>{{ planetParams.created | dateFilter }}
      </p>
      <p class="info-text"><span>url: </span>{{ planetParams.url }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isData: false
    }
  },
  filters: {
    dateFilter: function (value = '01/01/2010') {
      const date = new Date(value)
      return new Intl.DateTimeFormat('en-US').format(date)
    }
  },
  methods: {
    close () {
      this.isData = false
    }
  },
  computed: {
    planetParams () {
      return this.$store.getters.planet
    }
  },
  mounted () {
    this.isData = true
  },
  updated () {
  },
  close () {
    if (this.$store.getters.planet) {
      this.isData = true
    }
  },
  destroyed () {
    this.isData = false
  }
}
</script>
