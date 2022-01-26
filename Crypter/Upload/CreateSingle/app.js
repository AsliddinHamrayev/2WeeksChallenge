let burger = document.querySelector('.hamburger')
let nav = document.querySelector('.header-right')
let close = document.querySelector('.close')
let preview = document.querySelector('#preview')
let right = document.querySelector('.main-content-right')
let closePreview = document.querySelector('#close')
let modal = document.querySelector('.modal')
let create = document.querySelector('#create')
let closeModal = document.querySelector('#closeModal')

burger.addEventListener('click', () => {
    nav.classList.remove('nav-responsive')
});

close.addEventListener('click', () => {
    nav.classList.add('nav-responsive')
})

preview.addEventListener('click', () => {
    right.classList.remove('responsive-card')
    window.StyleSheet.overflow = 'hidden'
})

closePreview.addEventListener('click', () => {
    right.classList.add('responsive-card')
})

closeModal.addEventListener('click', () => {
    modal.classList.add('responsive-modal')
})

create.addEventListener('click', () => {
    modal.classList.remove('responsive-modal')
})