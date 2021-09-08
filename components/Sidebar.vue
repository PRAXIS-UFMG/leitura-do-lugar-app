<template>
  <div class='flex items-center pb-4 lg:block lg:p-0'>
    <button type='button' class='lg:hidden' @click='isOpen = true'>
      <MenuIcon class='w-8' />
    </button>
    <div class='collapsable' :class='{ closed: !isOpen}'>
      <div class='flex flex-row-reverse lg:hidden'>
        <button @click='isOpen = false'>
          <XIcon class='text-white' size='32' />
        </button>
      </div>
      <div class='controls'>
        <ControlGroup title='narrativas' toggle-group='narratives' />
        <ControlGroup title='suportes' toggle-group='supports' />
        <ControlGroup title='linhas de análise' toggle-group='lineAnalyses' />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { MenuIcon, XIcon } from '@vue-hero-icons/solid'

export default Vue.extend({
  components: {
    MenuIcon, XIcon
  },
  data: () => ({
    isOpen: false
  }),
  computed: {
    supports() {
      return this.$store.state.supports
    }
  }
})
</script>

<style scoped>
.collapsable {
  @apply h-full flex flex-col gap-4 bg-gray-600;
  @apply inset-y-0 left-0 absolute lg:static p-4 lg:py-16 lg:px-10;
  @apply transition-all duration-300 ease-out;
}

.collapsable.closed {
  @apply left-[-100%] lg:left-0;
}

.controls {
  @apply h-full mb-8 mr-12 ml-6 lg:mx-0 flex flex-col justify-evenly gap-12 overflow-y-scroll;
}
</style>
