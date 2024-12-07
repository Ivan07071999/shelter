const sliderPets = document.querySelector('.cardSlider')
const arrowButtonLeft = document.querySelector('.button_arrow')
const arrowButtonRight = document.querySelector('.button_arrow2')
const slides = document.querySelectorAll('.slide')



arrowButtonRight.addEventListener('click', (event) => {
  const sliderPets = document.querySelector('.cardSlider')
  const slides = document.querySelectorAll('.slide')


for (let i = slides.length-3; i >= 0; i--) {
 sliderPets.appendChild(slides[i])  
 
    
}

})

arrowButtonLeft.addEventListener('click', () => {
  const sliderPets = document.querySelector('.cardSlider')
  const slides = document.querySelectorAll('.slide')
  
  for (let i = 0; i <= slides.length-2; i++ ) {
    sliderPets.appendChild(slides[i])
    
  }
})

