const img = document.querySelectorAll('.experience img');


gsap.from('.landingPage', {
    y: 5,
    opacity: 0,
    duration: 2
})
gsap.from('.services', {
    y: 100,
    opacity: 0,
    duration: 2.5
})




AOS.init();

$("#testimonial-slider").owlCarousel({
    items: 3,
    itemsDesktop: [1000, 3],
    itemsDesktopSmall: [979, 2],
    itemsTablet: [768, 2],
    itemsMobile: [650, 1],
    pagination: true,
    autoPlay: true
});

$(".owl-carousel").owlCarousel({
    items: 3,
    itemsDesktop: [1000, 3],
    itemsDesktopSmall: [979, 2],
    itemsTablet: [768, 2],
    itemsMobile: [650, 1],
    pagination: true,
    autoPlay: true
});