const buttonFirst = document.querySelector('.batt1')
const buttonPrev = document.querySelector('.batt2')
const buttonCount = document.querySelector('.batt3')
const buttonNext = document.querySelector('.batt4')
const buttonLast = document.querySelector('.batt5')


let countPage = 0
let currentPage = 1

function buttonNextClick() {
    if (currentPage < 6) {
    currentPage += 1
    buttonCount.textContent = currentPage
    setStatusButton()
    buttonColorStatus()
}
}
buttonNext.addEventListener('click', buttonNextClick)

function buttonPrevClick() {
    
   if (currentPage > 1) {
    currentPage -=1
    buttonCount.textContent = currentPage
   }
 setStatusButton()
 buttonColorStatus()
}
buttonPrev.addEventListener('click', buttonPrevClick)

function buttonFirstClick() {
    currentPage = 1
    buttonCount.textContent = currentPage
    setStatusButton()
    buttonColorStatus()
   }
    
buttonFirst.addEventListener('click', buttonFirstClick)

function buttonLastClick() {
    currentPage = 6
    buttonCount.textContent = currentPage
    setStatusButton()
    buttonColorStatus()
 }
      
 buttonLast.addEventListener('click', buttonLastClick)


function setStatusButton() {
    if (currentPage === 1) {
        buttonFirst.setAttribute('disabled', true)
        buttonPrev.setAttribute('disabled', true)
    } else {
        buttonFirst.removeAttribute('disabled')
        buttonPrev.removeAttribute('disabled')
    }

    if (currentPage === 6) {
       buttonNext.setAttribute('disabled', true)
       buttonLast.setAttribute('disabled', true) 
    } else {
       buttonNext.removeAttribute('disabled')
       buttonLast.removeAttribute('disabled') 
    }
}    

setStatusButton()

function buttonColorStatus() {
      if (currentPage === 1) {
        buttonFirst.style.color = '#cdcdcd'
        buttonFirst.style.borderColor = '#cdcdcd'
        buttonFirst.style.backgroundColor = '#f1cdb3'
        buttonPrev.style.color = '#cdcdcd'
        buttonPrev.style.borderColor = '#cdcdcd'
        buttonPrev.style.backgroundColor = '#f1cdb3'
     } 
    else {
     buttonFirst.style.color = '#cdcdcd'
        buttonFirst.style.borderColor = '#cdcdcd'
        buttonFirst.style.backgroundColor = '#f6f6f6'
        buttonPrev.style.color = '#cdcdcd'
        buttonPrev.style.borderColor = '#cdcdcd'
        buttonPrev.style.backgroundColor = '#f6f6f6'
    }

      if (currentPage === 6) {
       buttonNext.style.color = '#cdcdcd'
        buttonNext.style.borderColor = '#cdcdcd'
        buttonNext.style.backgroundColor = '#f1cdb3'
        buttonLast.style.color = '#cdcdcd'
        buttonLast.style.borderColor = '#cdcdcd'
        buttonLast.style.backgroundColor = '#f1cdb3' 
     } else {
     buttonNext.style.color = '#cdcdcd'
        buttonNext.style.borderColor = '#cdcdcd'
        buttonNext.style.backgroundColor = '#f6f6f6'
        buttonLast.style.color = '#cdcdcd'
        buttonLast.style.borderColor = '#cdcdcd'
        buttonLast.style.backgroundColor = '#f6f6f6'   
     
      }
}

buttonColorStatus()

