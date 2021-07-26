<template>
  <nav class='topbar'>
    <nuxt-link to='/' class='text-left'>
      <AppTitle class='text-lg md:text-2xl' />
    </nuxt-link>
    <nuxt-picture src='logo-praxis.png' sizes=' md:96px lg:128px' class='mx-auto hidden lg:inline' />
    <div class='flex flex-row-reverse items-baseline link'>
      <nuxt-link v-if='context === "index"' to='/paginas/sobre'>sobre o projeto</nuxt-link>
      <nuxt-link v-if='context === "content"' to='/#'>voltar</nuxt-link>
    </div>
  </nav>
</template>

<script lang='ts'>
import Vue from 'vue'

export default Vue.extend({
  props: {
    context: String
  }
})
</script>

<style scoped>
.topbar {
  @apply py-4 grid grid-cols-2 lg:grid-cols-3 pl-4 items-baseline;
}
</style>
