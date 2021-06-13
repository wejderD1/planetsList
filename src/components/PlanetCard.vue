<template>
<div>
  <Loader v-if="load" style="left: 30%"/>
  <div v-else class="content-card">
    <a><i class="btn-close material-icons" @click="close">close</i></a>
    <h2 class="info-title">{{ planetParams.name }}</h2>
    <p class="info-text"><span>rotation-period: </span>{{ planetParams.rotation_period }}</p>
    <p class="info-text"><span>climate: </span>{{ planetParams.climate }}</p>
    <p class="info-text"><span>gravity: </span>{{ planetParams.gravity }}</p>
    <p class="info-text"><span>created: </span>{{ planetParams.created | dateFilter}}</p>
    <p class="info-text"><span>url: </span>{{ planetParams.url }}</p>
    <button class="btn more-btn">More</button>
  </div>
</div>

</template>

<script>
export default {
  props: ['load'],
  data () {
    return {
      isLoad: false,
      date: this.planetParams
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
      this.$router.push('/planets')
      this.planetParams.
    }
  },
  computed: {
    planetParams () {
      return this.$store.getters.planet
    }
  }
}
</script>
