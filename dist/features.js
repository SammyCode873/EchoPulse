var swiper = new Swiper(".swiper", {
    loop: true,
    grabCursor: true,
    speed: 2000,
    centeredSlides: true,

    effect: "overflow",
    cubeEffect: {
        shadow: true,
        slideShadows: true,
    },

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    spaceBetween: 20,
    slidesPerView: 1,

    breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 1 },
    },
});
const docsagree = document.getElementById('col')


const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn.addEventListener("click", () => {
    menu.classList.toggle('hidden');
    menuBtn.classList.toggle('fa-close')
    menuBtn.classList.toggle('fa-bars')
});

const loader = document.getElementById("loader");

const clickable = document.querySelectorAll("button, a button, a[href]");

clickable.forEach(item => {
    item.addEventListener("click", (e) => {
        // If link has a hash like # or is empty, ignore
        // const parentLink = item.closest("a");
        // if (parentLink && parentLink.getAttribute("href") === "#") return;

        // Show loader
        loader.style.display = "flex";

        // If it’s a link, allow navigation normally
        // Otherwise hide after delay so it doesn't stay forever
        if (!parentLink && item.getAttribute("type") !== "submit") {
            setTimeout(() => {
                loader.style.display = "none";
            }, 2000);
        }
    });
});








// const statusEl = document.getElementById('status');

// async function checkConnection() {
//     try {
//         // Ping a small, fast file from a reliable source
//         const controller = new AbortController();
//         setTimeout(() => controller.abort(), 3000); // timeout in 3s

//         await fetch("https://www.google.com/favicon.ico", {
//             method: "HEAD",
//             mode: "no-cors",
//             signal: controller.signal
//         });

//         statusEl.textContent = "You're online";
//         statusEl.style.color = "green";
//     } catch (err) {
//         statusEl.textContent = "You're offline";
//         statusEl.style.color = "red";
//     }
// }

// // Check every 2 seconds
// setInterval(checkConnection, 2000);

// // Run immediately
// checkConnection();


// const btn1 = document.getElementById('btn1')

// btn1.addEventListener("click", () => {
//     content.classList.add("block");
// })


