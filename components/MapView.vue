<template>
  <client-only>
    <l-map :zoom=17 :max-zoom=18 :min-zoom=13 :center='center'>
      <l-tile-layer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' :attribution='attribution'></l-tile-layer>
    </l-map>
  </client-only>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'MapView',
  data: () => ({
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; contribuidores <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a>',
    center: [-19.8137125, -43.9401725] // Bairro Mariquinhas, BH
  })
})
</script>

<style scoped>

</style>
