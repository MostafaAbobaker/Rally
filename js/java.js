/*global $*/
$(document).ready(function () {
    "use strict";
	$('#fullpage').fullpage({
		//options here
		autoScrolling: true,
		scrollHorizontally: true
	});

	//methods
	$.fn.fullpage.setAllowScrolling(false);
});