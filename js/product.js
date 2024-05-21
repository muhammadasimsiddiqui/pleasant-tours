
$('.small-img').click(function() {
  $('#MainImg').attr('src', $(this).attr('src'));
});
          

$(document).ready(function() {
  $('#numPersons').on('input', function() {
      var numPersons = $(this).val();
      var totalPrice = numPersons * 25000;
      $('#totalPrice').text(totalPrice);
  });
});