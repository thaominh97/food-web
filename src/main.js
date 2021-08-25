let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");
let search_form = document.querySelector("#search-form");
let search_icon = document.querySelector("#search-icon");
let search_btn = document.querySelector("#search-btn");


menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};
search_icon.onclick = () => {
    search_icon.classList.toggle('fa-times');
    search_form.classList.toggle('active');
}

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });