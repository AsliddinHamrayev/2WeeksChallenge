let burger = document.querySelector('.hamburger')
let nav = document.querySelector('.header-right')
let close = document.querySelector('.close')

burger.addEventListener('click', () => {
    nav.classList.remove('nav-responsive')
});

close.addEventListener('click', () => {
    nav.classList.add('nav-responsive')
})


let circles = document.querySelectorAll('.circle')

function Mark() {
    circles.forEach((circle) => {
        circle.classList.add('none-circle')
    })
}


let checkbox = document.getElementsByClassName('checkbox')

function Checked() {
    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].type == 'checkbox')
            checkbox[i].checked = true;
    }
}


function deSelect() {
    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].type == 'checkbox')
            checkbox[i].checked = false;

    }
}