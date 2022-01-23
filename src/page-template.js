

const generatePage = (arrMgr, arrEng, arrInt) => {
    let html = `

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <div class="grid-container">${generateCard(content)}</div> 
    </body>
    </html>

    `

    for (i=0; i<arrMgr.length; i++) {
        // managerSection += 'cardInfo'
        let cardContainer = document.querySelector('.grid-container')
        let card = `
    
        <div class="card">
            <div class="card-header flex-row a-center j-center">
                <h1>${arrMgr.name}</h1>
            </div>
            <div class="card-body flex-column a-center j-center">
                <div class="card-row">Name: </div>
                <div class="card-row">Email: </div>
                <div class="card-row">Office Number: </div>
            </div>
        </div>
    
        `
        cardContainer += card;
    }

    for(i=0; i<arrEng.length; i++) {
        managerSection += 'cardInfo'
    }

    for(i=0; i<arrInt.length; i++) {
        managerSection += 'cardInfo'
    }


}

// const managerCards = (arrMgr) => {
//     let managerSection = ``;

//     let cardInfo = `
    
//     <div class="card">
//         <div class="card-header flex-row a-center j-center"></div>
//         <div class="card-body flex-column a-center j-center">
//             <div class="card-row">Name: </div>
//             <div class="card-row">Email: </div>
//             <div class="card-row">Office Number: </div>
//         </div>
//     </div>

//     `

//     for(i=0; i<arrMgr.length; i++) {
//         managerSection += 'cardInfo'
//     }

//     return managerSection
// }

// const engineerCards = (arrEng) => {
//     let managerSection = ``

//     let cardInfo = `
    
//     <div class="card">
//         <div class="card-header flex-row a-center j-center"></div>
//         <div class="card-body flex-column a-center j-center">
//             <div class="card-row">Name: </div>
//             <div class="card-row">Email: </div>
//             <div class="card-row">GitHub: </div>
//         </div>
//     </div>

//     `

//     for(i=0; i<arrEng.length; i++) {
//         managerSection += 'cardInfo'
//     }

//     return managerSection
// }

// const internCards = (arrInt) => {
//     let managerSection = ``

//     let cardInfo = `
    
//     <div class="card">
//         <div class="card-header flex-row a-center j-center"></div>
//         <div class="card-body flex-column a-center j-center">
//             <div class="card-row">${arrInt.name}</div>
//             <div class="card-row">${arrInt.email}</div>
//             <div class="card-row">${arrInt.school}</div>
//         </div>
//     </div>

//     `

//     for(i=0; i<arrInt.length; i++) {
//         managerSection += 'cardInfo'
//     }

//     return managerSection
// }

// const generateCard = content => {
//     return `
    

//     `
// }

module.exports = generatePage