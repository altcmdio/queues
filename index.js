/**
 *
 */

const Bull = require('bull')

module.exports = Queues = (names = [], redis = 'redis://127.0.0.1:6379') => {
  const db = redis + '/0'
  const queues = names.map(name => new Bull(name, db))

  /** */
  const list = () => queues.map(q => q.name)

  /** */
  const all = () => queues

  /** */
  const queue = name => {
    if (names.includes(name))
      return queues.filter(q => q.name === name)[0]
    throw new Error(`Queue '${name}' does not exist.`)
  }

  return {
    list,
    all,
    queue
  }
}
