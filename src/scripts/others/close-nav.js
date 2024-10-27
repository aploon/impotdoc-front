export default function() {
    $('.menu-mobile-link').on('click', function() {
        $(this).closest('nav').find('.menu-trigger').toggleClass('active');
        $(this).closest('.nav').slideToggle(200);
    });
}