// JavaScript Document
$(document).ready(function () {
	$("#category").on("change", function() {
		let categoryId = $(this).val();
		let sectionOffset = $('#' + categoryId).offset().top;
		$('html, body').stop().animate({ scrollTop: sectionOffset - 50 }, 800);
	});
	
	$('[data-toggle="tooltip"]').tooltip()
	
	var btn = $('#button-top');
	$(window).scroll(function () {
		if ($(window).scrollTop() > 300) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});

	btn.on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, '300');
		btn.removeClass('show');
	});
})