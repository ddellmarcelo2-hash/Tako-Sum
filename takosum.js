let menuButton = document.getElementById('menu-button');
let navlinkWrapper = document.getElementById('nav-link');

menuButton.addEventListener('click' , () => {
    navlinkWrapper.classList.toggle('show');
});

let home = document.querySelector('a:first-child');
let heroContent = document.querySelector('.hero-paragraph');

home.addEventListener('click', () => {
    heroContent.classList.add('animate');
    setTimeout(()=>{
    heroContent.classList.remove('animate');
},1000);
    
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('animate');
        }
    });
});
let images = document.querySelectorAll('img');
let productCards = document.querySelectorAll('.products-card');
productCards.forEach(productCard => {
    observer.observe(productCard);
});
images.forEach(image => {
    observer.observe(image);
});

