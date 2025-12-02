const swiper = new Swiper('.swiper', {
    grabCursor: true,
    speed: 1000,
    loop: true,
    // pauseOnMouseOver: true,
    autoplay: { delay: 5000 },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
});

const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector('.chevron-icon');

        // Close other accordions
        document.querySelectorAll('.accordion-content').forEach(c => {
            if (c !== content) {
                c.style.maxHeight = null;
            }
        });

        document.querySelectorAll('.chevron-icon').forEach(i => {
            if (i !== icon) {
                i.style.transform = "rotate(0deg)";
            }
        });

        // Toggle selected accordion
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            icon.style.transform = "rotate(0deg)";
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            icon.style.transform = "rotate(180deg)";
        }
    });
});
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden')
    menuBtn.classList.toggle('fa-close')
    menuBtn.classList.toggle('fa-bars')
});