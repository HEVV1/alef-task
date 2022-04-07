const MENU = '.layout-menu';
const HEADER = '.layout-header';
var isItOpened = false;
var isItMobileSize = false;
$(function () {
  $('.btn-menu').on('click', function () {
    if (!isItOpened) {
      $(this).addClass('active');
      $(HEADER).addClass('active');
      $(MENU).addClass('active');
      isItOpened = true;
    }
    else {
      $(this).removeClass('active');
      $(HEADER).removeClass('active');
      $(MENU).removeClass('active');
      isItOpened = false;
    }
  })

  $(document).on('click', function (e) {
    if (!$(e.target).closest(MENU).length &&
      !$(e.target).closest(HEADER).length) {
      $('.btn-menu').removeClass('active');
      $(HEADER).removeClass('active');
      $(MENU).removeClass('active');
      isItOpened = false;
    }
  })
})

$(function () {
  if ($(window).width() > 768) {
    $('.btn-menu').removeClass('active');
    $(HEADER).removeClass('active');
    $(MENU).removeClass('active');
    isItOpened = false;
  }
  else {
    isItMobileSize = true;
  }
  $(window).on('resize change', function () {
    if ($(window).width() > 768) {
      $('.btn-menu').removeClass('active');
      $(HEADER).removeClass('active');
      $(MENU).removeClass('active');
      isItOpened = false;
    }
    else {
      isItMobileSize = true;
    }
  })
})