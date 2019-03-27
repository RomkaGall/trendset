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
  		 responsive: [
	    {
	      breakpoint: 1700,
	      settings: {
	        slidesPerRow: 4,
	      }
	    },
	     {
	      breakpoint: 1440,
	      settings: {
	        slidesPerRow: 3,
	      }
	    },

	    {
	      breakpoint: 900,
	      settings: {
	        slidesPerRow: 2,
	      }
	    },

	    {
	      breakpoint: 600,
	      settings: {
	        slidesPerRow: 1,
	      }
	    },
	  ]
	});

	$('.slider__with-3-items').slick({
		dots: true,
		infinite: false,
		arrows: true,
		slidesPerRow: 3,
    	rows: 2,
		prevArrow: $(this).find('.button--prev'),
  		nextArrow: $(this).find('.button--next'),
  		responsive: [
	    {
	      breakpoint: 992,
	      settings: {
	      	slidesPerRow: 2,
 	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	      	slidesPerRow: 1,
 	      }
	    },
	     
	  ]
	});

	$('.small_slider').slick({
		dots: true,
		infinite: false,
		arrows: false
	});

	 $('.slider_for').slick({
	 	infinite: false,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider_nav',
	  adaptiveHeight: true
	});
	$('.slider_nav').slick({
		infinite: false,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider_for',
	  dots: true,
	  focusOnSelect: true
	});

	$('.slider_with_big_slides').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  prevArrow: $(this).find('.button--prev'),
  	  nextArrow: $(this).find('.button--next'),
		infinite: false,
		dots: true,

		responsive: [
	    {
	      breakpoint: 1100,
	      settings: {
	      	slidesToShow: 2,
 	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
	      	slidesToShow: 1,
 	      }
	    },
	     
	  ]
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

	//language toggler
	
	$(function() {
		$(".select-placeholder").click(function () {
		$(this).closest('.language').find('.language__list').slideToggle('fast');
	});
	$('.language-list__item').on('click', function(){
		$(this).closest('.language').find('.language-list__item').removeClass('checked');
		$(this).addClass('checked');
		var value = $(this).attr('data-value');
		$(this).closest('.language').find('.select-placeholder').text(value);
		$(this).closest('.language').find('.select-placeholder').attr('data-value', value);
		$(this).closest('.language').find('.language__list').animate({height: 'hide'}, 100); 
	});
	})	

	// hamburger
	$('.menu_toggle').click(function(){
		$(this).toggleClass('open');

		$('.header__mobile').toggleClass('open');
	});	

	// sidebar btn
	$('.sidebar_show_btn').click(function(){
		$(this).toggleClass('open');

		$('.sidebar').toggleClass('open');
	});	

});



