window.addEventListener('scroll', () => {
    let offset = $('nav').offset();
    if (offset.top > 20) {
        $('nav').css('background', 'rgba(228, 228, 228, 0.65)');
        $('.navbar-nav').css('padding', '0');

    } else {
        $('nav').css('background', 'none');
        $('.navbar-nav').css('padding', '30px 200px');
    }
});



$('.navbar-toggler').click(function (e) {
    e.preventDefault();
    $('.navbar-nav').css('height', '100vh');
    $('.navbar-nav').css('background', 'rgba(228, 228, 228, 0.65)');


});