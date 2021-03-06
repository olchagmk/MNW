$( document ).ready(function() {
    //scroll
    var mob_head = document.getElementById("mob_head");
    $(window).scroll(function(){
        if ($(this).scrollTop() > $(".section_main").offset().top) {
            mob_head.style.transform = "rotate(-"+window.pageYOffset / 40 +"deg)";
        }
    });
    //Animation HOW
    $(window).scroll(function(){
        if ($(this).scrollTop() > $(".section_how").offset().top) {
            $(".howAnim").addClass('circle_white2');
            $(".howAnim2").addClass('circle_orange1');
            $(".howAnim3").addClass('circle_orange2');
        } else {
          $(".howAnim").removeClass("circle_white2");
          $(".howAnim2").removeClass("circle_orange1");
          $(".howAnim3").removeClass("circle_orange2");
        }
    });

    //Animation Callback
    $(window).scroll(function(){
        if ($(this).scrollTop() > $(".section_callback").offset().top - 350) {
            $(".callbackAnim").addClass('circle_blue');
            $(".callbackAnim2").addClass('circle_orange');
        } else {
          $(".callbackAnim").removeClass("circle_blue");
          $(".callbackAnim2").removeClass("circle_orange");
        }
    });
    //Modal
    document.getElementById('btn-modal').addEventListener('click', function() {
      document.getElementById('overlay').classList.add('is-visible');
      document.getElementById('modal').classList.add('is-visible');
    });

    document.getElementById('close-btn').addEventListener('click', function() {
      document.getElementById('overlay').classList.remove('is-visible');
      document.getElementById('modal').classList.remove('is-visible');
    });
    document.getElementById('overlay').addEventListener('click', function() {
      document.getElementById('overlay').classList.remove('is-visible');
      document.getElementById('modal').classList.remove('is-visible');
    });

    //HEADER STICKY
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
                    centerMove: false,
                    infinite: false,
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
     
});