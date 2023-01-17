$(function () {
  // wow js start
  new WOW().init();
  // wow js end

    // banner part slider start
    $('.banner-slider-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows:true,
        initialSlide:0,
        pauseOnHover:false,
        prevArrow:".banner-prev-icon",
        nextArrow:".banner-next-icon",
        dots:true,

      });
    // banner part slider end

    //sticky menu start
    $(window).scroll(function () {
        // sticky menu start
        var sticky = $(this).scrollTop()
        if (sticky > 250) {
            $(".header-menu").addClass("sticky-menu")
        } else {
            $(".header-menu").removeClass("sticky-menu")
        }
    })
    //sticky menu end
});
