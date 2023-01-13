var houseplantSlider = tns({
    container: ".houseplant-slider",
    mouseDrag: true,
    nav: false,
    controls: false,
    slideBy: 1,
    gutter: 30,
    items: 1,

    responsive: {
        768: {
            items: 2,
        },

        1200: {
            items: 3,
        },
    },
});

var aloeVeraSlider = tns({
    container: ".aloe-vera-slider",
    mouseDrag: true,
    nav: false,
    controls: false,
    slideBy: 1,
    gutter: 30,
    items: 1,

    responsive: {
        768: {
            items: 2,
        },

        1200: {
            items: 3,
        },
    },
});

var gardeningSlider = tns({
    container: ".gardening-slider",
    mouseDrag: true,
    nav: false,
    controls: false,
    slideBy: 1,
    gutter: 30,
    items: 1,

    responsive: {
        768: {
            items: 2,
        },

        1200: {
            items: 3,
        },
    },
});

var nurserySlider = tns({
    container: ".nursery-slider",
    mouseDrag: true,
    nav: false,
    controls: false,
    slideBy: 1,
    gutter: 30,
    items: 1,

    responsive: {
        768: {
            items: 2,
        },

        1200: {
            items: 3,
        },
    },
});

var slider = tns({
    container: ".feedbacks-slider",
    items: 1,
    axis: "vertical",
    mouseDrag: true,
    autoplay: true,
    autoplayButtonOutput: false,
    controls: false,
    navContainer: ".feedback-slider__navs",
    autoHeight: true,
});
