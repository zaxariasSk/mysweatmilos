$(".smallLogo").css("visibility", "hidden");

$(window).bind('scroll', function() {
   if ($(window).scrollTop() > 250) {
       $('.logoDisappear').fadeOut();
       $(".smallLogo").fadeIn().css("visibility", "visible");
      
   }
   else {
       $('.logoDisappear').fadeIn().css("visibility", "visible");
       $(".smallLogo").css("visibility", "hidden");
   }
});