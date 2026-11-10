export const  generalslider = () => {
    new Swiper(".general__slider", {
        slidesPerView: "auto",
        spaceBetween: 19,
        loop: true, 
        mousewheel: {
            forceToAxis: true,
        },
        navigation: {
            nextEl: ".slider-right",
            prevEl: ".slider-left",
        },
    });
};