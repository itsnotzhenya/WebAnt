<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<title>Dribbble</title>
	<link rel="stylesheet" href="style.css">
	<script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
</head>
<body>
	<header>
		<nav >
			<a href="index.php" class="logo"><img src="img/Bitmap.png" alt="logo"></a>
			<div class="border ">
			<ul class="">
				<li class=" "><a href="new.php">New</a></li>
				<li class=" "><a href="popular.php">Popular</a></li>
			</ul>
		</div>
	</nav>
</header>

	<div class="picture"></div> 

	<div class="pagination">
		<ul class="pages">
			<i data-number='' class="btn_back " ><span>&#60;</span></i>
			<li class="page active" data-number='1'>1</li>
			<li class="page" data-number='2'>2</li>
			<li class="page" data-number='3'>3</li>
			<li class="page" data-number='4'>4</li>
			<li class="page" data-number='5'>5</li>
			<li class="page" data-number='6'>6</li>
			<li class="page" data-number='7'>7</li>
			<li class="page" data-number='8'>8</li>
			<li class="page" data-number='9'>9</li>
			<li class="page" data-number='10'>10</li>
			<li class="page" data-number='11'>11</li>
			<li class="page" data-number="12">...</li>
			<li class="page" data-number='23'>23</li>
			<i data-number=''  class="btn_next " ><span>&#62;</span></i>
		</ul>
	</div>
<div class="b-popup" id="popup1">
    <div class="b-popup-content">
        <img src="" alt="">
	    <h2>Lorem ipsum dolor</h2>
	    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque saepe quis sapiente recusandae sequi! Id, dolor! Similique quasi vero earum ipsum ut?</p>
    </div>
</div>


 <div class="loader">
          <span></span>
        </div>

<!-- <script src="js/pagination.js" type="text/javascript"></script> -->

<script>
		function content() {
$.ajax({               
	url: "http://gallery.dev.webant.ru/api/photos?new=true&popular=false", 
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
</script>
<script src="js/popup2.js" type="text/javascript"></script>
</body>
</html>