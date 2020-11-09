

$(document).ready(function () {
    //маска
    $(".phone_mask").mask("+7 (000) 000 00 00", {
        placeholder: ""
    });
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

    });
    //конец меню


    <!-- скролл-->
    $(".down").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    <!-- конец скролл -->
});
