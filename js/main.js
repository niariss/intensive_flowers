$(document).ready(function(){
  const flowersSlider = new Swiper('.flowers-slider', {
    // Optional parameters
    loop: true, 
    slidesPerView: 6,
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
     
      // when window width is >= 992px
      992: {
        slidesPerView: 6,
        spaceBetween: 40
      }
    }
  
})
  

  const reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    slidesPerView: 1,
    loop: true, 
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  }); 
});

$("#review-1").on('click', function() {

  $.fancybox.open([
    {
      src  : 'https://vplate.ru/images/article/orig/2018/09/goluboj-svadebnyj-buket-vybor-dizajn-i-sochetanie-s-drugimi-ottenkami-10.jpg',
      opts : {
        caption : 'First caption',
        thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
      }
    },
    {
      src  : 'https://vplate.ru/images/article/orig/2018/09/goluboj-svadebnyj-buket-vybor-dizajn-i-sochetanie-s-drugimi-ottenkami-10.jpg',
      opts : {
        caption : 'Second caption',
        thumb   : 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
      }
    }
  ], {
    loop : true,
    thumbs : {
      autoStart : true
    }
  });

});


let more = document.querySelector('.more');
let flowers = document.querySelector('.flower-none');
let hideMore = document.querySelector('.hide-more');
let counterButton = document.querySelectorAll('.counter-button');
let counterInput = document.querySelectorAll('.counter-input');


/*for (count of counterButton)
count.onclick = function () {
console.log(count.textContent)
}*/

function openFlowers() {
  flowers.style.display = "flex";
  hideMore.style.display = "block";
  more.style.display = "none"
  
}

function clouseFlowers() {
  flowers.style.display = "none";
  hideMore.style.display = "none";
  more.style.display = "";
}

 more.addEventListener('click', openFlowers)
 hideMore.addEventListener('click', clouseFlowers)
 //counterButton.addEventListener('click', countFlowers)

