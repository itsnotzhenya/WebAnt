$(document).on("click",".btn_back ",function() {
	let page =  $(".pages").find(".active").data("number") ; 
	if(page>1){
		$(".page").removeClass("active");
		page--;
		$(".page").eq(page-1).addClass("active");
	}
	let i =  $(".pages").find(".active").data("number") ; 
	
	if(i==2){
		 request(2,8);
	}
	if(i==1){
		 request(1,15);
	}

});

$(document).on("click",".btn_next ",function() {


	let page =  $(".pages").find(".active").data("number") ; 

	$(".page").removeClass("active"); 
		page+1; 
	$(".page").eq(page).addClass("active");

	let i =  $(".pages").find(".active").data("number") ; 
	if(i==2){
		 request(2,8);
	}
	if(i==1){
		 request(1,15);
	}
});

$(document).on("click"," li",function() {
	let page =  $(".pages").data("number") ;
		$(".page").removeClass("active");
		$(this).addClass("active");
	
	let i =  $(".pages").find(".active").data("number") ; 
	if(i==2){
		 request(2,8);
	}
	if(i==1){
		 request(1,15);
	}
});


function request(page,limit,str){
	$(".picture").empty();

	$.ajax({ 
	url: "http://gallery.dev.webant.ru/api/photos?page="+page+"&limit="+limit+"", 
	}).done(function( data){ 
		data.data.forEach(function(item,i,arr){
		$(".picture").append('<img style="width:200px;height:200px" src='+'http://gallery.dev.webant.ru/media/'+item.image.contentUrl+' alt="">')
		})
	})
} 
