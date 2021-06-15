<template>
  <div class="full-data-container">
    <h2 class="info-title">{{ data.name }}</h2>
      <p class="info-text">
        <span>rotation-period: </span>{{ data.rotation_period }}
      </p>
      <p class="info-text"><span>climate: </span>{{ data.climate }}</p>
      <p class="info-text"><span>gravity: </span>{{ data.gravity }}</p>
      <p class="info-text">
        <span>created: </span>{{ data.created | dateFilter }}
      </p>
      <p class="info-text"><span>url: </span>{{ data.url }}</p>
      <p class="info-text"><span>gravity: </span>{{ data.gravity }}</p>
      <p class="info-text"><span>orbital-period: </span>{{ data.orbital_period }}</p>
      <p class="info-text"><span>rotation-period: </span>{{ data.rotation_period }}</p>
      <p class="info-text"><span>population: </span>{{ data.population }}</p>
  </div>
</template>

<script>
export default {
  props: ['data'],
  filters: {
    dateFilter: function (value = '01/01/2010') {
      const date = new Date(value)
      return new Intl.DateTimeFormat('en-US').format(date)
    }
  }
}
</script>
