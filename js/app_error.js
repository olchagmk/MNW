$( document ).ready(function() {
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
});