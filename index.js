const generateCard = content => {
    let html = `
    
    <div class="card">
        <div class="card-header flex-row a-center j-center"></div>
        <div class="card-body flex-column a-center j-center">
            <div class="card-row">${}</div>
            <div class="card-row">${}</div>
            <div class="card-row">${}</div>
        </div>
    </div>

    `
    generatePage(html)
}

const generatePage = content => {
    return `

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <div class="grid-container">${content}</div> 
    </body>
    </html>

    `
}