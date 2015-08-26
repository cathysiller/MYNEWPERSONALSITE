// Parallax


// Set background Image
$('ul#images li').click(function(){
  $('ul#images li').each(function(){
      $(this).removeClass('active');
  });  
    $(this).addClass('active');
    var source = $(this).children('img').attr('src');
    $('.outer').css('background', 'url('+source+')');
});



