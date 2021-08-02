$( document ).ready(function() {
     $(function() {
      menu_top = $('header').offset().top;
      $(window).scroll(function () {
        if ($(window).scrollTop() > menu_top) { 
          $("header").addClass("nav-up");
        } else {
          $("header").removeClass("nav-up");
        }
      });
    });

    var elemWrap = $("body");
    var elemMove = $(".movingImg");
    function showAllObjects (object) {
            object.fadeIn(900);
    }
    function moving (object, speed) {
        elemWrap.on('mousemove', function(event) {
            var X = Math.floor((event.pageX)/speed-20) + "px";
            var Y = Math.floor((event.pageY)/speed) + "px"; 
            object.css('transform', 'translate('+X+' , '+Y+')');
        });
    }
    function moveAll (object) {
        moving($(object[0]),90);
        moving($(object[1]),90);
        moving($(object[2]),90);
        moving($(object[3]),90);
        moving($(object[4]),90);    
    }
    showAllObjects(elemMove);
    moveAll(elemMove);

    $(".content").click(function(){
        $(".mob_nav").removeClass("is-active");
        $(".menu_box").removeClass("is-active");
        $(".hamburger").removeClass("is-active");
    });
    //menu
    $(".menu_box").click(function(){
        $(this).toggleClass("is-active");
        $(this).find('.hamburger').toggleClass("is-active");
        $('.mob_nav').toggleClass('is-active');
    });
    //sliders
    $('.carousel').not('.unslick').each(function() {
        var slickInduvidual = $(this);
        var slideCount = null;
        slickInduvidual.on('init', function(event, slick) {
            slideCount = slick.slideCount;
            setSlideCount();
            setCurrentSlideNumber(slick.currentSlide);
        });
        slickInduvidual.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            setCurrentSlideNumber(nextSlide);
        });
        slickInduvidual.slick({
            infinite: false,
            arrows: true,
            centerMode: true,
            centerPadding: '0px',
            infinite: true,
            slidesToShow: +$(this).attr('data-items-xl'),
            slidesToScroll: +$(this).attr('data-scroll-xl'),
            responsive: [{
                breakpoint: 1920,
                settings: {
                    slidesToShow: +$(this).attr('data-items-xl'),
                    slidesToScroll: +$(this).attr('data-scroll-xl'),
                }
            },
            {
                breakpoint: 1365,
                settings: {
                    slidesToShow: +$(this).attr('data-items-lg'),
                    slidesToScroll: +$(this).attr('data-scroll-lg'),
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: +$(this).attr('data-items-md'),
                    slidesToScroll: +$(this).attr('data-scroll-md'),
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: +$(this).attr('data-items-sm'),
                    slidesToScroll: +$(this).attr('data-scroll-sm'),
                }
            }
            ]
        });

        function setSlideCount() {
            var $el = slickInduvidual.closest('.section').find('.to');
            $el.text((slideCount > 9) ? slideCount : '0' + +slideCount);
        }

        function setCurrentSlideNumber(currentSlide) {
            var $el = slickInduvidual.closest('.section').find('.from');
            $el.text((currentSlide > 8) ? currentSlide + 1 : '0' + +(currentSlide + 1));
        }

        
        $(' button.prev').click(function() {
            $(this).closest('.section').find(".carousel").slick('slickPrev');
        });
        $(' button.next').click(function() {
            $(this).closest('.section').find(".carousel").slick('slickNext');
        });
        //console.log(slideCount);
    });
    
    function isVisibleElementOnScreen(selector) {
        if (!selector.length) {
            return;
        }

        var targetElement = $(selector),
            windowHeight = $(window).outerHeight(),
            scrolledTopNow = $(window).scrollTop();

        targetElement.height = targetElement.outerHeight();
        targetElement.offsetBoundaryTop = targetElement.offset().top;
        targetElement.offsetBoundaryBottom = targetElement.offsetBoundaryTop + targetElement.height;

        if (scrolledTopNow + windowHeight / 2 >= targetElement.offsetBoundaryTop && scrolledTopNow + windowHeight / 2 < targetElement.offsetBoundaryBottom) {
            return true;
        } else {
            return false;
        }
    }

    var coefficient = 4;
    var first_list_item = $(".section_clients .clients .client_item:nth-child(1)");
    var last_list_item = $(".section_clients .clients .client_item:nth-child(3)");
    var last_list_item_margin = last_list_item.css("margin-top"); 
    var parse_last_list_item_margin = parseInt(last_list_item_margin);
    last_list_item_margin = parse_last_list_item_margin;
    first_list_item_margin = 0;

    function testScroll() {
        var position = $(window).scrollTop(); 
        $(window).scroll(function() {

            if (isVisibleElementOnScreen($(".section_clients .clients")) && $(window).width() > 767) {
                var scroll = $(window).scrollTop();
                if(scroll > position) {
                last_list_item_margin = last_list_item_margin - coefficient;
                first_list_item_margin = first_list_item_margin + coefficient;
                if(last_list_item_margin < 0) {
                    last_list_item_margin = 0;
                }
                if(first_list_item_margin > parse_last_list_item_margin) {
                    first_list_item_margin = parse_last_list_item_margin;
                }
                last_list_item.css("margin-top", ""+last_list_item_margin+"" + "px");
                first_list_item.css("margin-top", ""+first_list_item_margin+"" + "px");
                } else {
                last_list_item_margin = last_list_item_margin + coefficient;
                first_list_item_margin = first_list_item_margin - coefficient;
                if(last_list_item_margin > parse_last_list_item_margin) {
                    last_list_item_margin = parse_last_list_item_margin;
                }
                if(first_list_item_margin < 0) {
                    first_list_item_margin = 0;
                }
                last_list_item.css("margin-top", ""+last_list_item_margin+"" + "px");
                first_list_item.css("margin-top", ""+first_list_item_margin+"" + "px");
                }
                position = scroll;
            }
            // else {
            //     last_list_item_margin = parse_last_list_item_margin;
            //     first_list_item_margin = 0;
            //     last_list_item.css("margin-top", ""+last_list_item_margin+"" + "px");
            //     first_list_item.css("margin-top", ""+first_list_item_margin+"" + "px");
            // }
        });
    }
    testScroll();

     
});