$(function(){
  $('.buy', '.layout-form').on('click', function(){
    if(!$('#select_size').val() == "" && $('.total-amount').html() > 0) { 
      alert('Product quantity: ' + $('.total-amount').html() + '\n' + 'Selected Size: ' + $('#select_size').val());
    }
    else{
      alert('SELECT THE SIZE AND QUANTITY!');
    }
  })
})