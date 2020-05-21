$(document).ready(function() {
    // Fixed NavBar
    $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass("stick", $(this).scrollTop() >= $nav.height());
    });

    /* Navigation scroll */
    $('a[href*=\\#]:not([href=\\#])').on('click', function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });

    // Animation on scroll
    $('.js__about').waypoint(function(direction) {
        $('.js__about').addClass('js__animated animate__fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js__services--down').waypoint(function(direction) {
        $('.js__services--down').addClass('js__animated animate__fadeInDown');
    }, {
        offset: '50%'
    });
    $('.js__services--up').waypoint(function(direction) {
        $('.js__services--up').addClass('js__animated animate__fadeInUp');
    }, {
        offset: '80%'
    });

    $('.js__projects--left').waypoint(function(direction) {
        $('.js__projects--left').addClass('js__animated animate__fadeInLeft');
    }, {
        offset: '60%'
    });
    $('.js__projects--right').waypoint(function(direction) {
        $('.js__projects--right').addClass('js__animated animate__fadeInRight');
    }, {
        offset: '60%'
    });

    $('.js__contact').waypoint(function(direction) {
        $('.js__contact').addClass('js__animated animate__bounce');
    }, {
        offset: '50%'
    });
});