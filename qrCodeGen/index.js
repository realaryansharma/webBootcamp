import inquirer from 'inquirer';
import qr from 'qr-image'
import fs from "fs"



inquirer
.prompt([
    {
      name: "URL",
      message: "Type your URL:",
      type: "input"
    }
  ])
  .then((answers) => {
    const URL = answers.URL
    var qr_svg = qr.image(URL);
    qr_svg.pipe(fs.createWriteStream('QR.png'));
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log(error)
    } else {
      // Something else went wrong
    }
  });
 
    