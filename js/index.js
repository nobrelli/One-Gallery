(function($) {
	$('.masonry').masonry({
		itemSelector: '.masonry-brick',
		columnWidth: 360,
		fitWidth: true,
		gutter: 10,
		initLayout: true
	});
})(jQuery);