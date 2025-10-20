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
    
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
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
