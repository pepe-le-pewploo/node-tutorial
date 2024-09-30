const path = require('path');

console.log(path.sep) //prints platform specific separator

const filePath = path.join('\content','subfolder', 'test.txt') // '\content\ dileo same output

console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);