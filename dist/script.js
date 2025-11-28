const docsagree = document.getElementById('col')
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn.addEventListener("click", () => {
    menu.classList.toggle('hidden');
    menuBtn.classList.toggle('fa-close')
    menuBtn.classList.toggle('fa-bars')
});


var swiper = new Swiper(".swiper", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    slidesPerView: 1,
    breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
});