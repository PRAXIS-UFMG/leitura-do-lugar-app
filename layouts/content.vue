<template>
  <div class="app-container">
    <div class="app-header">
      <AppHeader />
    </div>
    <div class="app-content">
      <Nuxt />
    </div>
  </div>
</template>

<style scoped>
.app-container {
  @apply h-screen w-screen flex flex-col overflow-hidden;
  @apply bg-white;
}

.app-header {

}

.app-content {
	@apply flex-grow overflow-y-scroll;
}
</style>