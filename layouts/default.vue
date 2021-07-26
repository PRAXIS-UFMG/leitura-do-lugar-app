<template>
  <div class='app-container'>
    <Sidebar class='sidebar' />
    <Topbar class='navbar' context='index'/>
<!--    <nav class='navbar'>-->
<!--      <div class='flex-grow'>-->
<!--        <AppTitle v-if='!$store.state.tutorial' />-->
<!--      </div>-->
<!--      <button class='text-xl'>-->
<!--        <nuxt-link to='/paginas/sobre'>sobre o projeto</nuxt-link>-->
<!--      </button>-->
<!--    </nav>-->
    <Nuxt class='main-app'/>
  </div>
</template>

<style scoped>
.app-container {
  @apply grid w-screen px-4;
  grid-template-columns: auto 1fr;
  grid-template-rows: min-content max-content;
  gap: 0 0;
  grid-template-areas:
    "sidebar navbar"
    "main-app main-app";
}

@screen lg {
  .app-container {
    @apply pl-0 items-start;
    grid-template-columns: theme('spacing.72') 1fr;
    gap: 0 0;
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
}
</style>
