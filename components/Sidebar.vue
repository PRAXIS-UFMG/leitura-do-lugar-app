<template>
  <div>
    <button type='button' class='lg:hidden'>
      <MenuIcon size='32' />
    </button>
    <div class='h-screen hidden lg:block bg-gray-600'>

    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { MenuIcon } from '@vue-hero-icons/solid'

export default Vue.extend({
  components: {
    MenuIcon
  }
})
</script>
