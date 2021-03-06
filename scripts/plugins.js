new tempusDominus.TempusDominus(document.querySelector('.datetimepicker1'), {
    display: {
        components: {
            decades: true,
            year: true,
            month: true,
            date: true,
            hours: false,
            minutes: false,
            seconds: false,
        },
        icons: {
            date: 'fa fa-calendar',
            previous: 'fa fa-chevron-left',
            next: 'fa fa-chevron-right',
            today: 'fa fa-check',
        },
    }
});

new tempusDominus.TempusDominus(document.querySelector('.datetimepicker2'), {
    display: {
        components: {
            decades: true,
            year: true,
            month: true,
            date: true,
            hours: false,
            minutes: false,
            seconds: false,
        },
        icons: {
            date: 'fa fa-calendar',
            previous: 'fa fa-chevron-left',
            next: 'fa fa-chevron-right',
            today: 'fa fa-check',
        },
    }
});


new tempusDominus.TempusDominus(document.querySelector('.datetimepicker3'), {
    display: {
        viewMode: 'clock',
        components: {
            decades: false,
            year: false,
            month: false,
            date: false,
            hours: true,
            minutes: true,
            seconds: false
        },
        icons: {
            time: 'fa fa-clock-o',
            up: 'fa fa-chevron-up',
            down: 'fa fa-chevron-down',
            today: 'fa fa-check',
        },
    }
});






//карусели
$(function() {
    var owl=$(".banner-carousel__carousel");
    owl.owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive:{
            0: {
                items: 1
            }
        }
    });

    $(".banner-carousel__carousel-button_type_next").click(function(){
        owl.trigger("next.owl.carousel");
    });
    $(".banner-carousel__carousel-button_type_prev").click(function(){
        owl.trigger("prev.owl.carousel");
    });
});


$(function() {
    var owl=$(".products__carousel");
    owl.owlCarousel({
        rewind:true,
        responsive:{
            0: {
                items: 1
            },

            769: {
                items: 3
            },

            1025: {
                items: 4
            },

            1281: {
                items: 5
            }
        }
    });

    $(".products__carousel-button_type_next").click(function(){
        owl.trigger("next.owl.carousel");
    });
    $(".products__carousel-button_type_prev").click(function(){
        owl.trigger("prev.owl.carousel");
    });
});


$(function() {
    var owl=$(".brands-carousel__carousel");
    owl.owlCarousel({
        rewind:true,
        margin: 20,
        responsive:{
            0: {
                items: 1
            },

            769: {
                items: 3
            },

            1025: {
                items: 4
            },

            1281: {
                items: 5
            }
        }
    });

    $(".products__carousel-button_type_brands-carousel-next").click(function(){
        owl.trigger("next.owl.carousel");
    });
    $(".products__carousel-button_type_brands-carousel-prev").click(function(){
        owl.trigger("prev.owl.carousel");
    });
});


$(function() {
    var owl=$(".blog__carousel");
    owl.owlCarousel({
        rewind:true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive:{
            0: {
                items: 1
            },

            769: {
                items: 2
            },

            1025: {
                items: 4
            },
        }
    });

});


jQuery(document).ready(function() {
    //выпадающее меню
    jQuery('ul.sf-menu').superfish(
        {
            cssArrows: false,
            delay: 0,
            animation: {opacity:'show'},
            speed: 100,
        }
    );


    //раскрывающиеся списки
    $(".footer__container-table").collapse({
        open: function() {
            this.slideDown(150);
        },
        close: function() {
            this.slideUp(150);
        }

    });

    $(".header__menu-collapse").collapse({
        clickQuery: ".footer__title-icon",
        open: function() {
            this.slideDown(150);
        },
        close: function() {
            this.slideUp(150);
        }

    });

    $(".header__menu-collapse-main").collapse({
        open: function() {
            this.slideDown(150);
        },
        close: function() {
            this.slideUp(150);
        }

    });


    //галерея
    lightbox.option({
        'wrapAround': false
    });

});



//модально окно
jQuery(document).ready(function($){
    $('[data-fancybox]').fancybox({
        maxWidth: 900,
        maxHeight: 506,
        animationEffect: "fade",
        animationDuration: 600,
    });

});


//кнопка подъема
jQuery(document).ready(function($){
    $(window).scroll(function (){
        if ($(this).scrollTop() > 100){
            $(".button-up").fadeIn();
        } else{
            $(".button-up").fadeOut();
        }
    });

    $(function(){
        $(".button-up").bind('click', function(e){
            e.preventDefault();
            $('body,html').animate({scrollTop: 0}, 600);
        });
    });
});


