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
    stepsModal.classList.add('none')
    yay.classList.add('none')
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

  let stepsModal = document.querySelector('.stepsModal')
  let stepsM = document.querySelector('.steps')
  let yay = document.querySelector('.yayModal')

  function steps() {
      modal.classList.add('none')
      stepsModal.classList.remove('none')
      stepsM.classList.add('transition')
      onLoad()
  }

  function yayOpen() {
      yay.classList.remove('none')
      stepsModal.classList.add('none')
  }

 
  function place() {
      modalPlace.classList.remove('placeBid')
  }


  /*Progress*/
  function onLoad() {
    let  progressBar = 
      new progressBar.Circle('#progress', {
        color: 'red',
        strokeWidth: 10,
        duration: 2000, // milliseconds
        easing: 'easeInOut'
      });
  
    progressBar.animate(0.63); // percent
  };
