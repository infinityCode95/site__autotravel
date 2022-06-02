"use strict";


// ! Greeting

const greetingWindow = document.querySelector('.greeting');
const greetingClose = document.querySelector('.greeting__close');

function showGreeting() {
     greetingWindow.classList.add('greeting__active');
}

setTimeout(showGreeting, 1000);

greetingClose.addEventListener('click', () => {
     greetingWindow.classList.remove('greeting__active');
});



// ! Menu

const menuBody = document.querySelector('.navheader__body');
const showMenuIcon = document.querySelector('.navheader__adaptive-icon');

showMenuIcon.addEventListener('click', () => {
     menuBody.classList.toggle('navheader__body-active');
     showMenuIcon.classList.toggle('navheader__adaptive-icon-active');
})



// ! Slider

const slides = document.querySelectorAll('.contentgallery__img');
const btns = document.querySelectorAll('.contentgallery__btn');

let counter = 0;


const activeSLide = (numberSlide) => {
     slides.forEach(slide => {
         slide.classList.remove('contentgallery__img-active');
     });
 
     slides[numberSlide].classList.add('contentgallery__img-active');
}


const activeBtn = (numberBtn) => {
     btns.forEach(btn => {
         btn.classList.remove('contentgallery__btn-active');
     });
 
     btns[numberBtn].classList.add('contentgallery__btn-active');
}


btns.forEach((btn, indexBtn) => {
     btn.addEventListener('click', function (e) {
          counter = indexBtn;
          activeSLide(counter);
          activeBtn(counter);
     })
})
 