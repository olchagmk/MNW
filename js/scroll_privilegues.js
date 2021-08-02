$( document ).ready(function() {
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
    var first_list_item = $(".section_privileges .privileges_block .privilege_item__inner");
    first_list_item_margin = 0;
    function testScroll() {
        var position = $(window).scrollTop(); 
        $(window).scroll(function() {
            if (isVisibleElementOnScreen($(".section_privileges .privileges_block")) && $(window).width() > 767) {
                var scroll = $(window).scrollTop();
                if(scroll > position) {
                first_list_item_margin = first_list_item_margin - coefficient;
                
                first_list_item.css("margin-top", ""+first_list_item_margin+"" + "px");
                } else {
                first_list_item_margin = first_list_item_margin + coefficient;
                if(first_list_item_margin < 0) {
                    first_list_item_margin = 0;
                }
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