let burger = document.querySelector('.hamburger')
let nav = document.querySelector('.header-right')
let close = document.querySelector('.close')

burger.addEventListener('click', () => {
    nav.classList.remove('nav-responsive')
});

close.addEventListener('click', () => {
    nav.classList.add('nav-responsive')
})

let inputs = document.querySelectorAll('input')


function validate() {
    inputs.forEach((input) => {
        if(input.value === '') {
            input.classList.add('validate')
        }

    })
}

function clear() {
    inputs.forEach((input) => {
        input.value = null
    })
}

