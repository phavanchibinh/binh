
$('.click-menu').click(function(){
  $('.nav-menu').slideToggle();
 });

$('.close').click(function(){
  $('.nav-menu').slideToggle();
});

$(window).resize(function () {
    if($(window).width() <=1024) {



  $('.nav-menu').css("display", "none");
}else if($(window).width() >1024){
  $('.nav-menu').css("display", "block");
    }
});

$("document").ready(function($){
    var nav = $('#cb');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 730) {
            nav.addClass("f-nav");
        }
         if ($(this).scrollTop() <=730) {
            nav.removeClass("f-nav");
        }
    });
});




$("document").ready(function($){


    var nav = $('#fixed');
    $(window).scroll(function () {
if($(window).width() <=1024) {
        if ($(this).scrollTop() > 150) {
            nav.addClass("f-mobile");
            $( ".img-logo" ).attr( "src", function() {
            return "/images/logo-black.png" + this.title;
            });
        } 
        if ($(this).scrollTop() === 0) {
            nav.removeClass("f-mobile");
            $( ".img-logo" ).attr( "src", function() {
            return "/images/logo.png" + this.title;
            });
        }
    }

});



});





