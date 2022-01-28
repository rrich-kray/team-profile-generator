const writeFile = require('../utils/generateFile')

// const normalize = (fullName) => fullName.split(' ').forEach(name => name = name[0] + name.substring(1))

const generateCards = (arrMgr, arrEng, arrInt) => {
    let cardData = '';

    for (i = 0; i < arrMgr.length; i++) {
        // managerSection += 'cardInfo'
        let card = `
    
        <div class="card">
            <div class="card-header flex-column a-center j-center">
                <h1 class="j-self-start">${arrMgr[i].getName()}</h1>
                <div class="position-container flex-row a-center j-center">
                    <img src="../assets/images/manager.svg" height='100' width='100'>
                    <h2 class="position flex-row a-center j-center">Manager<h2>
                </div>
            </div>
            <div class="card-body flex-column a-center j-center">
                <div class="card-row">ID: ${arrMgr[i].getId()}</div>
                <div class="card-row">Email: ${arrMgr[i].getEmail()}</div>
                <div class="card-row">Office Number: ${arrMgr[i].getOffice()}</div>
            </div>
        </div>
    
        `
        cardData += card;
    }

    for (i = 0; i < arrEng.length; i++) {
        let card = `
    
        <div class="card">
            <div class="card-header flex-column a-center j-center">
                <h1 class="j-self-start">${arrEng[i].getName()}</h1>
                <div class="position-container flex-row a-center j-center">
                    <img src="../assets/images/engineer.svg" height='100' width='100'>
                    <h2 class="position flex-row a-center j-center">Engineer<h2>
                </div>
            </div>
            <div class="card-body flex-column a-center j-center">
                <div class="card-row">ID: ${arrEng[i].getId()}</div>
                <div class="card-row">Email: ${arrEng[i].getEmail()}</div>
                <div class="card-row">GitHub Address: ${arrEng[i].getGit()}</div>
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
                <h1 class="j-self-start">${arrInt[i].getName()}</h1>
                <div class="position-container flex-row a-center j-center">
                    <img src="../assets/images/intern.svg" height='100' width='100'>
                    <h2 class="position flex-row a-center j-center">Intern<h2>
                </div>
            </div>
            <div class="card-body flex-column a-center j-center">
                <div class="card-row">ID: ${arrInt[i].getId()}</div>
                <div class="card-row">Email: ${arrInt[i].getEmail()}</div>
                <div class="card-row">School: ${arrInt[i].getSchool()}</div>
            </div>
        </div>
    
        `
        cardData += card
            // managerSection += 'cardInfo'
    }

    writeFile(cardData)
}

module.exports = generateCards