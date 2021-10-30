$(function() {

    var owl=$(".banner-carousel__carousel");
    owl.owlCarousel({
        loop: true,
        responsive:{
            0: {
                items: 1
            }
        }
    });

    //$(".next") - находим нашу кнопку
    $(".banner-carousel__carousel-button_type_next").click(function(){
        owl.trigger("next.owl.carousel");
    });
    $(".banner-carousel__carousel-button_type_prev").click(function(){
        owl.trigger("prev.owl.carousel");
    });
});



