(function ($) {
	// increment value
	$('.qtyplus').click(function(e){
		e.preventDefault();
		fieldName = $(this).attr('for');
		var currentVal = parseInt($('input[id='+fieldName+']').val());
		if (!isNaN(currentVal)) {
			$('input[id='+fieldName+']').val(currentVal + 1);
		} else {
			$('input[id='+fieldName+']').val(0);
		}
	});
	$(".qtyminus").click(function(e) {
		e.preventDefault();
		fieldName = $(this).attr('for');
		var currentVal = parseInt($('input[id='+fieldName+']').val());
		if (!isNaN(currentVal) && currentVal > 0) {
			$('input[id='+fieldName+']').val(currentVal - 1);
		} else {
			$('input[id='+fieldName+']').val(0);
		}
	});
}(jQuery));