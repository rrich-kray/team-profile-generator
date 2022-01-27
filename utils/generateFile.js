const fs = require('fs');

const writeFile = (cardData) => {
    return new Promise((resolve, reject) => {
        let content = `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../assets/css/styles.css">
    <title>Team Profile Generator</title>
</head>
<body>
    <hero class="hero h-25vh flex-row j-center a-center">
        <h1>Team Profile Generator</h1>
    </hero>
    <div class="grid-container w-100">${cardData}</div>
</body>
</html>

`
        fs.writeFile('./dist/index.html', content, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            })
        })
    })
}

module.exports = writeFile

// split this into a couple functions


// Testing: // test card generation, functions that work with output of user input. Test as much as is reasonable
// Write tests that first fail, then write code so that the tests pass. 
// Some organizations will have automated testing of automated processes in place so that pull requests cannot be completed until all tests have passed
// Make functions as single purpose as possible - these are easier to test.