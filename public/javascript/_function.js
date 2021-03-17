// function

// Variables
import * as module from "./_variables.js";


// Export des Functions
// slide de base
let currentSlide = 0

// deplacement des slides
function nextSlide() {
  // masque le showing
  module.slides[currentSlide].className = 'slide'
  // deplace le slide en suivant
  currentSlide = (currentSlide + 1) % module.slides.length
  // le showing precedent devient visible
  module.slides[currentSlide].className = 'slide showing'
}
function prevSlide() {
  // masque le showing
  module.slides[currentSlide].className = 'slide'
  // deplace le slide en precedent
  currentSlide = (currentSlide - 1) % module.slides.length
  if (currentSlide == -1) {
    currentSlide = module.slides.length - 1
  }
  // le showing suivant devient visible
  module.slides[currentSlide].className = 'slide showing'
}
// event des buttons
module.nextButton.addEventListener('click', () => {
  nextSlide()
})
module.prevButton.addEventListener('click', () => {
  prevSlide()
})

