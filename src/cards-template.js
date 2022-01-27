const writeFile = require('../utils/generateFile')

const generateCards = (arrMgr, arrEng, arrInt) => {
    let cardData = '';

    for (i = 0; i < arrMgr.length; i++) {
        // managerSection += 'cardInfo'
        let card = `
    
        <div class="card">
            <div class="card-header flex-column a-center j-center">
                <h1 class="j-self-start">${arrMgr[i].name}</h1>
                <div class="position-container flex-row">
                    <img src="../assets/images/manager.svg"
                    <h2 class="position">Manager<h2>
                </div>
            </div>
            <div class="card-body flex-column a-center j-center">
                <div class="card-row">ID: ${arrMgr[i].id}</div>
                <div class="card-row">Email: ${arrMgr[i].email}</div>
                <div class="card-row">Office Number: ${arrMgr[i].office}</div>
            </div>
        </div>
    
        `
        cardData += card;
    }

    for (i = 0; i < arrEng.length; i++) {
        let card = `
    
        <div class="card">
            <div class="card-header flex-column a-center j-center">
                <h1 class="j-self-start">${arrEng[i].name}</h1>
                <div class="position-container flex-row">
                    <img src="../assets/images/engineer.svg"
                    <h2 class="position">Engineer<h2>
                </div>
            </div>
            <div class="card-body flex-column a-center j-center">
                <div class="card-row">ID: ${arrEng[i].id}</div>
                <div class="card-row">Email: ${arrEng[i].email}</div>
                <div class="card-row">Office Number: ${arrEng[i].git}</div>
            </div>
        </div>
    
        `
        cardData += card
            // managerSection += 'cardInfo'
    }

    for (i = 0; i < arrInt.length; i++) {
        let card = `
    
        <div class="card">
            <div class="card-header flex-column a-center j-center">
                <h1 class="j-self-start">${arrInt[i].name}</h1>
                <div class="position-container flex-row">
                    <img src="../assets/images/intern.svg"
                    <h2 class="position">Intern<h2>
                </div>
            </div>
            <div class="card-body flex-column a-center j-center">
                <div class="card-row">ID: ${arrInt[i].id}</div>
                <div class="card-row">Email: ${arrInt[i].email}</div>
                <div class="card-row">Office Number: ${arrInt[i].school}</div>
            </div>
        </div>
    
        `
        cardData += card
            // managerSection += 'cardInfo'
    }

    writeFile(cardData)
}



module.exports = generateCards