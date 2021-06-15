<template>
  <div class="filter-panel">
    <p>SELECT CLIMATE</p>
    <a class="none">
    <select name="climate" ref="selected" id="climate" v-model="selectedClimate"  @change="selectClimate">
      <option v-for="item in climateNames" :key="item" :value="item" >{{item}}</option>
    </select>
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      climateNames: ['arid', 'frigid', 'frozen', 'moist', 'humid', 'murky', 'polluted', 'tropical', 'hot', 'temperate', 'superheated', 'unknown', 'windy', 'artic', 'subartic', 'rocky'],
      selectedClimate: ''
    }
  },
  methods: {
    selectClimate () {
      this.$emit('selectClimate', this.selectedClimate)
    }
  }
}
</script>
