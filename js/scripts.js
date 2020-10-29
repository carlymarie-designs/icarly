// A $( document ).ready() block.
$( document ).ready(function() {

	// check for document ready function	
  // console.log( "this thing is ready!" );

	// init Masonry
	var $grid = $('.grid').masonry({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  columnWidth: '.grid-sizer'
	});
	// layout Masonry after each image loads
	$grid.imagesLoaded().progress( function() {
	  $grid.masonry();
	});  


});