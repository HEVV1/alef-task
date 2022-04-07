isItScrolledDown = false;
$(function () {
  $(window).bind('mousewheel', function (e) {
    if (isItMobileSize && !isItOpened) {
      if (e.originalEvent.wheelDelta < 0) {
        $(HEADER).addClass('hide-header');
        isItScrolledDown = true;
      }
      else {
        $(HEADER).removeClass('hide-header');
        isItScrolledDown = false;
      }
    }
  })
})

$(window).bind('touchstart', function (e) {  
  ts = e.originalEvent.touches[0].clientY;  
});

$(document).bind('touchend', function (e){
  var te = e.originalEvent.changedTouches[0].clientY;
  if(ts > te+5){
    $(HEADER).addClass('hide-header');
    isItScrolledDown = true;
  }else if(ts < te-5){
    $(HEADER).removeClass('hide-header');
    isItScrolledDown = false;
  }
});