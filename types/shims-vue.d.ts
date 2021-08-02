import { accessorType, RootState } from '~/store'
import { Store } from 'vuex'

declare module 'vue/types/vue' {
  interface Vue {
    $accessor: typeof accessorType
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $accessor: typeof accessorType
  }
}

declare module '@vue' {
  // provide typings for `this.$store`
  interface ComponentOptions {
    $store: Store<RootState>
  }
}
