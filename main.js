$(document).ready(function(){
  $("#navbutton").click(function(){
    var navlinksdiv = $('#divdropdown')
    if (navlinksdiv.hasClass('hidden')){
      navlinksdiv.removeClass('hidden');
      $('#navTransitionId').addClass('opaqueNavbar');
      $("#navbutton").addClass('clickedbutton')
    } else {
      navlinksdiv.addClass('hidden');
      $('#navTransitionId').removeClass('opaqueNavbar');
      $("#navbutton").removeClass('clickedbutton')
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

$(document).ready(function(){
  $("#generalrules-button").click(function(){
    var generalrulesdiv = $('#generalrules')
    if (generalrulesdiv.hasClass('hiderules')){
      generalrulesdiv.removeClass('hiderules');
      $("#generalrules-button").addClass('logbtnclick')
      if (window.matchMedia('(min-width: 600px)').matches) {
        $('#scoringrules').addClass('hiderules');
        $("#scoringrules-button").removeClass('logbtnclick')
        $('#draftboard').addClass('hiderules');
        $("#draft-button").removeClass('logbtnclick')
      }
    } else {
      generalrulesdiv.addClass('hiderules');
      $("#generalrules-button").removeClass('logbtnclick')
    }
  });
});

$(document).ready(function(){
  $("#scoringrules-button").click(function(){
    var scoringrulesdiv = $('#scoringrules')
    if (scoringrulesdiv.hasClass('hiderules')){
      scoringrulesdiv.removeClass('hiderules');
      $("#scoringrules-button").addClass('logbtnclick')
      if (window.matchMedia('(min-width: 600px)').matches) {
        $('#generalrules').addClass('hiderules');
        $("#generalrules-button").removeClass('logbtnclick')
        $('#draftboard').addClass('hiderules');
        $("#draft-button").removeClass('logbtnclick')
      }
    } else {
      scoringrulesdiv.addClass('hiderules');
      $("#scoringrules-button").removeClass('logbtnclick')
    }
  });
});

$(document).ready(function(){
  $("#draft-button").click(function(){
    var draftboarddiv = $('#draftboard')
    if (draftboarddiv.hasClass('hiderules')){
      draftboarddiv.removeClass('hiderules');
      $("#draft-button").addClass('logbtnclick')
      if (window.matchMedia('(min-width: 600px)').matches) {
        $('#generalrules').addClass('hiderules');
        $("#generalrules-button").removeClass('logbtnclick')
        $('#scoringrules').addClass('hiderules');
        $("#scoringrules-button").removeClass('logbtnclick')
      }
    } else {
      draftboarddiv.addClass('hiderules');
      $("#draft-button").removeClass('logbtnclick')
    }
  });
});
