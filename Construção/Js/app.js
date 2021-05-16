debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


(function () {
    var $targuet = $('.dir'),
        animaClass = 'anima',
        offset = $(window).height() * 3 / 4;

    function animeScroll() {
        var documentTop = $(document).scrollTop();

        $targuet.each(function () {
            var itemTop = $(this).offset().top;

            if (documentTop > itemTop - offset) {
                $(this).addClass(animaClass);
            } else {
                $(this).removeClass(animaClass);
            }
        })
    }
    animeScroll();

    $(document).scroll(debounce( function () {
        animeScroll();
    } , 200));

}());


(function () {
    var $targuet = $('.top'),
        animaClass = 'anima',
        offset = $(window).height() * 3 / 4;

    function animeScroll() {
        var documentTop = $(document).scrollTop();

        $targuet.each(function () {
            var itemTop = $(this).offset().top;

            if (documentTop > itemTop - offset) {
                $(this).addClass(animaClass);
            } else {
                $(this).removeClass(animaClass);
            }
        })
    }
    animeScroll();

    $(document).scroll(debounce( function () {
        animeScroll();
    } , 200));

}());

(function () {
    var $targuet = $('.esq'),
        animaClass = 'anima',
        offset = $(window).height() * 3 / 2;

    function animeScroll() {
        var documentTop = $(document).scrollTop();

        $targuet.each(function () {
            var itemTop = $(this).offset().top;

            if (documentTop > itemTop - offset) {
                $(this).addClass(animaClass);
            } else {
                $(this).removeClass(animaClass);
            }
        })
    }
    animeScroll();

    $(document).scroll(debounce( function () {
        animeScroll();
    } , 200));

}());


