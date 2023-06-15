
let products_box = document.querySelectorAll(".products__box")

let header = document.querySelector(".header")

let socials_card_icon_play = document.querySelectorAll(".socials__card-icon-play")

let socials_card_video_item = document.querySelectorAll(".socials__card-video-item")

let socials_card_pic = document.querySelectorAll(".socials__card-pic")

let header_burger = document.querySelector(".header__burger")

let header_nav_first = document.querySelector(".header__nav_first")

let header_close = document.querySelector(".header__close")





for (let i = 0; i < products_box.length; i++) {

    products_box[i].addEventListener("click", function (event) {

        products_box.forEach(function (element) {
            element.classList.remove("products__box_active")
            element.classList.add("products__box_before")
        })

        if (event.target.classList.contains("products__box_before") || event.target.parentNode.classList.contains("products__box_before")) {
            this.classList.remove("products__box_before")
            this.classList.add("products__box_active")
        }

    })
}


(function () {

    let header = document.querySelector("header")

    window.onscroll = function()  {
        if (window.pageYOffset > 50) {
            header.classList.add("header_active")
        }

        else {
            header.classList.remove("header_active")
        }

    }

}())


for (let i = 0; i < socials_card_icon_play.length; i++) {
    socials_card_icon_play[i].addEventListener("click", playVideo)
}

header_burger.addEventListener("click", burgerOpen)
header_close.addEventListener("click", burgerClose)


function playVideo() {
    let currentIndex = Array.from(socials_card_icon_play).indexOf(this)

    this.classList.add("socials__card-icon-play_active")
    this.parentNode.querySelector(".socials__card-pic").classList.add("socials__card-pic_active")

    let src = this.parentNode.dataset.src

    console.log(this.parentNode)
    this.parentNode.insertAdjacentHTML("afterbegin", `<iframe class="socials__card-video-item" src=${src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`)

}

function burgerOpen() {
    header_nav_first.classList.add("header__nav_first-active")
}

function burgerClose() {
    header_nav_first.classList.remove("header__nav_first-active")
}










// Scroll to anchors
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);
        burgerClose();
    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());



let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);





