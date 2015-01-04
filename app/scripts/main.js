(function($) {
    var $mainNavbar = $('header .navbar'),
        mainNavbar = $mainNavbar.outerHeight(true),
        scrollPos = $(document).scrollTop(),
        $body = $('body');

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
                    $body.css('padding-top', '');
                    $mainNavbar.removeClass('affixed');
                }
            } else if (scrollPos === 0) {
                $mainNavbar.removeClass('affixed');
            }

        }, 100)
    );

})(jQuery);
