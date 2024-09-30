const {readFile, writeFile} = require('fs') //destructuring

console.log('Start');

readFile('./content/first.txt', 'utf8', (err,result) => {
  if(err) {
    console.log(err)
    return;
  }
  //console.log(result);
  const first = result;
  readFile('./content/second.txt', 'utf8', (err,result) => {
    if(err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      './content/third-async.txt',
      `Here is the result: ${first}, ${second}`,
      {flag: 'a'},
      (err, result) => {
        if(err) {
          console.log(err)
          return;
        }
        //console.log(result);
        console.log('Done with this task');
      }
    )
  })
})

console.log('starting the next task');