$(document).ready(function () {


    //слайдер
    $('.slider').each(function(){
        var $this = $(this),
            $blockArrows = $('.slick-arrow_group', $this),
            $blockDots = $('.slick-arrow_group', $this),
            $slick = $('.slider_1', $this);
        $slick.slick({
            infinite:true,
            draggable:true,
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            appendArrows: $blockArrows,
            appendDots: $blockDots,
            nextArrow: '<button class="slick-arrow next"><span></span></button>',
            prevArrow: '<button class="slick-arrow prev"><span></span></button>',
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
    });
    $('.slider').each(function(){
        var $this = $(this),
            $blockArrows = $('.slick-arrow_group', $this),
            $blockDots = $('.slick-arrow_group', $this),
            $slick = $('.slider_3', $this);
        $slick.slick({
            infinite:true,
            draggable:true,
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: true,
            appendArrows: $blockArrows,
            appendDots: $blockDots,
            nextArrow: '<button class="slick-arrow next"><span></span></button>',
            prevArrow: '<button class="slick-arrow prev"><span></span></button>',
            responsive: [
                {

                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 5,
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
    });
    $('.slider_4').slick({
        infinite:true,
        draggable:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        nextArrow: '<button class="slick-arrow next"><span></span></button>',
        prevArrow: '<button class="slick-arrow prev"><span></span></button>',

    });
    $(function(){
        $("#container1").twentytwenty();
    });
    //конец слайдер


});/**
 * Created by Nafta on 12.11.2020.
 */
