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
                    <h2 class="position flex-row a-center j-center">${arrMgr[i].getRole()}<h2>
                </div>
            </div>
            <div class="card-body flex-column a-center j-center">
                <div class="card-row">ID: ${arrMgr[i].getId()}</div>
                <div class="card-row">Email: <a class="email" href="mailto:${arrMgr[i].getEmail()}" target="_blank">${arrMgr[i].getEmail()}</a></div>
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
                    <h2 class="position flex-row a-center j-center">${arrEng[i].getRole()}<h2>
                </div>
            </div>
            <div class="card-body flex-column a-center j-center">
                <div class="card-row">ID: ${arrEng[i].getId()}</div>
                <div class="card-row">Email: <a class="email" href="mailto:${arrEng[i].getEmail()}" target="_blank">${arrEng[i].getEmail()}</a></div>
                <div class="card-row">GitHub Address: <a class="github" href="${arrEng[i].getGit()}" target="_blank">${arrEng[i].getGit()}</a></div>
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
                    <h2 class="position flex-row a-center j-center">${arrInt[i].getRole()}<h2>
                </div>
            </div>
            <div class="card-body flex-column a-center j-center">
                <div class="card-row">ID: ${arrInt[i].getId()}</div>
                <div class="card-row">Email:<a class="email" href="mailto:${arrInt[i].getEmail()}" target="_blank">${arrInt[i].getEmail()}</a></div>
                <div class="card-row">School: ${arrInt[i].getSchool()}</div>
            </div>
        </div>
    
        `
        cardData += card
            // managerSection += 'cardInfo'
    }
}

module.exports = generateCards

// One thing is why the generate cards is 
// Not have the cards template just return card data, and then that way they're not tied together. 
// Make another function inside index.js that runs the generatePage in the correct files, so that functionality is in index.js 