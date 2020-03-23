$(document).ready(function() {
    /* sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if(direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
        
    });

    /* scroll on buttons */
    $('.js--scroll-to-plan').click(function () {
        $('html,body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });

    $('.js--scroll-to-features').click(function () {
        $('html,body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

    $('.js--scroll-to-features2').click(function () {
        $('html,body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

    $('.js--scroll-to-works').click(function () {
        $('html,body').animate({scrollTop: $('.js--section-steps').offset().top}, 1000);
    });

    $('.js--scroll-to-cities').click(function () {
        $('html,body').animate({scrollTop: $('.js--section-cities').offset().top}, 1000);
    });

    $('.js--scroll-to-plans').click(function () {
        $('html,body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
});
/* mobile navigation */
$('.js--nav-icon').click(function(){
    var nav = $('.js--main-nav');
    var icon = $('.js--main-nav i')
    nav.slideToggle(200);
    
});