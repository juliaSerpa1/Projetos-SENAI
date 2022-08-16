var button = document.getElementById('myButton')
var bsButton = new bootstrap.Button(button)

function verificacao(){

    var login = document.getElementById('login').value
    var senha = document.getElementById('senha').value

    if(login.value =="admin" && senha.value == "admin"){
        document.getElementById("sucesso").style.display='none';
        document.getElementById("incorreto").style.display='block';
    }else{
        document.getElementById("sucesso").style.display='block';
        document.getElementById("incorreto").style.display='none';
    }
}

// module.exports = verificacao;     
    












//carrosel
// const slides = document.querySelectorAll('[data-js="carousel__item"]')
// const nextButton = document.querySelector('[data-js="carousel__button--next"]')
// const prevButton = document.querySelector('[data-js="carousel__button--prev"]')

// const lastSlideIndex = slides.length - 1
// let currentSlideIndex = 0

// const manipulateSlidesClasses = correctSlideIndex => {
//     slides.forEach(slide => {
//         slide.classList.remove('carousel__item--visible')
//     })

//     slides[correctSlideIndex].classList.add('carousel__item--visible')
// }

// nextButton.addEventListener('click', () => {
//     const correctSlideIndex = currentSlideIndex === lastSlideIndex
//         ? currentSlideIndex = 0
//         : ++currentSlideIndex
    
//     manipulateSlidesClasses(correctSlideIndex)
// })

// prevButton.addEventListener('click', () => {
//     const correctSlideIndex = currentSlideIndex === 0
//         ? currentSlideIndex = lastSlideIndex
//         : --currentSlideIndex
    
//     manipulateSlidesClasses(correctSlideIndex)
// })

// setInterval(() => {
//     const correctSlideIndex = currentSlideIndex === lastSlideIndex
//         ? currentSlideIndex = 0
//         : ++currentSlideIndex
    
//     manipulateSlidesClasses(correctSlideIndex)
// }, 5000)
