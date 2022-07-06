/*
Theme Name: CETUS – Creative Portfolio HTML5 Template
Theme URI: http://live.envalab.com/html/cetus
Author: ENVALAB
Author URI: https://themeforest.net/user/envalab/portfolio
Description: CETUS is minimal multi-purpose portfolio template suitable any agencies, portfolios, creative group, freelancers, artists, professionals and much more.
Version: 1.0
*/

(function($) {
    "use strict";
	
	/*----------------------------
    START - Main menu responsive
    ------------------------------ */
	$('.responsive-menu-show').on('click', function(){
		$(this).hide();
		$('.responsive-menu-hidden').show();
		$('.menubar-ul').show();
	});
	$('.responsive-menu-hidden').on('click', function(){
		$(this).hide();
		$('.responsive-menu-show').show();
		$('.menubar-ul').hide();
        $('.menubar-ul li.menuclick-dropdown-li a').parent().removeClass('has-active-dropdown');
		$('.menubar-ul li.menuclick-lii a.menuclick-lii-a').parent().removeClass('has-active');
		$('.search , .login-account , .create-account , .cart').hide();
	});
	$('.menubar-ul li.menuclick-lii a').addClass('menuclick-lii-a');
	$('.menubar-ul li.menuclick-dropdown-li a').removeClass('menuclick-lii-a');
	$('.menubar-ul li.menuclick-lii a.menuclick-lii-a').on('click', function () {
		$(this).parent().toggleClass('has-active');
        $(this).closest('li').siblings('.menuclick-lii').removeClass('has-active');
        $(this).closest('li').siblings('.menuclick-lii').toggleClass('has-inactive');
		$(this).parent().removeClass('has-inactive');
        $('.menubar-ul li.menuclick-dropdown-li a').parent().removeClass('has-active-dropdown');
    });
	$('.menubar-ul li.menuclick-dropdown-li a').on('click', function () {
		$(this).parent().toggleClass('has-active-dropdown');
		$(this).parent().removeClass('has-active');
        $(this).closest('li').siblings('.menuclick-dropdown-li').removeClass('has-active-dropdown');
        $(this).closest('li').siblings('.menuclick-dropdown-li').toggleClass('has-inactive-dropdown');
		$(this).parent().removeClass('has-inactive-dropdown');
    });
	
	/*----------------------------
    START - Menu hidden icon
    ------------------------------ */
	$('.searchclick').on('click', function(){
		$('.search').slideToggle("slow");
		$(".create-account , .cart , .login-account").hide("");
    });
	$('.loginclick').on('click', function(){
		$('.login-account').slideToggle("slow");
		$(".create-account , .cart , .search").hide("");
    });
	$('.cartclick').on('click', function(){
		$('.cart').slideToggle("slow");
		$(".create-account , .login-account , .search").hide("");
    });
	$('.login-to-create').on('click', function(){
		$('.create-account').show("");
		$(".login-account , .cart , .search").hide("");
    });
	$('.create-to-login').on('click', function(){
		$('.login-account').show("");
		$(".create-account , .cart , .search").hide("");
    });
	$('.shop-gridreset-search button').on('click', function(){
		$('.shop-gridreset-search-button').toggle();
	});
	
	/*----------------------------
    START - Smooth scroll animation
    ------------------------------ */
	$('.footer3 .footer-content a , .project-show ul li a').on('click', function () {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		&& location.hostname == this.hostname) {
		  var $target = $(this.hash);
		  $target = $target.length && $target
		  || $('[name=' + this.hash.slice(1) +']');
		  if ($target.length) {
			var targetOffset = $target.offset().top;
			$('html,body')
			.animate({scrollTop: targetOffset}, 2000);
		   return false;
		  }
		}
	});
	
	/*----------------------------
    START - scroll animation
    ------------------------------ */
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 120) {
			$('.stick-fixed').addClass("content-stick-fixed");
		} else {
			$('.stick-fixed').removeClass("content-stick-fixed");
		}
		if ($(this).scrollTop() > 1700) {
			$('.stick-fixed').removeClass("content-stick-fixed");
		}
	});
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 350) {
			$('.stick-fixed2').addClass("content-stick-fixed2");
		} else {
			$('.stick-fixed2').removeClass("content-stick-fixed2");
		}
		if ($(this).scrollTop() > 1400) {
			$('.stick-fixed2').removeClass("content-stick-fixed2");
		}
	});
	
	/*----------------------------
    START - Main Home Page Slider
    ------------------------------ */
	$('.main-slider').owlCarousel({
		autoplay: true,
		autoplayTimeout:4000,
		loop:true,
        nav:true,
        navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		dots: false,
		items:1
	});
	$('.service-slide').owlCarousel({
		autoplay: true,
		autoplayTimeout:4000,
		loop:true,
		responsive : {
			0 : {
				items: 1,
				margin: 0,
				slideBy: 1
			},
			576 : {
				items: 2,
				margin: 15,
				slideBy: 2
			},
			1000 : {
				items: 3,
				margin: 30,
				slideBy: 3
			}
		}
	});
	$('.client-slider , .product-detail-slider').owlCarousel({
		autoplay: true,
		autoplayTimeout: 9000,
		loop:true,
        nav:true,
        navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		dots: false,
		items:1
	});
	$('.client-sliding-cont').owlCarousel({
		autoplay: true,
		autoplayTimeout:4000,
		loop:true,
		dots: false,
		responsive : {
			0 : {
				items: 1,
			},
			300 : {
				items: 2,
			},
			480 : {
				items: 3,
			},
			768 : {
				items: 4,
			},
			1024 : {
				items: 5,
			}
		}
	});
	
	
    /* ======== Portfolio Activation =========*/

	$(window).on('load', function(){
	    $(".portfolio").isotope();
	    $(".home-portfolio .portfolio-menu ul li").on("click", function(){
	      $(".home-portfolio .portfolio-menu ul li").removeClass("active");
	      $(this).addClass("active");
	      var selector = $(this).attr('data-filter');
	      $(".portfolio").isotope({
	        filter: selector
	      })
	    });
	    
	    $(".team-member").isotope();
	    $(".team .portfolio-menu ul li").on("click", function(){
	      $(".team .portfolio-menu ul li").removeClass("active");
	      $(this).addClass("active");

	      var selector = $(this).attr('data-filter');
	      $(".team-member").isotope({
	        filter: selector
	      })

	    });
	    
	});
	
	/*----------------------------
    START - home-2
    ------------------------------ */
	$('.instragram-sliding-cont').owlCarousel({
		autoplay: true,
		autoplayTimeout:4000,
		loop:true,
		dots: false,
		responsive : {
			0 : {
				items: 1,
				margin: 0
			},
			300 : {
				items: 2,
				margin: 50
			},
			380 : {
				items: 2,
				margin: 100
			},
			480 : {
				items: 2,
				margin: 140
			},
			576 : {
				items: 3,
				margin: 60
			},
			768 : {
				items: 4,
				margin: 80
			},
			1199 : {
				items: 4,
				margin: 170
			},
			1300 : {
				items: 4,
				margin: 150
			}
		}
	});
	
	/*----------------------------
    START - home-4
    ------------------------------ */
	$('.home4-slider , .image-slide').owlCarousel({
		autoplay: true,
		autoplayTimeout:4000,
		loop:true,
        nav:true,
        navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		dots: false,
		items: 1
	});
	/*----------------------------
    START - home-6
    ------------------------------ */
	$('.home6-slider').owlCarousel({
		autoplay: true,
		autoplayTimeout:4000,
		loop:true,
        nav:true,
        navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		dots: false,
		responsive : {
			0 : {
				items: 1,
				margin: 0
			},
			992 : {
				items: 3,
				margin: 32
			},
			1500 : {
				items: 4,
				margin: 32
			}
		}
	});
	
	/*----------------------------
    START - home-5
    ------------------------------ */
	$('.client-slide-content').owlCarousel({
		autoplay: true,
		autoplayTimeout:4000,
		loop:true,
		dots: false,
		responsive : {
			0 : {
				items: 1
			},
			300 : {
				items: 2
			},
			768 : {
				items: 3
			},
			1024 : {
				items: 4
			},
			1300 : {
				items: 5
			}
		}
	});
	
	/*----------------------------
    START - about page
    ------------------------------ */
	$('.about-team-slider').owlCarousel({
		autoplay: true,
		autoplayTimeout:4000,
		loop:true,
		dots: true,
		responsive : {
			0 : {
				items: 1
			},
			300 : {
				items: 1
			},
			768 : {
				items: 2,
				slideBy: 2,
				margin: 30
			},
			991 : {
				items: 3,
				margin: 30,
				slideBy: 3
			}
		}
	});
	$('.member-slide').owlCarousel({
		autoplay: true,
		autoplayTimeout:5000,
        nav:true,
        navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		loop:true,
		dots: false,
		responsive : {
			0 : {
				items: 1
			},
			400 : {
				items: 2
			},
			768 : {
				items: 3
			},
			992 : {
				items: 4
			}
		}
	});
	$('.single-memb').owlCarousel({
		autoplay: true,
		autoplayTimeout:5000,
        nav:true,
        navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		loop:true,
		dots: false,
		responsive : {
			0 : {
				items: 1
			},
			768 : {
				items: 2,
				margin: 30
			},
			992 : {
				items: 3,
				margin: 30
			}
		}
	});
	$('.about-service-slider').owlCarousel({
		autoplay: true,
		autoplayTimeout:5000,
        nav:false,
		loop:true,
		dots: true,
		items: 1
	});
	
	/*----------------------------
    START - Element page
    ------------------------------ */
	$('.message-box-text1 .fa.fa-close').on('click', function (e) {
		$(".message-box1").hide("slow");
    });
	$('.message-box-text2 .fa.fa-close').on('click', function (e) {
		$(".message-box2").hide("slow");
    });
	$('.message-box-text3 .fa.fa-close').on('click', function (e) {
		$(".message-box3").hide("slow");
    });
	$('.message-box-text4 .fa.fa-close').on('click', function (e) {
		$(".message-box4").hide("slow");
    });
	$('.message-box-text5 .fa.fa-close').on('click', function (e) {
		$(".message-box5").hide("slow");
    });
	$('.message-box-text6 .fa.fa-close').on('click', function (e) {
		$(".message-box6").hide("slow");
    });
	$('.message-box-text7 .fa.fa-close').on('click', function (e) {
		$(".message-box7").hide("slow");
    });
	$('.message-box-text8 .fa.fa-close').on('click', function (e) {
		$(".message-box8").hide("slow");
    });
	$('.message-box-text9 .fa.fa-close').on('click', function (e) {
		$(".message-box9").hide("slow");
    });
	$('.message-box-text10 .fa.fa-close').on('click', function (e) {
		$(".message-box10").hide("slow");
    });
	
	$('.gallery-content-slide').owlCarousel({
		autoplay: true,
		autoplayTimeout:5000,
        nav:false,
		loop:true,
		dots: true,
		responsive : {
			0 : {
				items: 1,
				margin: 0
			},
			556 : {
				items: 2,
				margin: 30
			}
		}
	});
	
	$('.logo-client-slidee').owlCarousel({
		autoplay: true,
		autoplayTimeout:5000,
        nav:false,
		loop:true,
		dots: false,
		responsive : {
			0 : {
				items: 1,
				margin: 0
			},
			365 : {
				items: 2,
				margin: 10
			},
			556 : {
				items: 3,
				margin: 20
			},
			700 : {
				items: 4,
				margin: 20
			},
			992 : {
				items: 5,
				margin: 20
			},
			1024 : {
				items: 6,
				margin: 30
			}
		}
	});
	$('.bigimage-single-portfolio').owlCarousel({
		autoplay: true,
		autoplayTimeout:4000,
		loop:true,
		dots:true,
		responsive : {
			0 : {
				items: 1,
				margin: 0,
				slideBy: 1
			},
			576 : {
				items: 2,
				margin: 30,
				slideBy: 2
			},
			992 : {
				items: 3,
				margin: 30,
				slideBy: 3
			},
			1200 : {
				items: 4,
				margin: 30,
				slideBy: 4
			}
		}
	});
	
	/*----------------------------
    START - home-5
    ------------------------------ */
	/*--- Counterup ---- */
	$('.counter').counterUp({
		delay: 30,
		time: 2000
	});
	
	/*----------------------------
    START - shop page
    ------------------------------ */
	$('.shop-grid-list ul li.shop-dropdown').on('click', function(){
		$('.shop-grid-list ul li.shop-dropdown ul').toggleClass('shop-dropdown-toggle');
		return false;
	});
	
	/*----------------------------
    START - shop page
    ------------------------------ */
	$('.shopmycart-hidden .fa.fa-close').on('click', function (e) {
		$(".shopmycart-hidden").hide("fast");
    });
	$('.shopmycart-hidden2 .fa.fa-close').on('click', function (e) {
		$(".shopmycart-hidden2").hide("fast");
    });
	$('.product-details-star .leave-review').on('click', function (e) {
		$(this).toggleClass("leave-review-show");
		return false;
    });
	
	/*----------------------------
    START - Element circlechart animation
    ------------------------------ */
	$('.demo-1 , .demo-2 , .demo-3 , .demo-4').percentcircle({
		animate : false,
		bgColor: '#E2D7D1',
		fillColor: '#FD5959',
		percentSize: '18px',
	});
	$('.cir').css({
		'width': '144px',
		'height': '146px',
		'top':'2px',
		'left':'3px'
	});
	$('.perc').css({
		'width': '144px',
		'height': '150px',
		'lineHeight': '150px',
		'color': '#000'
	});
	$('.ab').css({
		'width': '150px',
		'height': '150px'
	});
	$(".demo-1 .perc").text("85%");
	$(".demo-2 .perc").html("<i class='fa fa-lock'></i>");
	$(".demo-3 .perc").html("<i class='fa fa-anchor'></i>");
	$(".demo-4 .perc").text("Your Text");
	
	/*----------------------------
    START - Preloader
    ------------------------------ */
	$(window).on('load', function(){
		$("#preloader").fadeOut(2000);
	});
	

})(jQuery);