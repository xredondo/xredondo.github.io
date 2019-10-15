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
