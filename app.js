const {readFile, writeFile, read} = require('fs').promises;
// const utils = require('util');
// const readFilePromise = utils.promisify(readFile);
// const writeFilePromise = utils.promisify(writeFile);

// const getText = (path) => {
//   return new Promise((resolve,reject) => {
//     readFile(path, 'utf8', (err,result) => {
//       if(err) {
//         reject(err);
//       } else {
//         resolve(result);
//       }
//     })
//   })
// }

const getResult = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf-8');
    const second = await readFile('./content/second.txt', 'utf-8');
    await writeFile('./content/newFile.txt', `New Data:
      ${first}
      ${second}`, {flag: 'a'});
  
    console.log(first, second);
  } catch(error) {
    console.log(error);
  }
}

getResult();

// const getText = (path) => {
//   return new Promise((resolve,reject) => {
//     readFile(path, 'utf8', (err,result) => {
//       if(err) {
//         reject(err);
//       } else {
//         resolve(result);
//       }
//     })
//   })
// }

// const first = getText('./content/first.txt')

// first.then((data) => console.log(data)).catch((error) => console.log(error))


//---------------------------------


//const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// const start = async () => {
//   try {
//     const first = await readFile('./content/first.txt', 'utf8')
//     const second = await readFile('./content/second.txt', 'utf8')
//     await writeFile(
//       './content/result-mind-grenade.txt',
//       `THIS IS AWESOME : ${first} ${second}`,
//       { flag: 'a' }
//     )
//     console.log(first, second)
//   } catch (error) {
//     console.log(error)
//   }
// }

// start()

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }
// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))