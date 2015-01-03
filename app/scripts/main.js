(function($) {
    var $mainNavbar = $('header .navbar'),
        scrollPos = $(document).scrollTop();

    // Affix main navbar when scrolling down
    $(window).scroll(
        _.throttle(function() {
            prevScrollPos = scrollPos;
            scrollPos = $(document).scrollTop();

            if (scrollPos > 150) {
                // if scrolling up else scrolling down
                if (scrollPos < prevScrollPos) {
                    $mainNavbar.addClass('affixed');
                } else {
                    $mainNavbar.removeClass('affixed');
                }
            }

        }, 250)
    );

})(jQuery);
