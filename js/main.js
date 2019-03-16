$(document).ready(function() {
	console.log("Скрипты подъехали")

	//slick
	$('.main__slider').slick({
		dots: true,
		infinite: false,
		arrows: true,
		slidesPerRow: 5,
    	rows: 2,
		prevArrow: $(this).find('.button--prev'),
  		nextArrow: $(this).find('.button--next'),
	});

	$('.small_slider').slick({
		dots: true,
		infinite: false,
		arrows: false
	});

	 $('.slider_for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider_nav'
	});
	$('.slider_nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider_for',
	  dots: true,
	  focusOnSelect: true
	});

	
	//mask
	$(function () {
		$('.input--tel').mask('+38(000) 000-00-00', {placeholder: "+38 (___)___-__-__"});
	})

	//counter
	$(function () {
		$('.minus').click(function () {
			var $input = $(this).parent().find('.counter__input');
			var count = parseInt($input.val()) - 1;
			count = count < 1 ? 1 : count;
			$input.val(count);
			$input.change();
			
		});
		$('.plus').click(function () {
			var $input = $(this).parent().find('.counter__input');
			$input.val(parseInt($input.val()) + 1);
			$input.change();
		
		});
	})
		

});



