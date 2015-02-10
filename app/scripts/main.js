(function($) {
    // defer image functionality
    $('.defer-image').each(function(i, el) {
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
})(jQuery);
