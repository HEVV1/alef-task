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