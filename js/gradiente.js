$('.input').on('change', function() {
    var sel = $('#select').find(":selected").text();
    var col1 = $('#color1').val();
    var col2 = $('#color2').val();
    $('body').css( 'background-image', 'linear-gradient(' + sel + ',' + col1 + ',' + col2 + ')' );
  });  