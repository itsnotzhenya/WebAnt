function content() {
$.ajax({               
	url: "http://gallery.dev.webant.ru/api/photos?page=1&limit=15", 
}).done(function( data){ 
data.data.forEach(function(item,i,arr){
	$(".picture").append('<img style="width:200px;height:200px" src='+'http://gallery.dev.webant.ru/media/'+item.image.contentUrl+' alt="">')
	})
}); }
	setTimeout(content, 3000);

load();

function load(){
	setTimeout(function(){
		$('.pagination').show();
},2900);

	setTimeout(function(){ 
	$(document).ready(function() {
	$('body').append('<div class="load"><span class="one"></span><span class="two"></span><span class="three"></span><p>Loading...</p></div>')
	$('.pagination').hide();
	load();
});
	});
};