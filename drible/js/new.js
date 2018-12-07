$(document).on('click', '.new', function() {
	// $('main').empty();
	requ();
});

function requ() {
	$('main').empty();
	$.ajax({               
		url: "http://gallery.dev.webant.ru/api/photos?new=true&popular=false", 
	}).done(function( data){ 
		data.data.forEach(function(item,i,arr){
			$(".main").append('<img class="pict" style="width:200px;height:200px" src='+'http://gallery.dev.webant.ru/media/'+item.image.contentUrl+' alt="">')
		})
	})
};
