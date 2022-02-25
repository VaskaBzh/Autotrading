$(function () {
    
    const swiper = new Swiper('.swiper-first', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        // Navigation arrows
        navigation: {
          nextEl: '.benefit__swiper__button-next',
          prevEl: '.benefit__swiper__button-prev',
        },
      });

      const swiper = new Swiper('.swiper-second', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    
});