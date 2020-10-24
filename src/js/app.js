'use strict';

/* modal */
const modalWraper = document.querySelector('.overlay_modal');
const openModal = document.querySelector('.btn-reservation');
const closeModal = document.querySelector('.close-modal');

openModal.addEventListener('click', function () {
    modalWraper.classList.add('open');
});

closeModal.addEventListener('click', function () {
    modalWraper.classList.remove('open');
});
/* modal end*/

/* humb */
const humb = document.querySelector('.humb');
const header = document.querySelector('.header-page');
const closeMenu = document.querySelector('.close-menu');

humb.addEventListener('click', function () {
    header.classList.add('open-menu')
});

closeMenu.addEventListener('click', function () {
    header.classList.remove('open-menu')
});
/* humb end */

/* show posts */

const btnShowPosts = document.querySelector('.btn-show-posts');
const posts = document.querySelector('.posts');

btnShowPosts.addEventListener('click', function () {

    if (posts.classList.contains('show-posts')) {
        posts.classList.remove('show-posts');
        posts.classList.add('out-posts');
    } else {
        posts.classList.remove('out-posts');
        posts.classList.add('show-posts');
    }

});

/* show posts end*/

/* slider */
const slider = document.querySelectorAll('.slide');
const navSlider = document.querySelector('.nav-slider');

for(let i = 0; i < slider.length; i++) {
    if(i === 0) {
        navSlider.insertAdjacentHTML('beforeEnd', '<button class="nav-slider__item nav-slider__item_active"></button>');
    } else {
        navSlider.insertAdjacentHTML('beforeEnd', '<button class="nav-slider__item"></button>');
    }
}

const navItems = document.querySelectorAll('.nav-slider__item');

for(let i = 0; i < slider.length; i++) {

    navItems[i].addEventListener('click', function () {

        for(let i = 0; i < slider.length; i++) {
            navItems[i].classList.remove('nav-slider__item_active');
            slider[i].classList.remove('slide-show');
        }

        this.classList.add('nav-slider__item_active');
        slider[i].classList.add('slide-show');
    })

}
/* slider end */

