const eachInput = $('.block-input');
const cancelButton = $('.input-cancel');
$(function(){
  cancelButton.on('click', function(){
    $('input', $(this).parent()).val('');
  })
})