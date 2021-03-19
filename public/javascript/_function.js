/*-------------- liens _js --------------*/
// Variables
import * as module from "./_variables.js";


// function

// minilogo
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      module.minilogo.classList.remove("d-lg-none")
    } else {
      module.minilogo.classList.add("d-lg-none")
      
    }
})

// modal
window.onclick = function(event) {
    if (event.target == module.modal) {
    module.modal.style.display = "none";
    }
}