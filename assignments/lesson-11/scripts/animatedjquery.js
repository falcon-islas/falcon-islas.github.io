$(function(){
  $('.navigation > li').hover(function(){
      //This code executes when the mouse pointer is over  the list item
        $(this).addClass('openSesame');
  }, function() {
      //This code excectues when the mouse pointer leave the list item
        $(this).removeClass('openSesame');
  });

})

