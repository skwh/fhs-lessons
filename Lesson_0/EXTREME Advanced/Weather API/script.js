function load() {
	var request = $.ajax({
		type: "GET",
		url: "http://weather.yahooapis.com/forecastrss?w=12793016&u=f"
	}).done(function(rss) {
		rssProcess(rss);
	});
}

function rssProcess(rssText) {
	//placeholder operation
	$('body').append(rssText);
}

$(document).ready(function() {
	load();
});