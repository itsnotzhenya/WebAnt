$(document).ready(function(){
    $("#popup1").hide();
});
$(document).on("click","img",function() {
	let src = $(this).attr("src");
	$("#popup1 img").attr("src", src);
	$("#popup1").show();
})
 $(".b-popup").click(function () {
        $("#popup1").hide();
    });

	$('.pagination').hide();
	 function load(){
		setTimeout(function(){
			 $('.pagination').show();
		},5500);
		setTimeout(function(){
			 $('.load').hide();
		}, 5000);
	};