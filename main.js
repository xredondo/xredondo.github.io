$(document).ready(function(){
  $("button").click(function(){
    var navlinksdiv = $('#divdropdown')
    if (navlinksdiv.hasClass('hidden')){
      navlinksdiv.removeClass('hidden');
      $('#navTransitionId').addClass('opaqueNavbar');
      $("button").addClass('clickedbutton')
    } else {
      navlinksdiv.addClass('hidden');
      $('#navTransitionId').removeClass('opaqueNavbar');
      $("button").removeClass('clickedbutton')
    }
  });
});

$(window).scroll(function () {
	if ($(window).scrollTop() >= 30) {
		$('#navTransitionId').addClass('opaqueNavbar');
	} else {
		$('#navTransitionId').removeClass('opaqueNavbar');
	}
});

function showImages(el) {
    var windowHeight = jQuery( window ).height();
    $(el).each(function(){
        var thisPos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 200 > thisPos ) {
            $(this).addClass("fadeIn");
        }
    });
}

// if the image in the window of browser when the page is loaded, show that image
$(document).ready(function(){
        showImages('.fadeinClassDesig');
});

// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function() {
        showImages('.fadeinClassDesig');
});
