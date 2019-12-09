/*
 * Remove query strings (and fragments) from stacktraces
 */
const { map } = require('@bugsnag/core/lib/es-utils')

module.exports = {
  init: (client) => {
    client.addOnError(event => {
      event.stacktrace = map(event.stacktrace, frame => ({ ...frame, file: strip(frame.file) }))
    })
  }
}

const strip = module.exports._strip = str =>
  typeof str === 'string'
    ? str.replace(/\?.*$/, '').replace(/#.*$/, '')
    : str
