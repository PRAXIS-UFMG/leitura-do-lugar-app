<template>
  <Nuxt />
</template>

<style scoped>
.app-container {
  @apply h-screen w-screen;
  @apply bg-white;
  display: grid;
  grid-template-columns: 16rem 1fr;
  grid-template-rows: auto 1fr;
  grid-auto-flow: row;
  grid-template-areas:
    'navbar header'
    'navbar main'
    'navbar main';
}

.app-navigation {
  grid-area: navbar;
}

.app-header {
  grid-area: header;
}

.app-navigation,
.app-header {
  @apply pt-6;
}

.app-content {
  grid-area: main;
  @apply flex mx-auto max-w-[100rem] p-4;
}
</style>
