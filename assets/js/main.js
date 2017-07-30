$(document).ready(function() {
	json.forEach(function(element){
		$("#img-container").append("<div class='card'><div class='card-image'><a href='#modal" + element.id + "' class='modal-trigger'><img src='assets/img/" + element.image_url + "'></a></div><div class='card-content'><span class='card-title'>" + element.title + "</span><p>" + element.description + "</p><p><span>" + element.username + "</span><span> #" + element.hashtag + "</span></p></div></div>" + "<div id='modal" + element.id + "' class='modal'><div class='modal-header flex-container'><span><i class='fa fa-upload' aria-hidden='true'></i><i class='fa fa-check' aria-hidden='true'></i><i class='fa fa-ellipsis-h' aria-hidden='true'></i></span><button type='button' class='btn modal-btn'><i class='fa fa-thumb-tack' aria-hidden='true'></i> Guardar</button></div><div class='modal-content'><h4>" + element.title + "</h4><img src='assets/img/" + element.image_url + "'><div class='flex-container'><span><i class='fa fa-upload' aria-hidden='true'></i><i class='fa fa-check' aria-hidden='true'></i><i class='fa fa-ellipsis-h' aria-hidden='true'></i></span><button type='button' class='btn modal-btn'><i class='fa fa-thumb-tack' aria-hidden='true'></i> Guardar</button></div></div><div class='modal-footer'><span>" + element.username + "  # " + element.hashtag + "</span><p>" + element.description + "</p></div></div>");
	});

	$('.modal').modal();
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

	<div id='modal1' class='modal'>
    <div class='modal-content'>
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div class='modal-footer'>
      <a href='#!' class='modal-action modal-close waves-effect waves-green btn-flat'>Agree</a>
    </div>
  </div>
*/