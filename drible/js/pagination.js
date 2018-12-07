
var typeNew = "new";
var typePopular = "popular"; 
var type = typeNew;


function pages(countPages, activePage ) {
 	$('.pages').empty();

 	if(activePage != 1) {
	$('.pages').append('<li class="btn_back" data-number="'+(activePage-1)+'">&#60;</li>');
	};

	let firstPage = activePage-1;
	let lastPage = activePage+1;

	if (activePage == 1){
		firstPage = 1;
	}
	if (activePage == countPages) {
		lastPage = activePage;
	}
	for(let i = firstPage; i <= lastPage; i++){
		$('.pages').append('<li class="page" data-number='+i+'>'+i+'</li>');
		if(i == activePage) {
			$('.page').eq(i-firstPage).addClass('active');
		}
	}

	if(activePage != countPages) {
	$('.pages').append('<li class="btn_next" data-number="'+(activePage+1)+'">&#62;</li>');
	}
 };


$(document).on('click', '.pages li' , function(){
	let number = $(this).data('number');
	request(number, 5, type );
})


// TABS

$(document).on('click', '.new', function(e) {
	e.preventDefault();
	$('.popular').removeClass('activeTab');
	$('.new').addClass('activeTab');
	type = typeNew;
	request(1, 5, type);
	
});

$(document).on('click', '.popular', function(e) {
	e.preventDefault();

	$('.new').removeClass('activeTab');
	$('.popular').addClass('activeTab');;
	type = typePopular;
	request(1, 5, type);
	
});

function request(page, limit, type){
$(".picture").empty();
	load(true);
	$.ajax({ 
		url: "http://gallery.dev.webant.ru/api/photos?"+type+"=true&page="+page+"&limit="+limit+"",
 	}).done(function(data){ 
 		load(false);
		data.data.forEach(function(item,i,arr){
			$(".picture").append('<img style="width:200px;height:200px" src='+'http://gallery.dev.webant.ru/media/'+
				item.image.contentUrl+' data-name='+
				item.name+' data-description='+
				item.description+' alt=""> ')		
		})
		pages(data.countOfPages, page);	
	}).fail(function() {
		load(false);
		$('.main').empty();
		$('.main').append("<img src='img/NoInternet.png' alt='offline'><h2>Oh shucks!</h2><p>Slow or no internet connection.</p><p>Please check your internet settings</p>");
	});
}


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
	}
}

