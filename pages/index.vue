<template>
  <main>
    <TutorialView v-if='showTutorial' />
    <LazyMapView v-if='showMap' />
  </main>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  async asyncData({ store }) {
    await store.dispatch('fetchControls')
    await store.dispatch('fetchNarratives')
  },
  computed: {
    showTutorial() {
      const supports = this.$store.state.supports
      return !Object.values(supports).some(s => s.value)
    },
    showMap() {
      return this.$store.state.supports.map.value === true
    }
  }
})
</script>

<style scoped>
</style>
