const fs = require('fs')

// async read file
// fs.readFile('path', optional encoding, call back function)
fs.readFile('test.txt', 'utf-8', (err, data) => {
    if (err) throw err
    
    console.log(data)
})

const content = 'hilakathamafiliya'
fs.writeFile('newfile.txt', content, err => {
  if (err) throw err
  console.log('saved')
})




fs.appendFile('newfile.txt', '\n dhurandhar.', err => {
  if (err) throw err;
  console.log('appended');
});

fs.readFile('newfile.txt', 'utf-8', (err, data)=>{
    if (err) throw err
    console.log('after appending \n', data)
})

