// Class
//carrousel 

let divs = document.getElementById('carousel-inner')
let div = divs.querySelectorAll('.divdiv')
let idx = 0


function run() {
    idx++

    if (idx >= div.length - 3) {
        idx = 0
    }

    divs.style.transform = `translateX(${-idx * 25}%)`
    
    setTimeout(run, 2000)

    if (window.innerWidth <= 1000) {
        divs.style.transform = `translateX(${-idx * 100}%)`
    } else {
        divs.style.transform = `translateX(${-idx * 25}%)`
    }
}

run()





// Export des class
