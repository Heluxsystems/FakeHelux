
/* Portfolio */
$(window).load(function() {
    var $cont = $('.portfolio-group');
    
    $cont.isotope({
        itemSelector: '.portfolio-group .portfolio-item',
        masonry: {columnWidth: $('.isotope-item:first').width(), gutterWidth: -20, isFitWidth: true},
        filter: '*',
    });

    $('.portfolio-filter-container a').click(function() {
        $cont.isotope({
            filter: this.getAttribute('data-filter')
        });

        return false;
    });

    var lastClickFilter = null;
    $('.portfolio-filter a').click(function() {

        //first clicked we don't know which element is selected last time
        if (lastClickFilter === null) {
            $('.portfolio-filter a').removeClass('portfolio-selected');
        }
        else {
            $(lastClickFilter).removeClass('portfolio-selected');
        }

        lastClickFilter = this;
        $(this).addClass('portfolio-selected');
    });

});

/* Image Hover  - Add hover class on hover */
$(document).ready(function(){
    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".image-hover figure").click(function(e){
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".close-overlay").click(function(e){
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".image-hover figure").hasClass("hover")) {
                $(this).closest(".image-hover figure").removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        $(".image-hover figure").mouseenter(function(){
            $(this).addClass("hover");
        })
        // handle the mouseleave functionality
        .mouseleave(function(){
            $(this).removeClass("hover");
        });
    }
});

// thumbs animations
$(function () {
    
    $(".thumbs-gallery i").animate({
             opacity: 0
    
          }, {
             duration: 300,
             queue: false
          });

   $(".thumbs-gallery").parent().hover(
       function () {},
       function () {
          $(".thumbs-gallery i").animate({
             opacity: 0
          }, {
             duration: 300,
             queue: false
          });
   });
 
   $(".thumbs-gallery i").hover(
      function () {
          $(this).animate({
             opacity: 0
    
          }, {
             duration: 300,
             queue: false
          });

          $(".thumbs-gallery i").not( $(this) ).animate({
             opacity: 0.4         }, {
             duration: 300,
             queue: false
          });
      }, function () {
      }
   );

});

// Mobile Menu
/*$(function(){
    $('#hornavmenu').slicknav();
    $( "div.slicknav_menu" ).addClass( "hidden-lg" );
});*/

// Stellar Parallax
$(function(){
  if (Modernizr.touch) {
      } else {
          $(window).stellar({
      horizontalScrolling: false
    });
  }
});

///* affix the navbar after scroll below header */
//$('#nav'< '#header').affix({
//      offset: {
//        top: $('#header').height()-$('#header').height()
//      }
//});	

///* highlight the top nav as scrolling occurs */
//$('body').scrollspy({ target: '#nav' })
//
///* smooth scrolling for scroll to top */
//$('.scroll-top').click(function(){
//  $('body,html').animate({scrollTop:0},1000);
//})

///* smooth scrolling for nav sections */
//$('#nav .navbar-nav li>a').click(function(){
//  var link = $(this).attr('href');
//  var posi = $(link).offset().top;
//  $('body,html').animate({scrollTop:posi},700);
//});

(function ($) {
  $(document).ready(function(){
    
	// hide .navbar first
	$(".navbar").hide();
	
	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 500) {
				$('.navbar').fadeIn();
			} else {
				$('.navbar').fadeOut();
			}
		});
	});
});
  }(jQuery));

$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});


$('.trigger').click(function(e){
    e.preventDefault();
    $.popcircle('#pops',
      {
        spacing:'20px',
        type:'full', // full, half, quad
        offset: '7', // 0, 1, 2, 3, 4, 5, 6, 7 or 5.1
        ease:'easeOutElastic',
        time:'slow' // slow, fast, 1000
      }
    );
}); 


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}


$('.cd-slider-nav li').on('click', function(event){
	event.preventDefault();
	var selectedItem = $(this);
	if(!selectedItem.hasClass('selected')) {
		// if it's not already selected
		var selectedPosition = selectedItem.index(),
			activePosition = $('.cd-hero-slider .selected').index();
		if( activePosition < selectedPosition) {
			nextSlide($('.cd-hero-slider'), $('.cd-slider-nav'), selectedPosition);
		} else {
			prevSlide($('.cd-hero-slider'), $('.cd-slider-nav'), selectedPosition);
		}
		
		updateNavigationMarker(selectedPosition+1);
	}
});




$(function(){ /* to make sure the script runs after page load */

    $('a.read_more').click(function(event){ /* find all a.read_more elements and bind the following code to them */

        event.preventDefault(); /* prevent the a from changing the url */
        $(this).parents('.item').find('.more_text').show(); /* show the .more_text span */

    });

});



    
