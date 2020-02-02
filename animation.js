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

setInterval(() => {
    gsap.from(img[0], {
        duration: 2.5,
        ease: "power2.out",
        x: -100

    });

    gsap.from(img[1], {
        duration: 2.5,
        ease: "power2.out",
        delay: 1,
        x: -500,

    });
    gsap.from(img[2], {
        duration: 2.5,
        ease: "power2.out",
        delay: 1,
        x: 1000,
        opacity: 0

    });

}, 7000);

gsap.from('.offers .card', {
    duration: 2.5,
    ease: "power2.out",
    x: -100

});