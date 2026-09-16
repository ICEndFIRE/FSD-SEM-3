const fs = require('fs');
fs.writeFileSync('example.txt', 'Hello, World!', 'utf8');
console.log ('Create File run successfully');
// const data = fs.readFileSync('example.txt', 'utf8');
// console.log('file content is:', data);

fs.appendFileSync('example.txt', '\n This is the new line');
console.log('Example File is appended');
fs.unlinkSync('student1.txt');