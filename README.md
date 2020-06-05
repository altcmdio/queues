# Queues

> A simple utility to help you spin up some [Bull](https://optimalbits.github.io/bull/) queues for your project quickly.

## Qickstart

### Install

`npm install altcmdio/queues`

### Use

```javascript
const Queues = require('altcmdio/queues')
const queues = Queues([ 'foo', 'bar' ], 'redis://localhost:6379')

console.log(queues.list())        // => [ 'foo', 'bar' ]
console.log(queues.all())         // => [ Queue {...}, Queue {...} ]
console.log(queues.queue('foo'))  // => Queue {...}
console.log(queues.queue('baz'))  // => Error: Queue 'baz' does not exist.
```

## Detail

There really isn't any ... once you have an instance of a queue, it's just a raw instance of a [Bull](https://optimalbits.github.io/bull/) queue. Their documentation will tell you everything you need to know about how to use the queue :wink:.

The factory accepts 2 arguments. The first is an array of strings defining the names of the queues you either want to spin up, or connect to. The second is the connection string used to establish the connection to Redis where your queues are hosted.

If you don't pass an array of queue names, it will assume an empty array.

If you don't pass a connection string, it will assume the connection string in the examples above.

If something goes wrong ... expect and un-handled :boom: ... I did say it was _simple_ :wink:

## LICENSE

[ISC](LICENSE.md)
