<template>
  <nav class='flex py-4'>
    <button>
      <MenuIcon />
    </button>
    <div class='flex-grow text-xl'>
      <nuxt-link to="/">
        <AppTitle />
      </nuxt-link>
    </div>
    <button v-if='index'>
      <nuxt-link to='/paginas/sobre'>sobre o projeto</nuxt-link>
    </button>
  </nav>
</template>

<script lang='ts'>
import Vue from 'vue'
import { MenuIcon } from '@vue-hero-icons/solid'

export default Vue.extend({
  components: { MenuIcon },
  props: {
    index: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style scoped>

</style>
