let burger = document.querySelector('.hamburger')
let nav = document.querySelector('.header-right')
let close = document.querySelector('.close')
let content = document.querySelector('.contents-none')

burger.addEventListener('click', () => {
    nav.classList.remove('nav-responsive')
});

close.addEventListener('click', () => {
    nav.classList.add('nav-responsive')
})

let items = [
    {
        name: 'Amazing digital art',
        id: '01'
    },
    {
        name: '1Amazing digital art',
        id: '02'
    },
    {
        name: '2Amazing digital art',
        id: '03'
    },
    {
        name: '3Amazing digital art',
        id: '04'
    },
    {
        name: '4Amazing digital art',
        id: '05'
    },
    {
        name: '5Amazing digital art',
        id: '06'
    },
    {
        name: '6Amazing digital art',
        id: '07'
    },
    {
        name: '7Amazing digital art',
        id: '08'
    },
    {
        name: '8Amazing digital art',
        id: '09'
    },
]
let itemsDiv = document.querySelector('.bid-flex')


let searchBtn = document.querySelector('.search__icon')
let search = document.querySelector('#searchItem')



let arr = []

function searchItem() {

    items.forEach((item) => {
        if (filterByName(item)) {
            arr.push(item)
        }
    })
        if (arr.length == 0) {
        notFound()
    }
    items = []
    items = arr
    displayItems()
}

function filterByName(item) {
    return item.name.match(search.value)
}

function notFound() {
    content.classList.add('none-content')
    document.querySelector('.not-found-flex').classList.remove('not-found-none')
}


function displayItems() {
    console.log(items);
    itemsDiv.innerHTML = ''


    for (let item of items) {

        let div = document.createElement('div')
        div.classList.add('bid-card')
        div.innerHTML = `
        <a href="../Item/item.html">
        <img src="../images/fuu-j-Lo7venJ_ywM-unsplash 1.png" alt="" class="bid__img">
        <div class="bid-flex">
        <h4 class="bid-card__title">${item.name}</h4>
        <p class="price__txt">2.45 ETH</p>
        </div>
        <div class="bid-flex">
        <img src="../images/avatars.png" alt="" class="avatars">
        <h4 class="bid-card__title">3 in stock</h4>
        </div>
        <hr>
        <div class="bid-flex">
        <div class="bid-flex-text">
        <i class="bid__icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
        d="M14.1667 0C14.6269 0 15 0.373096 15 0.833333V2.5C15 2.96024 14.6269 3.33333 14.1667 3.33333C13.7064 3.33333 13.3333 2.96024 13.3333 2.5V0.833333C13.3333 0.373096 13.7064 0 14.1667 0Z"
        fill="#777E91" />
        <path
        d="M14.1667 10C14.6269 10 15 10.3731 15 10.8333V15.8333C15 16.2936 14.6269 16.6667 14.1667 16.6667C13.7064 16.6667 13.3333 16.2936 13.3333 15.8333V10.8333C13.3333 10.3731 13.7064 10 14.1667 10Z"
        fill="#777E91" />
        <path
        d="M5.83333 3.33333C6.29357 3.33333 6.66667 3.70643 6.66667 4.16667V10.8333C6.66667 11.2936 6.29357 11.6667 5.83333 11.6667C5.3731 11.6667 5 11.2936 5 10.8333V4.16667C5 3.70643 5.3731 3.33333 5.83333 3.33333Z"
        fill="#777E91" />
        <path
        d="M5.83333 15C6.29357 15 6.66667 15.3731 6.66667 15.8333V19.1667C6.66667 19.6269 6.29357 20 5.83333 20C5.3731 20 5 19.6269 5 19.1667V15.8333C5 15.3731 5.3731 15 5.83333 15Z"
        fill="#777E91" />
        <path fill-rule="evenodd" clip-rule="evenodd"
        d="M11.6668 4.1665C11.6668 2.78579 12.7861 1.6665 14.1668 1.6665C15.5475 1.6665 16.6668 2.78579 16.6668 4.1665V9.1665C16.6668 10.5472 15.5475 11.6665 14.1668 11.6665C12.7861 11.6665 11.6668 10.5472 11.6668 9.1665V4.1665ZM15.0002 4.1665V9.1665C15.0002 9.62674 14.6271 9.99984 14.1668 9.99984C13.7066 9.99984 13.3335 9.62674 13.3335 9.1665V4.1665C13.3335 3.70627 13.7066 3.33317 14.1668 3.33317C14.6271 3.33317 15.0002 3.70627 15.0002 4.1665Z"
        fill="#777E91" />
        <path fill-rule="evenodd" clip-rule="evenodd"
        d="M3.3335 12.4998C3.3335 11.1191 4.45278 9.99984 5.8335 9.99984C7.21421 9.99984 8.3335 11.1191 8.3335 12.4998V14.1665C8.3335 15.5472 7.21421 16.6665 5.8335 16.6665C4.45278 16.6665 3.3335 15.5472 3.3335 14.1665V12.4998ZM6.66683 12.4998V14.1665C6.66683 14.6267 6.29373 14.9998 5.8335 14.9998C5.37326 14.9998 5.00016 14.6267 5.00016 14.1665V12.4998C5.00016 12.0396 5.37326 11.6665 5.8335 11.6665C6.29373 11.6665 6.66683 12.0396 6.66683 12.4998Z"
        fill="#777E91" />
        </svg>
        </i>
                                                
        <p class="bid__text">Highest bid <span>0.001 ETH</span></p>
        </div>
                                                
        <p class="bid__text">New bid 🔥</p>
        </div>
        </a>
            `
        itemsDiv.appendChild(div)
    }

}


displayItems()



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