$(document).on("click",".picture img",function(){
	console.log($(this).attr("src"));
	let src = $(this).attr("src")
	let name = $(this).data("name");
	let description = $(this).data("description");

	$("#popup img").attr("src", src);
	$("#popup h2").text(name);
	$("#popup p").text(description);
	$("#popup").show(); 		
	}) 

$(document).mouseup(function (e) {
    let div = $("#popup");
    if (div.has(e.target).length === 0){
        div.hide();
    }
});