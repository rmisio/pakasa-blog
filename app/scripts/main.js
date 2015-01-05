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

    // defer image functionality
    $(function() {
        $('.defer-image').each(function(i, el) {
            console.log('boober');
            var $el = $(this),
                img = new Image(),
                $placeholder = $el.find(':first-child'),
                imgH = $el.data('imgH'),
                imgW = $el.data('imgW');

            if (!(imgH && imgW)) {
                throw new Error('Please provide the image dimensions as data-img-h and data-img-w attributes on the .defer-image element.');
            }

            $el.css({
                maxHeight: imgH,
                maxWidth: imgW
            });
            $placeholder.css('padding-top', (imgH / imgW * 100) + '%');
            $el.addClass('loading');

            img.onload = function () {
                $(img).css({
                    maxHeight: imgH,
                    maxWidth: imgW
                });
                $el.css({
                    maxHeight: '',
                    maxWidth: ''
                });
                $el.toggleClass('loading loaded');
                $placeholder.replaceWith(img);
            }

            for (var i = 0; i < $placeholder[0].attributes.length; i++) {
                var attr = $placeholder[0].attributes[i];

                if (attr.name.match(/^data-/)) {
                    img.setAttribute(attr.name.replace('data-', ''), attr.value);
                }
            }
        });
    });
})(jQuery);
