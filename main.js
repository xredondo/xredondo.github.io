$(window).scroll(function () {
if ($(window).scrollTop() >= 50) {
$('.navbar').css('background','grey');
} else {
$('.navbar').css('background','transparent');
}
});
