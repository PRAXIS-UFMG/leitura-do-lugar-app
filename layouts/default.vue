<template>
  <div class='app-container'>
    <Sidebar class='sidebar' />
    <Topbar class='navbar' context='index'/>
    <Nuxt class='main-app'/>
  </div>
</template>

<style scoped>
.app-container {
  @apply grid w-screen lg:h-screen px-4;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "sidebar navbar"
    "main-app main-app";
}

@screen lg {
  .app-container {
    @apply pl-0;
    grid-template-areas:
    "sidebar navbar"
    "sidebar main-app";
  }
}

.sidebar {
  grid-area: sidebar;
  @apply pt-4 lg:pt-0;
}

.navbar {
  grid-area: navbar;
  @apply pt-4 lg:pl-4;
}

.main-app {
  grid-area: main-app;
  @apply flex items-stretch justify-center;
}
</style>
