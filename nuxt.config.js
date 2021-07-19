export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Leitura do Lugar',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'A plataforma online leitura do lugar é um resultado do trabalho desenvolvido com objetivo de' +
          ' propor uma nova abordagem teórico-metodológica de leitura do território, sendo essa a forma proposta para a' +
          ' representação e o acesso a essa leitura.'
      },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/base.css'
  ],

  loading: {
    color: '#d37012',
    height: '5px'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
    debug: process.env.NODE_ENV !== 'production'
  },

  proxy: {
    '/api/': process.env.NODE_ENV === 'production' ? 'https://admin.leituradolugar.arq.br' : 'http://localhost:3030'
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      name: 'Leitura do Lugar',
      description: 'Plataforma Leitura do Lugar, criada por PRAXIs - UFMG.',
      theme_color: '#d37012',
      lang: "pt-BR",
      nativeUI: true
    },
    manifest: {
      lang: 'pt-BR'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
