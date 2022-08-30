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
new Swiper('.bestseller .swiper', {
    slidesPerView:4,
    loop: true, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})


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
})


// Toggle
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


// $(function(){
//     $('#gnb-toggle-btn').click(function(){
//         $('#gnb').toggleClass('on');
//     })
  
//     let num = 0; 
  
  
//     $('.btn-group .next').on('click', function(){
//         num++;
//         if(num > 3) {
//             return
//         }
//         $('.gallery  img').removeClass('on');
//         $('.gallery  img').eq(num).addClass('on');
//     })
  
  
//     $('.btn-group .prev').on('click', function(){
//         num--;
//         if(num < 0) {
//             return
//         }
//         $('.gallery  img').removeClass('on');
//         $('.gallery  img').eq(num).addClass('on');
//     })
//   });

