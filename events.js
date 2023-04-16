

const event = require('events')


const myevent = new event.EventEmitter()

myevent.on('message', (data)=>{
  console.log('message: ',data)
})

myevent.emit('message', 'imp.msg')



