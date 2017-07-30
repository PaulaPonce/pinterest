$(document).ready(function() {
	json.forEach(function(element){
		$("#img-container").append("<div class='card'><div class='card-image'><img src='assets/img/" + element.image_url + "'></div><div class='card-content'><span class='card-title'>" + element.title + "</span><p><span>" + element.username + "</span><span> #" + element.hashtag + "</span></p></div></div>");
	});
});

/*
<div class='card'>
	<div class='card-image'>
		<img src=''>
	</div>
	<div class='card-content'>
		<span class='card-title'></span>
		<p><span></span></p>
	</div>
</div>
*/