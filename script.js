const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },

    //Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },

        620: {
            slidesPerView: 2
        },

        768: {
            slidesPerView: 3
        },

        820: {
            slidesPerView: 2
        },

        1075: {
            slidesPerView: 3
        },

        1216: {
            slidesPerView: 4
        }
    }
  });