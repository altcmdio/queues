/**
 *
 */

const defaults = {
  names: [],
  redis: 'redis://127.0.0.1:6379',
  bull: {}
}

const Bull = require('bull')

module.exports = Queues = (o = {}) => {
  const { names, redis, bull } = { ...defaults, ...o }
  // if (!Array.isArray(names))
  //   throw new Error('Queue names should be provided as an array.')
  const db = redis + '/0'
  const queues = names.map(name => new Bull(name, db, bull))

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
