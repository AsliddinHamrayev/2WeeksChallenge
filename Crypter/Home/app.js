let burger = document.querySelector('.hamburger')
let nav = document.querySelector('.header-right')
let close = document.querySelector('.close')

burger.addEventListener('click', () => {
    nav.classList.remove('nav-responsive')
});

close.addEventListener('click', () => {
    nav.classList.add('nav-responsive')
})



const select = document.querySelectorAll('.selectBtn');
const option = document.querySelectorAll('.option');
let index = 1;

select.forEach(a => {
	a.addEventListener('click', b => {
		const next = b.target.nextElementSibling;
		next.classList.toggle('toggle');
		next.style.zIndex = index++;
	})
})

option.forEach(a => {
	a.addEventListener('click', b => {
		b.target.parentElement.classList.remove('toggle');
		
		const parent = b.target.closest('.select').children[0];
		parent.setAttribute('data-type', b.target.getAttribute('data-type'));
		parent.innerText = b.target.innerText;
	})
})  


/*Countdown*/

function CounDown() {
	const second = 1000,
		  minute = second * 60,
		  hour = minute * 60,
		  day = hour * 24;

	let today = new Date(),
		dd = String(today.getDate()).padStart(2, "0"),
		mm = String(today.getMonth() + 1).padStart(2, "0"),
		yyyy = today.getFullYear(),
		nextYear = yyyy + 1,
		dayMonth = "05/30/",
		birthday = dayMonth + yyyy;
	
	today = mm + "/" + dd + "/" + yyyy;
	if (today > birthday) {
	  birthday = dayMonth + nextYear;
	}
	//end
	
	const countDown = new Date(birthday).getTime(),
		x = setInterval(function() {    
  
		  const now = new Date().getTime(),
				distance = countDown - now;
  
			document.getElementById("hours").innerHTML = Math.floor((distance % (day)) / (hour)),
			document.getElementById("minutes").innerHTML = Math.floor((distance % (hour)) / (minute)),
			document.getElementById("seconds").innerHTML = Math.floor((distance % (minute)) / second);
		}, 0)
	};

	CounDown()

	/**Tabs0 */

const tabs = document.querySelectorAll('.discover__btn')


tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    let target = document.querySelector(tab.dataset.tabTarget)
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
  })
})

/*Swiper*/

const swiper = new Swiper('.sellers-flex', {
	// Optional parameters
	direction: 'horizontal',
	loop: false,
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '#next-btn',
	  prevEl: '#previous-btn',
	},

	slidesPerView: 5,

	breakpoints: {
		1024: {
		  slidesPerView: 4,
		},

		376: {
			slidesPerView: 1,
		}
		
	  }
  });