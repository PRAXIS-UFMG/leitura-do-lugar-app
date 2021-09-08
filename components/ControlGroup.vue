<template>
  <div>
    <header class='header'>
      <h3>{{ title }}</h3>
    </header>
    <div class='toggles'>
      <ControlToggle
        v-for='controlKey of groupKeys'
        :key='controlKey'
        :toggle-group='toggleGroup'
        :control='controlKey'
      />
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
/* eslint-disable vue/require-default-prop */

export default Vue.extend({
  props: {
    title: String,
    toggleGroup: String
  },
  computed: {
    groupKeys() {
      return Object.keys(this.$store.state[this.toggleGroup])
    }
  }
})
</script>

<style scoped>
.header {
  @apply text-white font-medium uppercase text-right;
}

.toggles {
  @apply flex flex-col gap-4 mt-4 items-end;
}
</style>
