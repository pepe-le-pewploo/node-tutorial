const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt' );

// default 64kb
// lasat buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', {highWaterMark: 9000})
// const stream = createReadStream('./content/big.txt', {encoding: 'utf8'})

stream.on('data', (chunk) => {
  console.log(chunk);
})

stream.on('error', (err) => console.log(err));