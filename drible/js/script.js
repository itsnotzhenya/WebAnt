// function content(url) {
// 	$.ajax({               
// 		url: url, 
// 	}).done(function( data){ 
// 		data.data.forEach(function(item,i,arr){
// 			$(".picture").append('<img style="width:200px;height:200px" src='+'http://gallery.dev.webant.ru/media/'+
// 				item.image.contentUrl+' data-name='+
// 				item.name+' data-description='+
// 				item.description+' alt=""> ')
// 		}) 
// 	})
// }
	
$('.popular').hover(function() {
	$('#popular').addClass('activeTab');
	if($('.popular').mouseout()) {
	$('#popular').removeClass('activeTab');
}
});

$('.popular').mouseout(function() {
	$('#popular').removeClass('activeTab');
})

$('.new').hover(function() {
	$('.new').addClass('activeTab');

})

$('.new').mouseout(function() {
	$('#new').removeClass('activeTab');
})

