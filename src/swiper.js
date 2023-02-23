var swiper = new Swiper(".mySwiper", {
    spaceBetween: 15,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 2,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      375: {
        slidesPerView: 3,
        spaceBetween: 0,
      },

      490: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },

  });
