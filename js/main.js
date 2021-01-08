jQuery(document).ready(function($){
$nav = $('.nav');
$toggleCollappse = $('.toggle-collapse');



$toggleCollappse.click(function(){
    $nav.toggleClass('collapse');


})

    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next'   )],
        // responsive:responsive
    });


    // Scrolling part
    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop:0
        },2000)
    })

});
