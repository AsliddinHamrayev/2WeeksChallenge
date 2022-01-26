let burger = document.querySelector('.hamburger')
let nav = document.querySelector('.header-right')
let close = document.querySelector('.close')
let notification = document.querySelector('.modal-notification')

let profile = document.querySelector('.modal-profile')
let profileBtn = document.querySelector('#profile')

let notificationBtn = document.querySelectorAll('#notification')

burger.addEventListener('click', () => {
    nav.classList.remove('nav-responsive')
});

close.addEventListener('click', () => {
    nav.classList.add('nav-responsive')
})


notificationBtn.forEach((el) => {
    el.addEventListener('click', () => {
        notification.classList.toggle('none')
    })
})

profileBtn.addEventListener('click', () => {
    profile.classList.toggle('none')
})


/*Tabs*/

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    let target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
        // tabContents.forEach(tabContent => {
        // })
        tabContent.classList.add('tab-active')
    })

    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.remove('tab-active')
  })
})