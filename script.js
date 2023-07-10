
const features = document.getElementById('features')
const company = document.getElementById('company')
const dropFeat = document.getElementById('feat')
const dropComp = document.getElementById('comp')

let hamburguer = document.querySelector('.burguer');
let navMobile = document.querySelector('#nav-mobile')
let closeNav = document.querySelector('.close')

features.addEventListener('click', () => {
    features.classList.toggle('toggle-arrow');
    dropFeat.classList.toggle('toggle-feat');
})

company.addEventListener('click', () => {
    company.classList.toggle('toggle-arrow');
    dropComp.classList.toggle('toggle-comp');
})


hamburguer.addEventListener('click', () =>{
    navMobile.style = 'display:flex'
})

closeNav.addEventListener('click', () =>{
    navMobile.style = 'display:none'
})

