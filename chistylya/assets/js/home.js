$(document).ready(function () {


    //слайдер
    $('.slider_1').slick({
        infinite:true,
        draggable:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows:false,
        responsive: [

            {

                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {

                breakpoint: 1024,
                settings: {
                    centerMode:false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode:false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode:false,

                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]

    });
    $('.slider_2').slick({
        infinite:false,
        draggable:true,
        slidesToShow: 6,
        slidesToScroll: 1,
        adaptiveHeight:true,
        dots: true,
        arrows:false,
        responsive: [
            {

                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {

                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {

                breakpoint: 1024,
                settings: {
                    centerMode:false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode:false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode:false,

                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]

    });
    $('.slider_3').slick({
        infinite:false,
        draggable:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows:false,
        responsive: [

            {

                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {

                breakpoint: 1024,
                settings: {

                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {

                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {


                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {

                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]

    });
    $('.slider_4').slick({
        infinite:false,
        draggable:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows:false,
        responsive: [

            {

                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {

                breakpoint: 1024,
                settings: {

                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {

                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {


                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {

                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]

    });
    $('.slider_5').slick({
        infinite:false,
        draggable:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows:false,
        responsive: [

            {

                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {

                breakpoint: 1024,
                settings: {
                    centerMode:false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode:false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode:false,

                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    centerMode:true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },

        ]

    });
    $('.slider_6').slick({
        infinite:false,
        draggable:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        nextArrow: '<button class="slick-arrow next"><span></span></button>',
        prevArrow: '<button class="slick-arrow prev"><span></span></button>',

    });

    $('.section_8').each(function(){
        var $this = $(this),
            $blockArrows = $('.slick-arrow_group', $this),
            $blockDots = $('.slick-arrow_group', $this),
            $slick = $('.slider_7', $this);
        $slick.slick({
            draggable:true,
            slidesToShow: 3,
            centerMode: true,
            centerPadding: '60px',
            dots: true,
            variableWidth:true,
            nextArrow: '<button class="slick-arrow next"><span></span></button>',
            prevArrow: '<button class="slick-arrow prev"><span></span></button>',
            appendArrows: $blockArrows,
            appendDots: $blockDots,

        });
    });
    //конец слайдер

    var highestBox = 0;
    jQuery('.slider_1>.slide').each(function(){
        if(jQuery(this).height() > highestBox) {
            highestBox = jQuery(this).height(); //нахожу высоту самого высокого блока
        }
    });
    jQuery('.slider_1>.slide').height(highestBox);
    //табы
    $(".tabs-button").click(function(e) {
        $("div [data-id]").removeClass("active");
        $("div [data-id='" + $(this).attr("href").replace("#","") + "']").addClass("active");
        e.preventDefault();
    });
    $(".tabs-button").click(function(e) {
        e.preventDefault();
        $(".tabs-button").removeClass('active');
        $(this).addClass('active');
    });
    //конец табы

    //аккордион
    $( function() {
        $( ".accordion" ) .accordion({
            header: "> div > h3"
        });
    } );

    //конец аккордеон
});