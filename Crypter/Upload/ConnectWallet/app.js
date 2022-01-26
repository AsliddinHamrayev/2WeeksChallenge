let burger = document.querySelector('.hamburger')
let nav = document.querySelector('.header-right')
let close = document.querySelector('.close')
let qrBtn = document.querySelectorAll('.content-card')
let rightBtn = document.querySelector('.right__btn')

let img = document.querySelector('.qr__img')
let right = document.querySelector('.content-right')
let terms = document.querySelector('.terms')

burger.addEventListener('click', () => {
    nav.classList.remove('nav-responsive')
});

close.addEventListener('click', () => {
    nav.classList.add('nav-responsive')
})

qrBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        img.classList.add('none')
        right.classList.remove('none')
        btn.classList.toggle('border')
        terms.classList.add('none')
    })
})

rightBtn.addEventListener('click', () => {
    terms.classList.remove('none')
    right.classList.add('none')
});