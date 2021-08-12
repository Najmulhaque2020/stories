jQuery(document).ready(function () {
    //for Addin current-link in Main Menu
        jQuery('.main-menu ul > li a').click(function () {
            jQuery('.main-menu ul > li a').removeClass('current-link');
            jQuery(this).addClass('current-link');
    });

    //for Addin active in menuicon for Main Menu
    jQuery('.menuicon').click(function () {
        jQuery(this).toggleClass('active');           
        jQuery('.main-menu').toggleClass('active');           
    });

    //for Addin active in Popup menu Bar
    jQuery('.popupbar').click(function () {
        jQuery(this).toggleClass('active');           
    });

    //Nav sticky
    jQuery(window).scroll(function(){
        if(jQuery(this).scrollTop()>240){
            jQuery(".navbg").addClass("navsticky");
        }
        else{
            jQuery(".navbg").removeClass("navsticky");
        }
    });

       // featured slider 2
       $('.featured-slider-items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.featured-slider-nav',
    });
    $('.featured-slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        asNavFor: '.featured-slider-items',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        verticalSwiping: true
    });

        /*Post Slider*/
        $(".post-slider").slick({
            lazyLoad: 'ondemand', // ondemand progressive anticipated
            infinite: true,
            arrows:true,
            fade:true,
            draggable:true,
          });
    
          /* Catagory Slider */
    
        $(".cat_slider_items").slick({
            lazyLoad: 'ondemand', // ondemand progressive anticipated
            infinite: true,
            arrows:false,
            draggable:false,
            autoplay:true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplaySpeed: 3000,
            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 992,
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
            ]

          });


});