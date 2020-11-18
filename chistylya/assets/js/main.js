

$(document).ready(function () {
    //маска
    //$(".phone_mask").mask("+7 (000) 000 00 00", {
    //    placeholder: ""
    //});
    //конец маска


    //табы
    $( function() {
        $( ".accordion" ).accordion({
            collapsible: true,

        });
    } );
    //конец табы




    //меню
    $('.open_menu').click( function () {
        $('.menu').toggleClass('active');
        $('.open_menu').toggleClass('active');
    });
    $('.menu').click( function () {
        $('.menu').removeClass('active');
    });
    $('.address a').click( function () {
        $(this).toggleClass('active');
        $(".address a").not(this).removeClass("active");


    });
    //конец меню


    <!-- скролл-->
    $(".down").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    $(".up").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    <!-- конец скролл -->


    <!-- Попап -->

    $('.open_form').on("click", function () {
        $('.overlay-form').addClass('active fadeInDown');
        $('.overlay-form').removeClass('fadeOutUp');
        $('body').addClass('hid');

    });
    $('.overlay-form .close,.close-popup, .open_conf').on("click", function () {
        $('.overlay-form').toggleClass('fadeOutUp fadeInDown');
        $('body').removeClass('hid');
        window.setTimeout(function() {
            $('.overlay-form').removeClass('active');
        }, 500);
    });
    $('.overlay-form .closeBtn, .open_conf').on("click", function () {
        $('.overlay-form').removeClass('active fadeInDown ');
        $('body').removeClass('hid');
    });

    $('.open_conf').on("click", function () {
        $('.overlay-conf').addClass('active fadeInDown');
        $('.overlay-conf').removeClass('fadeOutUp');
        $('body').addClass('hid');

    });
    $('.overlay-conf .close,.close-popup').on("click", function () {
        $('.overlay-conf').toggleClass('fadeOutUp fadeInDown');
        $('body').removeClass('hid');
        window.setTimeout(function() {
            $('.overlay-video').removeClass('active');
        }, 500);
    });
    $('.overlay-conf .closeBtn').on("click", function () {
        $('.overlay-conf').removeClass('active fadeInDown ');
        $('body').removeClass('hid');
    });

    $('.open_video').on("click", function () {
        $('.overlay-video').addClass('active fadeInDown');
        $('.overlay-video').removeClass('fadeOutUp');
        $('body').addClass('hid');

    });
    $('.overlay-video .close,.close-popup').on("click", function () {
        $('.overlay-video').toggleClass('fadeOutUp fadeInDown');
        $('body').removeClass('hid');
        window.setTimeout(function() {
            $('.overlay-video').removeClass('active');
        }, 500);
    });
    $('.overlay-video .closeBtn').on("click", function () {
        $('.overlay-video').removeClass('active fadeInDown ');
        $('body').removeClass('hid');
    });


    $('.open_valid').on("click", function () {
        $('.overlay-valid').addClass('active fadeInDown');
        $('.overlay-valid').removeClass('fadeOutUp');
        $('body').addClass('hid');

    });
    $('.overlay-valid .close,.close-popup').on("click", function () {
        $('.overlay-valid').toggleClass('fadeOutUp fadeInDown');
        $('body').removeClass('hid');
        window.setTimeout(function() {
            $('.overlay-valid').removeClass('active');
        }, 500);
    });
    $('.overlay-valid .closeBtn').on("click", function () {
        $('.overlay-valid').removeClass('active fadeInDown ');
        $('body').removeClass('hid');
    });

    <!-- конец Попап -->
});
