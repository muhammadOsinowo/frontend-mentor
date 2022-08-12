var  Card2 = document.querySelector('.card-2')
var Card = document.querySelector('.card')
var submitButton = document.getElementById("submit")
var rateAgain = document.getElementById("rate-again")
var span = document.getElementById('span')
var btns = document.querySelectorAll('.btn-container button')

// Array.from(btns).forEach(btn => {
//     btn.addEventListener('click', e => {
//         const rating = e.target.textContent
//         span.textContent = rating
//         Card2.classList.remove('hide')
//         Card.classList.add('hide')
//     })
// })

submitButton.addEventListener("click", () => {
    Card.classList.add('hide')
    Card2.classList.remove("hide")
})

rateAgain.addEventListener("click", () => {
    Card.classList.remove('hide')
    Card2.classList.add("hide")
})

btns.forEach((rate) => {
    rate.addEventListener("click", () =>{
        span.innerHTML = rate.innerHTML
    })
})
