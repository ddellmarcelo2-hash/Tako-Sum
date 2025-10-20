let menuButton = document.getElementById('menu-button');
let navlinkWrapper = document.getElementById('nav-link');
let links = document.querySelectorAll('a');
const viewportWidth = window.innerWidth;
if(viewportWidth<768){
   
    links.forEach(link => {
        link.addEventListener('click', () => {
            navlinkWrapper.classList.toggle('show');
        });
    });

}
menuButton.addEventListener('click', () => {
    navlinkWrapper.classList.toggle('show');
});

let home = document.querySelector('a:first-child');
let heroContent = document.querySelector('.hero-paragraph');

home.addEventListener('click', () => {
    heroContent.classList.add('animate');
    setTimeout(() => {
        heroContent.classList.remove('animate');
    }, 1000);

});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        } else {
            entry.target.classList.remove('animate');
        }
    });
});
let images = document.querySelectorAll('p');
let productCards = document.querySelectorAll('.products-card');
productCards.forEach(productCard => {
    observer.observe(productCard);
});
images.forEach(image => {
    observer.observe(image);
});


var swiper = new Swiper(".takoyaki-swiper", {
    spaceBetween: 0,
    loop: 'true',
    
    
    slidesPerView: 3,
    navigation: {
        nextEl: "#takoyaki-next",
        prevEl: "#takoyaki-prev",
    },
    pagination: {
        el: "#takoyaki-pagination",
        clickable: 'true',
    },
     breakpoints: {
        // when window width is >= 320px
        320: {
        slidesPerView: 1,
        spaceBetween: 20
        },
        640: {
        slidesPerView: 2,
        spaceBetween: 20
        },
        991:{
            slidesPerView: 3,
            spaceBetween: 0
        }

    }
});
var swiper = new Swiper(".dimsum-swiper", {
    
    loop: 'true',
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    slidesPerView: 3,
    navigation: {
        nextEl: "#dimsum-next",
        prevEl: "#dimsum-prev",
    },
    pagination: {
        el: "#dimsum-pagination",
        clickable: 'true',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
        slidesPerView: 1,
        spaceBetween: 20
        },
        640: {
        slidesPerView: 2,
        spaceBetween: 20
        },
        991:{
            slidesPerView: 3,
            spaceBetween: 0
        }

    }
});
var swiper = new Swiper(".other-foods-swiper", {
    
    loop: 'true',
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    slidesPerView: 3,
    navigation: {
        nextEl: "#other-foods-next",
        prevEl: "#other-foods-prev",
    },
    pagination: {
        el: "#otherfoods-pagination",
        clickable: 'true',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
        slidesPerView: 1,
        spaceBetween: 20
        },
        640: {
        slidesPerView: 2,
        spaceBetween: 20
        },
        991:{
            slidesPerView: 3,
            spaceBetween: 0
        }

    }
});

// Function to load and display products
async function loadProducts() {
    try {
        const response = await fetch('product.json');
        const data = await response.json();
        const productsContainerTakoyaki = document.querySelector('#takoyariWrapper');
        const productsContainerDimsum = document.querySelector('#dimsumWrapper');
        const productsContainerRiceMeal = document.querySelector('#riceMealWrapper');

        data.products.forEach(product => {
            const productCard = createProductCard(product);
            const slideDiv = document.createElement('div');
            slideDiv.className = 'swiper-slide';
            slideDiv.appendChild(productCard);
            // Map categories to containers (only 3 categories)
            if (product.category === "Takoyaki") {
                productsContainerTakoyaki && productsContainerTakoyaki.appendChild(slideDiv);
            } else if (product.category === "Dimsum") {
                productsContainerDimsum && productsContainerDimsum.appendChild(slideDiv);
            } else if (product.category === "Rice Meal") {
                productsContainerRiceMeal && productsContainerRiceMeal.appendChild(slideDiv);
            }
        });
    } catch (error) {
        console.error('Error loading products:', error);
    }
}

// Function to create a product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'products-card';

    card.innerHTML = `
        <img class="products-image" src="${product.image}" alt="${product.name}">
        <div class="products-content">
            <h3>${product.name}</h3>
            <p class="products-paragraph">${product.description}</p>
            
            <a href="#" class="products-button">Buy now</a>
        </div>
    `;

    // Add click event listener to the Buy Now button
    const buyButton = card.querySelector('.products-button');
    buyButton.addEventListener('click', (e) => {
        e.preventDefault();
        handleBuyNow(product);
    });

    return card;
}

// Function to handle Buy Now button click
function handleBuyNow(product) {
    // You can implement your purchase logic here
    console.log(`Buying ${product.name} for $${product.price}`);
    // Add your cart functionality or redirect to checkout page
}

// Load products when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadProducts);
