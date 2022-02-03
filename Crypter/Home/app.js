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
		dayMonth = "02/03/",
		deadline = dayMonth + yyyy;
	
	today = mm + "/" + dd + "/" + yyyy;
	if (today > deadline) {
		deadline = dayMonth + nextYear;
	}
	//end
	
	const countDown = new Date(deadline).getTime(),
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

  });


  /*Items*/


  let items = [
	{
		class: 'blue',
		id: '1'
	},
	  {
		  class: 'green',
		  id: '2'
	  },
	  {
		class: 'red',
		id: '3'
	},
	{
		class: 'green',
		id: '4'
	},
	{
		class: 'blue',
		id: '5'
	},
	{
		class: 'red',
		id: '6'
	},
	{
		class: 'green',
		id: '7'
	},
	{
		class: 'red',
		id: '8'
	},
	{
		class: 'blue',
		id: '9'
	},
  ]

  let itemsDiv = document.querySelector('.swiper-wrapper')

  function displayItems() {

	for(items of items) {

		let div = document.createElement('div')
		div.classList.add('seller-card')
		div.classList.add('swiper-slide')
		div.innerHTML = `
		<div class="seller-card-header">
		<p class="seller__tag ${items.class}"><svg width="16" height="16"
					viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd"
						d="M10.6668 3.33333H5.3335C4.96531 3.33333 4.66683 3.63181 4.66683 4V6.66667C4.66683 8.50762 6.15921 10 8.00016 10C9.84111 10 11.3335 8.50762 11.3335 6.66667V4C11.3335 3.63181 11.035 3.33333 10.6668 3.33333ZM5.3335 2C4.22893 2 3.3335 2.89543 3.3335 4V6.66667C3.3335 9.244 5.42283 11.3333 8.00016 11.3333C10.5775 11.3333 12.6668 9.244 12.6668 6.66667V4C12.6668 2.89543 11.7714 2 10.6668 2H5.3335Z"
						fill="#FCFCFD" />
					<path fill-rule="evenodd" clip-rule="evenodd"
						d="M0.666504 5.3335C0.666504 4.22893 1.56193 3.3335 2.6665 3.3335H4.6665V8.66683H3.33317C1.86041 8.66683 0.666504 7.47292 0.666504 6.00016V5.3335ZM2.6665 4.66683H3.33317V7.3335C2.59679 7.3335 1.99984 6.73654 1.99984 6.00016V5.3335C1.99984 4.96531 2.29831 4.66683 2.6665 4.66683Z"
						fill="#FCFCFD" />
					<path fill-rule="evenodd" clip-rule="evenodd"
						d="M15.3332 5.3335C15.3332 4.22893 14.4377 3.3335 13.3332 3.3335H11.3332V8.66683H12.6665C14.1393 8.66683 15.3332 7.47292 15.3332 6.00016V5.3335ZM13.3332 4.66683H12.6665V7.3335C13.4029 7.3335 13.9998 6.73654 13.9998 6.00016V5.3335C13.9998 4.96531 13.7014 4.66683 13.3332 4.66683Z"
						fill="#FCFCFD" />
					<path
						d="M8.00016 10C7.63197 10 7.3335 10.2985 7.3335 10.6667V12.6667H6.00016C5.63197 12.6667 5.3335 12.9651 5.3335 13.3333C5.3335 13.7015 5.63197 14 6.00016 14H10.0002C10.3684 14 10.6668 13.7015 10.6668 13.3333C10.6668 12.9651 10.3684 12.6667 10.0002 12.6667H8.66683V10.6667C8.66683 10.2985 8.36835 10 8.00016 10Z"
						fill="#FCFCFD" />
				</svg>
			 #${items.id}</p>
		<div class="seller-icons">
			<i class="i__seller"><svg width="25" height="24" viewBox="0 0 25 24" fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd"
						d="M12.3999 4C10.4477 4 8.64807 4.161 7.20361 4.35177C5.90363 4.52346 4.92337 5.50372 4.75168 6.80371C4.56091 8.24816 4.3999 10.0478 4.3999 12C4.3999 13.9522 4.56091 15.7518 4.75168 17.1963C4.92337 18.4963 5.90363 19.4765 7.20361 19.6482C8.64806 19.839 10.4477 20 12.3999 20C14.3521 20 16.1517 19.839 17.5962 19.6482C18.8962 19.4765 19.8764 18.4963 20.0481 17.1963C20.2389 15.7518 20.3999 13.9522 20.3999 12C20.3999 10.0478 20.2389 8.24816 20.0481 6.80371C19.8764 5.50372 18.8962 4.52346 17.5962 4.35177C16.1517 4.16101 14.3521 4 12.3999 4ZM6.94174 2.36899C4.74495 2.65912 3.05903 4.34504 2.76889 6.54184C2.56944 8.05208 2.3999 9.94127 2.3999 12C2.3999 14.0587 2.56944 15.9479 2.76889 17.4582C3.05903 19.655 4.74495 21.3409 6.94174 21.631C8.45198 21.8305 10.3412 22 12.3999 22C14.4586 22 16.3478 21.8305 17.8581 21.631C20.0549 21.3409 21.7408 19.655 22.0309 17.4582C22.2304 15.9479 22.3999 14.0587 22.3999 12C22.3999 9.94127 22.2304 8.05208 22.0309 6.54184C21.7408 4.34504 20.0549 2.65912 17.8581 2.36899C16.3478 2.16953 14.4586 2 12.3999 2C10.3412 2 8.45198 2.16953 6.94174 2.36899Z"
						fill="#B1B5C4" />
					<path fill-rule="evenodd" clip-rule="evenodd"
						d="M12.3999 17C12.9522 17 13.3999 16.5523 13.3999 16V13H16.3999C16.9522 13 17.3999 12.5523 17.3999 12C17.3999 11.4477 16.9522 11 16.3999 11H13.3999V8C13.3999 7.44772 12.9522 7 12.3999 7C11.8476 7 11.3999 7.44772 11.3999 8V11H8.3999C7.84762 11 7.3999 11.4477 7.3999 12C7.3999 12.5523 7.84762 13 8.3999 13H11.3999V16C11.3999 16.5523 11.8476 17 12.3999 17Z"
						fill="#B1B5C4" />
				</svg>
			</i>
			<i class="i__seller"><svg width="25" height="24" viewBox="0 0 25 24" fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd"
						d="M17.3731 13.516C17.9249 13.494 18.3544 13.0287 18.3323 12.4769L18.142 7.71753C18.1211 7.19663 17.7036 6.77913 17.1827 6.75829L12.4233 6.56789C11.8715 6.54581 11.4062 6.97527 11.3842 7.52712C11.3621 8.07896 11.7915 8.54421 12.3434 8.56629L14.8206 8.6654L7.95037 15.5357C7.55984 15.9262 7.55984 16.5594 7.95037 16.9499C8.34089 17.3404 8.97406 17.3404 9.36458 16.9499L16.2348 10.0796L16.3339 12.5568C16.356 13.1086 16.8212 13.5381 17.3731 13.516Z"
						fill="#B1B5C4" />
				</svg>
			</i>
		</div>
	</div>
	
	<img src="../images/austin-wade-X6Uj51n5CE8-unsplash 1.png" alt="" class="sellers-card__img">
	
	<h1 class="sellers-card__name">Edd Harris</h1>
	<h1 class="sellers-card__price">2.456 <span>ETH</span></h1>
		`

		itemsDiv.appendChild(div)
	}

  }

  displayItems()


  const swiper2 = new Swiper('.discover-slider', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
  
	navigation: {
	  nextEl: '#next-discover',
	  prevEl: '#pre-discover',
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



  const
  range = document.getElementById('range'),
  tooltip = document.getElementById('tooltip'),
  setValue = ()=>{
	  const
		  newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
		  newPosition = 16 - (newValue * 0.32);
	  tooltip.innerHTML = `<span>${range.value} ETH</span>`;
	  tooltip.style.left = `calc(${newValue}% + (${newPosition}px))`;
	  document.documentElement.style.setProperty("--range-progress", `calc(${newValue}% + (${newPosition}px))`);
  };
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);