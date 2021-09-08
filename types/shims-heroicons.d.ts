// TODO: Abrir PR em https://github.com/matschik/vue-hero-icons

declare module '@vue-hero-icons/solid/*' {
  const content: any
  export default content
}

declare module '@vue-hero-icons/solid' {
  export { default as MenuIcon } from '@vue-hero-icons/solid/icons/MenuIcon'
  export { default as ChatAltIcon } from '@vue-hero-icons/solid/icons/ChatAltIcon'
  export { default as XIcon } from '@vue-hero-icons/solid/icons/XIcon'
  export { default as ClockIcon } from '@vue-hero-icons/solid/icons/ClockIcon'
  export { default as UserIcon } from '@vue-hero-icons/solid/icons/UserIcon'
}
