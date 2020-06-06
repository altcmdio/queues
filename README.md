# Queues

> A _simple_ utility to quickly add [Bull queues](https://optimalbits.github.io/bull/) to your project.

## Qickstart

### Install

```
npm install altcmdio/queues
```

### Getting Started

```javascript
const Queues = require('altcmdio/queues')

// The bare minimum; create one queue and assume Redis is running locally on port 6379.
const qs1 = Queues({ names: [ 'foo' ] })

// Define a connection string to your Redis instance.
const qs2 = Queues({ names: [ 'foo', 'bar' ], redis: 'redis://myredis.org:6379' })

// Provide options that will be passed directly to Bull when the queues are created.
const qs3 = Queues({ names: [ 'foo', 'bar' ], bull: { prefix: 'worker' } })

console.log(qs1.queue('foo').keyPrefix, qs1.queue('foo').name) // => bull, foo
console.log(qs2.queue('foo').keyPrefix, qs2.queue('foo').name) // => bull, foo
console.log(qs3.queue('foo').keyPrefix, qs3.queue('foo').name) // => worker, foo

/**
 * Queues API
 */

// .list() - will return the names of all of the queues as an array of strings.
console.log(qs2.list()) // => [ 'foo', 'bar' ]

// .all() - will return an array of queue instances.
console.log(qs2.all()) // => [ Queue {...}, Queue {...} ]

// .queue(<name>) - will return a single queue instance for the named queue.
console.log(qs2.queue('foo')) // => Queue {...}

// Requesting a queue that does not exist will throw an error.
console.log(qs2.queue('baz')) // => Error: Queue 'baz' does not exist.
```

## Additional Information

There really isn't any ... once you have an instance of a queue, it's just a raw instance of a [Bull](https://optimalbits.github.io/bull/) queue. See their documentation for everything you need to know about how to use the queue :wink:.

The factory accepts an options object that recognises 3 properties:
* `names:`, which should be an array of strings to be used as the names for the queues that get created - _will default to an empty array if not specified_.
* `redis:`, which should be a valid redis connection string in the form `redis://user:password@redis-service.com:6379` - _will default to `redis://localhost:6379` if not specified_.
* `bull:` which should be an object containing valid [Bull queue configuration options](https://github.com/OptimalBits/bull/blob/develop/REFERENCE.md#queue) - _defaults to `{}` if not specified_.

If something goes wrong ... expect an un-handled :boom: ... I did say it was _simple_ :wink:

## LICENSE

[ISC](LICENSE.md)
