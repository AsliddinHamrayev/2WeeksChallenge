let burger = document.querySelector('.hamburger')
let nav = document.querySelector('.header-right')
let close = document.querySelector('.close')
let modalPlace = document.querySelector('.modalPlace')

let menu = document.querySelector('.menu')

burger.addEventListener('click', () => {
    nav.classList.remove('nav-responsive')
});

close.addEventListener('click', () => {
    nav.classList.add('nav-responsive')
})

function openModal() {
    menu.classList.toggle('menu-none')
}

let modal = document.querySelector('.modal')

function purchase() {
    modal.classList.remove('none')
}

function closeModal() {
    modal.classList.add('none')
    modalPlace.classList.add('placeBid')
}

let tabs = document.querySelectorAll('.discover__btn') 

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(tab => {
        tab.classList.remove('active')
      })
      tab.classList.add('active')
    })
  })



 
  function place() {
      modalPlace.classList.remove('placeBid')
  }
