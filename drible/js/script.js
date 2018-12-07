$('.popular').hover(function() {
	$('#popular').addClass('activeTab');
	if($('.popular').mouseout()) {
	$('#popular').removeClass('activeTab');
}
});

$('.popular').mouseout(function() {
	$('#popular').removeClass('activeTab');
})

$('.new').hover(function() {
	$('.new').addClass('activeTab');

})

$('.new').mouseout(function() {
	$('#new').removeClass('activeTab');
})

