$(document).on("click",".btn_back ",function() {
	let page =  $(".pages").find(".active").data("number") ; 
	if(page>1){
		$(".page").removeClass("active");
		page--;
		$(".page").eq(page-1).addClass("active");
	}
	let i =  $(".pages").find(".active").data("number") ; 
	
	request(i,15);

});

$(document).on("click",".btn_next ",function() {
	let page =  $(".pages").find(".active").data("number") ; 
	$(".page").removeClass("active"); 

	$(".page").eq(page).addClass("active");
	let i =  $(".pages").find(".active").data("number") ; 
	
	request(i,15);
});

$(document).on("click"," li",function() {
	let page =  $(".pages").data("number") ;
	$(".page").removeClass("active");
	$(this).addClass("active");
	
	let i =  $(".pages").find(".active").data("number") ; 
	
	request(i,15);
});


function request(page,limit,type){
	$(".picture").empty();
	// let value;
	$.ajax({ 
		url: "http://gallery.dev.webant.ru/api/photos?page="+page+"&limit="+limit+"",
	         // "http://gallery.dev.webant.ru/api/photos?new="+value+"true&popular=false" 
	}).done(function( data){ 
		data.data.forEach(function(item,i,arr){
			$(".picture").append('<img class="pict" style="width:200px;height:200px" src='+'http://gallery.dev.webant.ru/media/'+item.image.contentUrl+' alt="">')
		})
	})
} 
