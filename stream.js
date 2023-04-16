const stream = require('stream')

const { Readable } = stream

const inStream = new Readable({
  read () {
    console.log('read method being called.')
  }
})

inStream.push('Hey there.') // Pushing the data to the stream
inStream.push('whats going on!\n')

inStream.push(null) // Indicates that no more data is left in the stream

inStream.pipe(process.stdout)