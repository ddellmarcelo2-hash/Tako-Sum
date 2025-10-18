let menuButton = document.getElementById('menu-button');
let navlinkWrapper = document.getElementById('nav-link');

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
    spaceBetween: 40,
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
});
var swiper = new Swiper(".dimsum-swiper", {
    spaceBetween: 40,
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
});
var swiper = new Swiper(".rice-meal-swiper", {
    spaceBetween: 40,
    loop: 'true',
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    slidesPerView: 3,
    navigation: {
        nextEl: "#rice-meal-next",
        prevEl: "#rice-meal-prev",
    },
    pagination: {
        el: "#ricemeal-pagination",
        clickable: 'true',
    },
});
