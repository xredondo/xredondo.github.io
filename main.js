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


$(document).ready(function(){
  if( /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){
    document.getElementById('SleeperLink').href ="https://sleeperbot.app.link/esEa7TDlJN?_p=c11335dc9e0a7af2e11d90faea";
  } else {
      document.getElementById('SleeperLink').href ="https://sleeper.app/leagues/";}
  });
