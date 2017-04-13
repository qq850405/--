$(function() {
    $('.sidebar').on('click', function() {
        $('.toggle').toggleClass('is-opened');
        $('.mobile-side-bottom').toggleClass('is-opened');
    });
});