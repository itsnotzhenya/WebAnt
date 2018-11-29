$(document).on("click", ".pict" ,function() {
	let src = $(this).attr("src");
	$("#popup1 img").attr("src", src);
	$("#popup1").show();
})

$(document).mouseup(function (e) {
    let div = $("#popup1");
    if (div.has(e.target).length === 0){
        div.hide();
    }
});