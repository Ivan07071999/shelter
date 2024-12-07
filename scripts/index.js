
const openPopUp = document.querySelector('.butt_pets2');
const closePopUpButton = document.querySelector('.close');
const popUpJennifer = document.querySelector('.popUpJennifer');

function handlerOpenPopup() {
    popUpJennifer.classList.remove("hidden")
}

openPopUp.addEventListener('click', handlerOpenPopup)

popUpJennifer.addEventListener('click', (event) => {
    if(event.target.classList.contains('popUpJennifer')) {
        popUpJennifer.classList.toggle('hidden')
    }
 })

 closePopUpButton.addEventListener('click', () => {
    popUpJennifer.classList.toggle('hidden')
 })


 const openPopUpButtonKat = document.querySelector('.butt_pets')
 const closePopUpButtonKat = document.querySelector('.closeKatrineButt')
 const popUpKatrine = document.querySelector('.popUpKatrine')

 openPopUpButtonKat.addEventListener('click', () => {
    popUpKatrine.classList.toggle('hiddenKatrine')
 })

 popUpKatrine.addEventListener('click', (event) => {
    if(event.target.classList.contains('popUpKatrine')) {
        popUpKatrine.classList.toggle('hiddenKatrine')
    }
 })

 closePopUpButtonKat.addEventListener('click', () => {
    popUpKatrine.classList.toggle('hiddenKatrine')
 })

 const openPopUpButtonWoody = document.querySelector('.butt_pets3')
 const closePopUpButtonWoody = document.querySelector('.closeWoodyButt')
 const popUpWoody = document.querySelector('.popUpWoody')

 openPopUpButtonWoody.addEventListener('click', () => {
    popUpWoody.classList.toggle('hiddenWoody')
 })

 popUpWoody.addEventListener('click', (event) => {
    if(event.target.classList.contains('popUpWoody')) {
        popUpWoody.classList.toggle('hiddenWoody')
    }
 })

 closePopUpButtonWoody.addEventListener('click', () => {
    popUpWoody.classList.toggle('hiddenWoody')
 })