// Global Variables //---------------------------------------------------------------
const featureElement = document.getElementById('feature-button')
const featureMenu = document.querySelector('.drop-down-features')

const arrowUpFeatures = document.querySelector('.features-arrow-up')
const arrowDownFeatures = document.querySelector('.features-arrow-down')
const arrowUpCompany = document.querySelector('.company-arrow-up')
const arrowDownCompany = document.querySelector('.company-arrow-down')
const arrowUpFeaturesHamburgerUp = document.querySelector('.hamburger-features-arrow-up')
const arrowDownFeaturesHamburgerDown = document.querySelector('.hamburger-features-arrow-down')
const arrowUpCompanyHamburgerUp = document.querySelector('.hamburger-company-arrow-up')
const arrowDownCompanyHamburgerDown = document.querySelector('.company-hamburger-arrow-down')

const companyElement = document.getElementById('company-button')
const companyMenu = document.querySelector('.drop-down-company')

const hamburgerElement = document.querySelector('.hamburger')
const hamburgerMenu = document.querySelector('.hamburger-menu-container')
const hamburgerBackground = document.getElementById('background')
const hamburgerFeaturesbutton = document.getElementById('features-hamburger-button')
const hamburgerFeaturesUL = document.querySelector('.features-hamburger')

const closeButton = document.querySelector('.close-menu')

const companyHamburgerButton = document.getElementById('company-hamburger-button')
const companyHamburgerUL = document.querySelector('.company-hamburger')



// Event Listeners //----------------------------------------------------------------
// Open Features section
featureElement.addEventListener('click', openFeaturesMenu)
featureElement.addEventListener('focusout', () => {
    featureMenu.classList.add('hide')
    arrowUpFeatures.classList.add('hide')
    arrowDownFeatures.classList.remove('hide')
})

// Open Company Section
companyElement.addEventListener('click', openCompanyMenu)
companyElement.addEventListener('focusout', () => {
    companyMenu.classList.add('hide')
    arrowUpCompany.classList.add('hide')
    arrowDownCompany.classList.remove('hide')
})

// Hamburger Menu Handling
hamburgerElement.addEventListener('click', openHamburgerMenu)

// Close Hamburger Menu on click
closeButton.addEventListener('click', () => {
    hamburgerBackground.classList.add('hide')
    hamburgerMenu.classList.add('hide')
})

hamburgerFeaturesbutton.addEventListener('click', () => {
    hamburgerFeaturesUL.classList.toggle('hide')
    arrowDownFeaturesHamburgerDown.classList.toggle('hide')
    arrowUpFeaturesHamburgerUp.classList.toggle('hide')
})

companyHamburgerButton.addEventListener('click', () => {
    companyHamburgerUL.classList.toggle('hide')
    arrowUpCompanyHamburgerUp.classList.toggle('hide')
    arrowDownCompanyHamburgerDown.classList.toggle('hide')
    
})

// Functions //-----------------------------------------------------------------------
function openFeaturesMenu() {
    featureMenu.classList.toggle('hide')
    arrowUpFeatures.classList.toggle('hide')
    arrowDownFeatures.classList.toggle('hide')
}

function openCompanyMenu() {
    companyMenu.classList.toggle('hide')
    arrowUpCompany.classList.toggle('hide')
    arrowDownCompany.classList.toggle('hide')
}

function openHamburgerMenu () {
    hamburgerMenu.classList.remove('hide')
    hamburgerBackground.classList.remove('hide')
}