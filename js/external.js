var owl = $('.owl-carousel');
owl.owlCarousel({
    items:7,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
});


$('.portfolio-item').isotope({
        // options
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });
    $('.portfolio-menu ul li').click(function() {
        $('.portfolio-menu ul li').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $('.portfolio-item').isotope({
            filter: selector
        });
        return false;
    });