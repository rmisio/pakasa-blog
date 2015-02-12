(function($) {
    // Defer Image functionality is based off the following:
    // http://maketea.co.uk/2013/05/04/responsive-image-placeholders.html
    //
    // The idea is to provide a "placeholder" that takes the place of a responsive image
    // until the image is fully loaded and thereby avoiding the page from jumping
    // upon image load.
    $('.defer-image').each(function(i, el) {
        var $el = $(this),
            img = new Image(),
            $placeholder = $el.find(':first-child');

        img.onload = function () {
            $el.toggleClass('loading loaded');
            $placeholder.replaceWith(img);
        }

        // any 'data-' attributes that are on the placeholder will
        // be placed on the image without the 'data-' preface. For
        // example, the following placeholder:
        //
        // <div data-class="img-responsive" data-src="/images/construction.jpg"></div>
        //
        // will result in the following image tag:
        //
        // <img class="img-responsive" src="/images/construction.jpg">
        for (var i = 0; i < $placeholder[0].attributes.length; i++) {
            var attr = $placeholder[0].attributes[i];

            if (attr.name.match(/^data-/)) {
                img.setAttribute(attr.name.replace('data-', ''), attr.value);
            }
        }
    });
})(jQuery);
