const {readFileSync, writeFileSync} = require('fs') //destructuring

console.log('start');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

//console.log(first, second);

writeFileSync('./content/third-sync.txt', `Here is the third: ${first}, ${second}`);
// writeFileSync('./content/third-sync.txt', `Hello world`); // overwrite everything
writeFileSync(
 './content/third-sync.txt',
  `. 
Hello World`,
   { flag: 'a'}
 ); //append, not overwrite

 console.log('done with this task');
 console.log('Starting the next one');