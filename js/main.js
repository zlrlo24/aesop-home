// main.js

const swiper = new Swiper('.main-visual .swiper', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true, 
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: '.swiper-pagination',
        clickable:true
    }
});
// mobile
new Swiper('.main-visual-m .swiper', {
    direction: 'horizontal',
    centeredSlides: true,
    loop: true, 
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: '.swiper-pagination'
    }
});
new Swiper('.bestseller .swiper', {
    slidesPerView:4,
    loop: true, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
new Swiper('.bestseller-m .swiper', {
    slidesPerView:1,
    loop: true, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
new Swiper('.season-m .swiper', {
    slidesPerView:1,
    loop: true, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


// scrollMagic
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
    new ScrollMagic
    .Scene({
        triggerElement:spyEl,
        triggerHook:.8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


// Mobile Toggle
const toggleBtn = document.querySelector('#gnb-toggle-btn');
const gnb = document.querySelector('.gnb');
let togglegnb = false;
toggleBtn.addEventListener('click',function(){
    togglegnb = !togglegnb
    if(togglegnb) {
        gnb.classList.add('on');
    } else {
        gnb.classList.remove('on');
    }
});

// to-top
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
    if(window.scrollY > 600){
        gsap.to(toTopEl, .2, {
            x:0
        })
    } else {
        gsap.to(toTopEl, .2, {
            x:100
        })
    }
}, 300));

toTopEl.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
});