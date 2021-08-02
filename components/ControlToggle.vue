<template>
  <label class='container'>
    <span class='label'>{{ title }}</span>
    <div class='relative text-xs lg:text-sm'>
      <input v-model='propertyStore' type='checkbox' class='sr-only' />
      <div class='line'></div>
      <div class='dot'></div>
    </div>
  </label>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: { required: true, type: String },
    property: { required: true, type: String }
  },
  computed: {
    propertyStore: {
      get() {
        return this.property
      },
      set(value) {
      }
    }
  }
})
</script>

<style scoped>
.container {
  @apply text-white flex justify-end items-center gap-4;
}

.label {
  @apply font-light tracking-wide;
}

.line {
  @apply w-[2.5em] h-[1em] bg-gray-800 rounded-full shadow-inner;
  @apply transform transition-colors duration-300;
}

input:checked ~ .line {
  @apply bg-praxis-500;
}

.dot {
  @apply absolute h-[1.5em] w-[1.5em];
  @apply bg-white rounded-full shadow inset-y-[-25%] left-0;
  @apply transform transition-transform duration-150;
}

input:checked ~ .dot {
  @apply translate-x-[1em];
}
</style>
