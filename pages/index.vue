<template>
  <div class='px-4'>
    <nav class='flex py-4'>
      <button>
        <MenuIcon />
      </button>
      <div class='flex-grow'>
        <AppHeader v-if='opened' />
      </div>
      <button class='text-xl'>
        <nuxt-link to='/paginas/sobre'>sobre o projeto</nuxt-link>
      </button>
    </nav>
    <main>
      <div class='tutorial'>
        <PraxisLogo />
        <AppTitle class='text-3xl' />
        <p class='text-center leading-relaxed'>
          Utilize o menu na lateral esquerda para conhecer as narrativas enviadas. Basta clicar no item desejado para
          habilitar/desabilitar a camada.
        </p>
      </div>
    </main>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { MenuIcon } from '@vue-hero-icons/solid'

export default Vue.extend({
  components: {
    MenuIcon
  },
  data: () => ({
    opened: false
  })
})
</script>

<style scoped>
.tutorial {
  @apply w-full flex flex-col items-center gap-16;
  @apply mt-24;
}
</style>
