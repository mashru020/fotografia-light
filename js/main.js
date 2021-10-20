$(document).ready(function() {
	new WOW().init();
	$(document).on('click', 'button.navbar-toggler', function() {
  		$('.side-nav').toggleClass('show')
  	});
  	$(document).on('click', '.side-nav button.cross', function() {
  		$('.side-nav').removeClass('show')
  	});
  	$(document).on('mouseover' , '.dropdown button.dropdown-toggle' , function() {
  		$('.navbar-nav').find('.dropdown-menu').removeClass('show');
  		$(this).parent('.dropdown').find('.dropdown-menu').addClass('show');
  	});
  	$(document).on('mouseleave','.dropdown-menu',function() {
  		$(this).removeClass('show');
  	});
  	$(document).on('mouseleave', '.navbar', function() {
  		$('.navbar').find('.dropdown-menu.show').removeClass('show');
  	});
  	$(document).on('mouseleave', '.side-nav', function() {
  		$('.side-nav').find('.dropdown-menu.show').removeClass('show');
  	});
  	$('.popup-gallery').each(function() {
        var $imageLinks = $(this).find('.popup-image');
        var items = [];
        $imageLinks.each(function() {
            var $item = $(this);
            var type = 'image';
            if ($item.hasClass('video')) {
                type = 'iframe';
            }
            var magItem = {
                src: $item.attr('href'),
                type: type
            };
            magItem.title = $item.data('title');    
            items.push(magItem);
        });
        $imageLinks.magnificPopup({
            mainClass: 'mfp-fade',
            items: items,
            gallery:{
                enabled:true,
                tPrev: $(this).data('prev-text'),
                tNext: $(this).data('next-text')
            },
            type: 'image',
            callbacks: {
                beforeOpen: function() {
                    var index = $imageLinks.index(this.st.el);
                    if (-1 !== index) {
                    this.goTo(index);
                    }
                }
            }
        });
    });
	$('.popup-insta').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small></small>';
			}
		}
	});
	$('.popup-product-image').magnificPopup({
		type: 'image'
	});
	$('.services-slider').slick({
		arrows: false,
	  dots: true,
	  infinite: true,
	  speed: 800,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	  ]
	});
	$('.testimonial-slider').slick({
		arrows: false,
	  dots: true,
	  infinite: true,
	  speed: 800,
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	  ]
	});
	$(".backstage-photo-slider").slick({
        dots: true,
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 1
     });
	$(".best-seller-slider").slick({
        dots: true,
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 1
     });
	$( "#datepicker-footer" ).datepicker();
	$( "#datepicker-booking" ).datepicker();
  	
  	$('#portrait').LineProgressbar({
		percentage: 97,
		duration: 3000
	});
  	$('#life-style').LineProgressbar({
  		percentage: 80,
  		duration: 3000
  	});
  	$('#fashion').LineProgressbar({
  		percentage: 75,
  		duration: 3000
  	});
  	$('#studio').LineProgressbar({
  		percentage: 90,
  		duration: 3000
  	});

  	$(document).on('mouseover', '.skills-bar div', function() {
  		$('.skills-bar div').not(this).removeClass('hover');
  		$(this).addClass('hover');
  	});
  	$(document).on('click','.comment .reply-btn', function() {
  		$(this).parents('.comment').find('.write-reply').slideToggle();
  	});
	/*============== video ===============*/
	var video = document.querySelector(".behind-the-seen-video video");
	var bar = document.querySelector(".progress-bar-flag");
	var btn = document.getElementById("play-pause");

	function togglePlayPause() {
		if(video.paused){
			btn.className = 'pause';
			video.play();
		}
		else{
			btn.className = 'play';
			video.pause();
		}
	}
	$(document).on('click', '#play-pause' , function() {
		togglePlayPause();
	});
	if (video) {
	video.addEventListener('timeupdate', function() {
		var barPos = video.currentTime / video.duration ;
		bar.style.width = barPos * 100 + "%";
	});
	}
	/*============     Product Detailas slider     ==========*/
	$('.product-image-slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.product-image-nav'
	});
	$('.product-image-nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.product-image-slider',
	  dots: false,
	  focusOnSelect: true
	});
	$('.product-image-slider').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small></small>';
			}
		}
	});
	$("#quantity" ).spinner();
	$("#size").selectmenu();
	$('.related-products-slider').slick({
		arrows: false,
	  dots: true,
	  infinite: true,
	  speed: 800,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  responsive: [
	    {
	      breakpoint: 1199,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	  ]
	});
	$('#time-counter').flipper('init');
	$(document).on('click','button.forget',function(e){
		e.preventDefault();
		$('.login-content').removeClass('show'); 
		$('.forget-pass-content').addClass('show');
	});
	$(document).on('click','button.signup-btn',function(e){
		e.preventDefault();
		$('.login-content').removeClass('show'); 
		$('.forget-pass-content').removeClass('show');
		$('.signup-content').addClass('show');
	});
	$(document).on('click','button.login-btn',function(e){
		e.preventDefault();
		$('.signup-content').removeClass('show'); 
		$('.forget-pass-content').removeClass('show');
		$('.login-content').addClass('show');
	});
});

var gallery = $('.gallery-body');
if (gallery.length) {
    var mixer = mixitup(gallery, {
        animation: {
            animateResizeContainer: false
        }
    });
}
var blogFillter = $('.blog-fillter');
if (blogFillter.length) {
	var mixer = mixitup(blogFillter, {
        animation: {
            animateResizeContainer: false
        }
    });
}
new WOW().init();