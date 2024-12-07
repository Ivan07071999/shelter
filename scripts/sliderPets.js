  const cardsContainer = document.querySelector('.cards_container')
  let petsCards = document.querySelectorAll('.pets_card')
const buttonFirstSlide = document.querySelector('.batt1')
const buttonPrevSlide = document.querySelector('.batt2')
const buttonCountSlide = document.querySelector('.batt3')
const buttonNextSlide = document.querySelector('.batt4')
const buttonLastSlide = document.querySelector('.batt5')

const cardArray = Array.from(petsCards)
const buffer = Array.from(petsCards)
   
buttonLastSlide.addEventListener('click', () => {
    
     while (cardsContainer.firstChild) {
        cardsContainer.removeChild(cardsContainer.firstChild);
      }
       for (let i = cardArray.length-1; i >=0; i--) {
       cardsContainer.appendChild(cardArray[i])
        
     }
})

buttonNextSlide.addEventListener('click', () => {
     const cardsContainer = document.querySelector('.cards_container')
  let petsCards = document.querySelectorAll('.pets_card')
     
       for (let i = 0; i <= petsCards.length-6; i++) {
       cardsContainer.appendChild(petsCards[i] )  
     } 
})

buttonFirstSlide.addEventListener('click', () => {
    
     while (cardsContainer.firstChild) {
        cardsContainer.removeChild(cardsContainer.firstChild);
      }
       for (let i = 0; i < cardArray.length; i++) {
       cardsContainer.appendChild(cardArray[i])
        
     }
})

buttonPrevSlide.addEventListener('click', () => {
      const cardsContainer = document.querySelector('.cards_container')
  let petsCards = document.querySelectorAll('.pets_card')
    
       for (let i = 0; i <= petsCards.length-7; i++) {
       cardsContainer.appendChild(petsCards[i]  )
        
     }
})

