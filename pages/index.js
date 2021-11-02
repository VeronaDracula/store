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
            animation:  {opacity:'show', transform: 'translateY(20px)'},
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
    })

    $("#zoom_05").elevateZoom({
        zoomType: "inner",
        cursor: "crosshair"
    });



});



//модально окно
jQuery(document).ready(function($){
    $('[data-fancybox]').fancybox({
        maxWidth: 900,
        maxHeight: 506,
        animationEffect: "fade",
        animationDuration: 600,


        afterShow: function() {
            $('.modal-window__product-img').elevateZoom({
                zoomType: "inner",
                cursor: "crosshair",
                zoomWindowFadeIn: 500,
                zoomWindowFadeOut: 750
            })
        },

        afterClose: function() {
            $('.zoomContainer').remove();
        }


    });

});















