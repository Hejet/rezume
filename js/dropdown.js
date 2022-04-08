// Настройка выпадающего окна при посощи jQuery

$(document).ready(function () {
	$('.education-study01-wrapper').click(function (event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});
$(document).ready(function () {
	$('.education-study02-wrapper').click(function (event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});
$(document).ready(function () {
	$('.education-work01-wrapper').click(function (event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});
$(document).ready(function () {
	$('.education-work02-wrapper').click(function (event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});
$(document).ready(function () {
	$('.education-work03-wrapper').click(function (event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});