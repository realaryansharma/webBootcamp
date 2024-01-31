const fs = require('fs');

const content = 'Some content!';

// fs.writeFile('check.txt', content, kuchB => {
//   if (kuchB) {
//     console.error(kuchB);
//   }
//   else {
//     console.log("file written successfully");
//   }
  
// });

fs.readFile('check.txt', 'utf8', (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log(data);
});