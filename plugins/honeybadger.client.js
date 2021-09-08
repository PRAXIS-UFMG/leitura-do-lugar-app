import Vue from 'vue'
import HoneybadgerVue from '@honeybadger-io/vue'

const config = {
  apiKey: process.env.HONEYBADGER,
  environment: process.env.NODE_ENV,
  revision: process.env.GIT_REV
}

Vue.use(HoneybadgerVue, config)
