"use strict";

$(function () {
  $('.header__button').magnificPopup();
  $('.call-form__phone').inputmask("+7 (999) 999-99-99"); //section design gallery

  $('.design__gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Загрузка изображения #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image

    },
    image: {
      tError: '<a href="%url%">Изображение #%curr%</a> не загружено.' // titleSrc: function (item) {
      //   return item.el.attr('title') + '';
      // }

    }
  });
});
var burger = document.querySelector('.header__burger');
var header = document.querySelector('.header');
var burgerSpan = document.querySelector('.header__burger span');
var body = document.querySelector('body');

function toggleClass(inp, out, cl) {
  inp.addEventListener('click', function () {
    out.classList.toggle(cl);
  });
}

toggleClass(burger, header, 'active');
toggleClass(burger, burgerSpan, 'active');
toggleClass(burger, body, 'lock'); //Проверка конфиденциальности

var formButton = document.querySelector('.form__button');
var formCheckbox = document.getElementById('form__checkbox');
var form = document.querySelector('#popup');
toggleClass(formCheckbox, formButton, 'active');

formCheckbox.onchange = function () {
  formButton.disabled = !this.checked;
};

var formWrapper = document.querySelector('.form__wrapper');
var formDone = document.querySelector('.form__done');
var formDoneButton = document.querySelector('.form__done-button');
formButton.addEventListener('click', function (e) {
  e.preventDefault();
  formWrapper.classList.add('hide');
  document.querySelector('.header__button').setAttribute('disabled', 'disabled');
  formDone.classList.remove('hide');
});
var topWrapper = document.querySelector('.top-wrapper');
var topWrapperStandart = document.querySelector('.top-wrapper.standart');
var standartCount = 1;
var topCount = 0; //Главная slider

document.addEventListener('DOMContentLoaded', function () {
  if (topWrapper) {
    setInterval(function () {
      topCount++;
      if (topCount == 3) topCount = 0;
      topWrapper.style.background = "url(img/top/top-bg-".concat(topCount, ".jpg) center/cover no-repeat");
    }, 2000);
  }
}); //standart slider

document.addEventListener('DOMContentLoaded', function () {
  if (topWrapperStandart) {
    setInterval(function () {
      standartCount++;
      if (standartCount == 4) standartCount = 1;
      topWrapperStandart.style.background = "url(img/top/top-bg-".concat(standartCount, ".jpg) center/cover no-repeat");
    }, 2000);
  }
});