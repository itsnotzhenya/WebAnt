$(document).ready(function(){
    PopUpHide();
});
$('.picture img').click(function() {
	let $src = $(this).attr("src");
	$("#popup1 img").attr("src", $src);
	$("#popup1").show();
})
function PopUpHide(){
    $("#popup1").hide();
}
 $(".b-popup").click(function () {
        $("#popup1").hide();
    });