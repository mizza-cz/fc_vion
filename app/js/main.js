$(function () {
  $('select').styler();
  //presmerovani pomoci selectu
  $('.select__redirect').change(function () {
    location.href = $(this).val();
  });
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  // scroll button
  $('.footer__scroll-top').click(function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      1000,
    );
  });

  /// tabs
  $('.tabl-liga__wrapper .tabl-tabs__tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.tabl-liga__wrapper').find('.tabl__content').removeClass('active-tabl').hide();
    $('.tabl-liga__wrapper .tabl-tabs').find('.tabl-tabs__tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id)
      .addClass('active-tabl')
      .fadeIn();
    return false;
  });

  // header menu
  $('.menu__btn').on('click', function () {
    $('.menu__list').slideToggle();
  });
  $('.menu__list-item').on('click', function () {
    $('.header__menu-dropdown').slideToggle();
  });
  // slider
  $('.partners__slider').slick({
    dots: false,
    infinite: false,
    slidesToShow: 8,
    slidesToScroll: 8,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 1100,

        settings: {
          rows: 2,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 770,
        settings: {
          rows: 2,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
  // gallery
  $('.gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true,
    },
  });

  /// tabs game
  $('.game__wrapper .game-tabs__tab').on('click', function (event) {
    var id = $(this).attr('data-id');
    $('.game__wrapper').find('.game__tab').removeClass('tab-active').hide();
    $('.game__wrapper .game-tabs').find('.game-tabs__tab').removeClass('active');
    $(this).addClass('active');
    $('#' + id)
      .addClass('tab-active')
      .fadeIn();
    return false;
  });

  $('#lightgallery').on('click', function () {
    $(this).lightGallery({
      dynamic: true,
      dynamicEl: [
        // {
        //   src: '/images/gallery/1.jpg',
        //   thumb: '/images/gallery/1.jpg',
        //   subHtml: '<h4>39. kolo Topligy (Foto: Josef Poláček)',
        // },
        {
          src: 'images/gallery/1.jpg',
          thumb: 'images/gallery/1.jpg',
          subHtml: '<h4>39. kolo Topligy (Foto: Josef Poláček)',
        },
        {
          src: 'images/gallery/2.jpg',
          thumb: 'images/gallery/2.jpg',
          subHtml: '<h4>39. kolo Topligy (Foto: Josef Poláček)',
        },
        {
          src: 'images/gallery/3.jpg',
          thumb: 'images/gallery/3.jpg',
          subHtml: '<h4>39. kolo Topligy (Foto: Josef Poláček)',
        },
        {
          src: 'images/gallery/8.jpg',
          thumb: 'images/gallery/8.jpg',
          subHtml: '<h4>39. kolo Topligy (Foto: Josef Poláček)',
        },
        {
          src: 'images/gallery/4.jpg',
          thumb: 'images/gallery/4.jpg',
          subHtml: '<h4>39. kolo Topligy (Foto: Josef Poláček)',
        },
        {
          src: 'images/gallery/5.jpg',
          thumb: 'images/gallery/5.jpg',
          subHtml: '<h4>39. kolo Topligy (Foto: Josef Poláček)',
        },
        {
          src: 'images/gallery/6.jpg',
          thumb: 'images/gallery/6.jpg',
          subHtml: '<h4>39. kolo Topligy (Foto: Josef Poláček)',
        },
        {
          src: 'images/gallery/7.jpg',
          thumb: 'images/gallery/7.jpg',
          subHtml: '<h4>39. kolo Topligy (Foto: Josef Poláček)',
        },
      ],
    });
  });
});
(function () {
  'use strict';

  if ('object' !== typeof window.Timer) {
    window.Timer = {};
  }

  Timer.ns = 'JavaScript Timer';

  Timer.getTimeRemaining = function (endtimeRaw) {
    var endtime = new Date(endtimeRaw.replace(/\s/, 'T'));
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  };

  Timer.updateClock = function (endtime) {
    var t = this.getTimeRemaining(endtime);
    var days = document.getElementById('timer-days');
    var hours = document.getElementById('timer-hours');
    var minutes = document.getElementById('timer-minutes');
    var seconds = document.getElementById('timer-seconds');

    days.querySelector('.timer__value').innerHTML = ('0' + t.days).slice(-2);
    hours.querySelector('.timer__value').innerHTML = ('0' + t.hours).slice(-2);
    minutes.querySelector('.timer__value').innerHTML = ('0' + t.minutes).slice(-2);

    // Adds a leading 0 to maintain spacing
    seconds.querySelector('.timer__value').innerHTML = ('0' + t.seconds).slice(-2);

    // If the timer is at zero
    if (t.total <= 0) {
      // Stop the timer
      clearInterval(timeinterval);

      // Zero out the timer
      days.querySelector('.timer__value').innerHTML = 0;
      hours.querySelector('.timer__value').innerHTML = 0;
      minutes.querySelector('.timer__value').innerHTML = 0;
      seconds.querySelector('.timer__value').innerHTML = 0;
    } // if 0
  };

  Timer.start = function (obj) {
    var timer = obj.timer;
    var endtime = obj.endtime;

    if (timer) {
      // Run the function once to avoid a delayed start
      this.updateClock(endtime);

      // Set up the time interval to tick the clock down
      var timeinterval = setInterval(function () {
        Timer.updateClock(endtime);
      }, 1000);
    } // timer
  };
})();

(function () {
  Timer.start({
    timer: document.getElementById('js-timer'),
    endtime: document.getElementById('js-timer').getAttribute('data-endtime'),
  });
})();
