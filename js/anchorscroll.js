$('a').click(function(){
  console.log('clicked');
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    
    return false;
});
