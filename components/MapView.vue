<template>
  <client-only>
    <l-map :zoom=17 :max-zoom=18 :min-zoom=13 :center='center'>
      <l-tile-layer :url='url' :attribution='attribution' />
      <MapMarker v-for='marker in markers' :key='marker.id' :marker='marker' />
    </l-map>
  </client-only>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'MapView',
  data: () => ({
    // url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png',
    // url: 'https://{s}.tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png',
    url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
    attribution: '&copy; contribuidores <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a>',
    // center: [-19.8137125, -43.9401725] // Bairro Mariquinhas, BH
    center: [-19.9247069, -43.9665991]
  }),
  computed: {
    markers() {
      return this.$store.state.excerpts
    }
  }
})
</script>

<style>
</style>
