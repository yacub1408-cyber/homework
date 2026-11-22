export const productSlider = () => {
    new Swiper(".product__slider", {
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true, 
        mousewheel: {
            forceToAxis: true,
        },
        navigation: {
            nextEl: ".slider__button--next",
            prevEl: ".slider__button--prev",
        },
    });
};
