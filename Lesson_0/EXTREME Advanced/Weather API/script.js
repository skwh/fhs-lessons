function load() {
	var text = $.get("../Weather API/document.xml");
	rssProcess(text);
}

function rssProcess(rssText) {
	//placeholder operation
	$('body').append(rssText);
}

$(document).ready(function() {
	load();
});