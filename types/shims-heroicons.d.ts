// TODO: Abrir PR em https://github.com/matschik/vue-hero-icons

declare module '@vue-hero-icons/solid/*' {
  const content: any
  export default content
}

declare module '@vue-hero-icons/outline' {
}

declare module '@vue-hero-icons/solid' {
  export { default as MenuIcon } from '@vue-hero-icons/solid/icons/MenuIcon'
  export { default as SearchIcon } from '@vue-hero-icons/solid/icons/SearchIcon'
  export { default as XIcon } from '@vue-hero-icons/solid/icons/XIcon'
  // rest of solid icons
}
