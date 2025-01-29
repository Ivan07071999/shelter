
const openPopUp = document.querySelector('.butt_pets2');
const closePopUpButton = document.querySelector('.close');
const popUpJennifer = document.querySelector('.popUpJennifer');
const hamburgerMenu = document.querySelector('.menu__btn');
const navigation = document.querySelector('.header_navigation')

const scrollController = {
   disablesScroll() {
      document.body.style.cssText = `
      overflow: hidden;
      `
   },
   enabledScroll() {
      document.body.style.cssText = ''
   },
}




function handlerOpenPopup() {
    popUpJennifer.classList.remove("hidden")
    scrollController.disablesScroll()
}

openPopUp.addEventListener('click', handlerOpenPopup)

popUpJennifer.addEventListener('click', (event) => {
    if(event.target.classList.contains('popUpJennifer')) {
      scrollController.enabledScroll()
        popUpJennifer.classList.toggle('hidden')
    }
 })

 closePopUpButton.addEventListener('click', () => {
   scrollController.enabledScroll()
    popUpJennifer.classList.toggle('hidden')
 })


 const openPopUpButtonKat = document.querySelector('.butt_pets')
 const closePopUpButtonKat = document.querySelector('.closeKatrineButt')
 const popUpKatrine = document.querySelector('.popUpKatrine')

 openPopUpButtonKat.addEventListener('click', () => {
    popUpKatrine.classList.toggle('hiddenKatrine')
    scrollController.disablesScroll()
 })

 popUpKatrine.addEventListener('click', (event) => {
   scrollController.enabledScroll()
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
    scrollController.disablesScroll()
 })

 popUpWoody.addEventListener('click', (event) => {
    if(event.target.classList.contains('popUpWoody')) {
      scrollController.enabledScroll()
        popUpWoody.classList.toggle('hiddenWoody')
    }
 })

 closePopUpButtonWoody.addEventListener('click', () => {
    popUpWoody.classList.toggle('hiddenWoody')
    scrollController.enabledScroll()
 })