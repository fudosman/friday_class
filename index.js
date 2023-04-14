const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your first name? ', (firstName) => {
  rl.question('Tell me a little about yourself: ', (details) => {
    const essay = `\nHi, my name is ${firstName}. ${details}.\nI am excited to learn Node.js and build amazing applications!`;

    // Write essay to file
    fs.writeFile('welcome.txt', essay, (err) => {
      if (err) throw err;
      console.log('Essay saved to file!');

      // Read file and output to console
      fs.readFile('welcome.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);

        // Close readline interface
        rl.close();
      });
    });
  });
});
