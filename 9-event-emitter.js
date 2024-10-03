const EventEmitter = require('events')

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
  console.log(`data received ${name}, ${id}`);
});

customEmitter.on('response', () => {
  console.log('something else')
})

customEmitter.emit('response', 'john', 34) //all code synchronous , emit er order matters