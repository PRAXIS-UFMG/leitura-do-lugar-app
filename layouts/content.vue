<template>
  <div class="app-container">
    <Topbar context="content" />
    <div class="app-content">
      <Nuxt />
    </div>
  </div>
</template>

<style scoped lang="postcss">
.app-container {
  @apply w-screen flex flex-col;
  @apply px-4 overflow-hidden;
  @apply bg-white;
}

.app-content {
  @apply flex-grow overflow-y-scroll;
}
</style>
