$(window).scroll(function(){
  var wScroll = $(this).scrollTop(); 
    if(wScroll > $('.themes-pics').offset().top - ($(window).height()/1.2)) {
       $('.themes-pics figure').each(function(i){
           setTimeout(function(){
          $('.themes-pics figure').eq(i).addClass('is-showing'); //.eq() The eq() method returns an element with a specific index number of the selected elements.
        }, 500 * (i+1));
        
      });
    };
});