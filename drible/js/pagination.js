
var typeNew = "new";
var typePopular = "popular"; 
var type = typeNew;

// PAGINATION

// $(document).ready(function pages(type) {
// 	$.ajax ({
// 		url: "http://gallery.dev.webant.ru/api/photos?"+type+"=true&limit=1"	
// 	}).done(function(data){ 
// 		console.log(data.countOfPages);
// 		$('.pages').append('<li class="btn_back">&#60;</li>');
// 		let page = data.countOfPages;
// 		console.log(data.countOfPages);
// 		for(let i=1; i<=page; i++){
// 			$('.pages').append('<li class="page" data-number='+i+'>'+i+'</li>')
// 		}
// 		$('.pages').append('<li class="btn_next">&#62;</li>');
// 		$('.pages').find(".page").first().addClass(" active");
// 	})
// });
 
 function pages(type) {
 	$.ajax ({
		url: "http://gallery.dev.webant.ru/api/photos?"+type+"=true&limit=10"	//если меняешь limit, то не забудь и здесь поменять 
	}).done(function(data){ 
		$('.pages').empty();
		// console.log(data.countOfPages);
		$('.pages').append('<li class="btn_back">&#60;</li>');
		let page = data.countOfPages;
		// console.log(data.countOfPages);
		for(let i=1; i<=page; i++){
			$('.pages').append('<li class="page" data-number='+i+'>'+i+'</li>')
		}
		$('.pages').append('<li class="btn_next">&#62;</li>');
		$('.pages').find(".page").first().addClass(" active");
	
	})
 }
// BUTTON BACK

$(document).on("click",".btn_back ",function() {
	let page =  $(".pages").find(".active").data("number") ; 
	if(page>0){
		$(".page").removeClass("active");
		page--;
		$(".page").eq(page-1).addClass("active");
	}
	// if(page==1) {
	// 	$('.btn_back').removeClass('btn_back');
	// }

	let i =  $(".pages").find(".active").data("number") ; 
	
	request(i, 10, type);
	pages(type);
});

// BUTTON NEXT

$(document).on("click",".btn_next ",  function() {
	let page =  $(".pages").find(".active").data("number") ;  
	let last = $('.page').length;
	console.log(last);
	console.log(page);
	$(".page").removeClass("active");
	$(".page").eq(page).addClass("active");
	
	let i =  $(".pages").find(".active").data("number") ; 
	// if(page==last-1) {
	// 	$('.btn_next').removeClass('btn_next');
	// 	// $('.btn_next').addClass('btn_disabled');
	// }
	request(i,10, type);
	pages(type);
});

// click LI

$(document).on("click",".page", function() {
	let page =  $(".pages").data("number") ;
	let last = $(this).data("number") ;

	// if(last==1) {
	// 	$('.btn_back').removeClass('btn_back');
	// 	$('.btn_next').addClass('btn_next');
	// }
	// else if (last==15) {
	// 	$('.btn_next').removeClass('btn_next');
	// 	$('.btn_back').addClass('btn_back');
	// }

	$(".page").removeClass("active");
	$(this).addClass("active");
	let i =  $(".pages").find(".active").data("number") ; 
	
	request(i,10, type);
	pages(type);
});

// TABS

$(document).on('click', '.new', function(e) {
	e.preventDefault();
/*
	$('.pages').find(".active").removeClass("active");
	$('.pages').find(".page").first().addClass("active");
*/	$('.popular').removeClass('activeTab');
	$('.new').addClass('activeTab');
	type = typeNew;
	request(1,10, type);
	pages(type);
});


$(document).on('click', '.popular', function(e) {
	e.preventDefault();
/*
	$('.pages').find(".active").removeClass("active");
	$('.pages').find(".page").first().addClass("active");*/
	$('.new').removeClass('activeTab');
	$('.popular').addClass('activeTab');;
	type = typePopular;
	request(1,10, type);
	pages(type);
});


function request(page, limit, type){
$(".picture").empty();
	load(true);
	$.ajax({ 
		url: "http://gallery.dev.webant.ru/api/photos?"+type+"=true&page="+page+"&limit="+limit+"",
 	}).done(function(data){ 
 		load(false);
 		// console.log(data.totalItems);
		data.data.forEach(function(item,i,arr){
			$(".picture").append('<img style="width:200px;height:200px" src='+'http://gallery.dev.webant.ru/media/'+
				item.image.contentUrl+' data-name='+
				item.name+' data-description='+
				item.description+' alt=""> ')		
		})	
	})	
}
// .fail(function() {
// 	$('.main').empty();
// 	$('.main').append("<img src='image/NoInternet.png' alt='offline'><h2>Oh shucks!</h2><p>Slow or no internet connection.</p><p>Please check your internet settings</p></figcaption></figure>");
// })
// }

function load(bool) {
	if (bool==true) {
		$('.load').css('display', "flex");
		$('.pagination').hide();
		$('body').css('overflow', "hidden");
	}
	if (bool==false) {
		$('.load').css('display', "none");
		$('.pagination').show();
		$('body').css('overflow', "visible");
		// alert();
	}
}