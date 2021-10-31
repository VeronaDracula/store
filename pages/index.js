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

    //$(".next") - находим нашу кнопку
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
                items: 5
            }
        }
    });

    //$(".next") - находим нашу кнопку
    $(".products__carousel-button_type_next").click(function(){
        owl.trigger("next.owl.carousel");
    });
    $(".products__carousel-button_type_prev").click(function(){
        owl.trigger("prev.owl.carousel");
    });
});



