const Honeybadger = require('@honeybadger-io/js')

Honeybadger.configure({
  apiKey: process.env.HONEYBADGER
})
