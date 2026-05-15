import Swiper from "swiper";
// import 'swiper/css';

export default () => {
    const keySliders = document.querySelectorAll('.key-swiper');
    keySliders.forEach(item => {
        const swiper = new Swiper(item, {
            direction: 'horizontal',
            loop: true,
            spaceBetween: 20,
            slidesPerView: 1,
        });
    });

    const commandSlider = new Swiper('.command-swiper', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 20,
        slidesPerView: 1,
    });

    const bestOfferSlider = new Swiper('.best-offer-swiper', {
        direction: 'horizontal',
        loop: true,
        spaceBetween: 20,
        slidesPerView: 1,
    });

}