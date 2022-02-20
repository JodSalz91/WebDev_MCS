const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  // using "ratio" endpoints
  breakpoints: {
    '@0.75': {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    '@1.00': {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    '@1.50': {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  }
});