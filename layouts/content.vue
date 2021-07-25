<template>
  <div class='app-container'>
    <Topbar />
    <div class='app-content'>
      <Nuxt />
    </div>
  </div>
</template>

<style scoped>
.app-container {
  @apply w-screen flex flex-col;
  @apply px-4 overflow-hidden;
  @apply bg-white;
}

.app-header {

}

.app-content {
  @apply flex-grow overflow-y-scroll;
}
</style>
