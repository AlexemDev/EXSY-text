$(document).ready(function(){
  function heightDetect() {
        $(".item").css("height", $(window).height());
    };
    heightDetect();
    $(window).resize(function() {
        heightDetect();
    });

    $('.popup-with-form').magnificPopup({
       removalDelay: 500,
       mainClass: 'mfp-fade'
    });

    $(".navbar ul a").mPageScroll2id({
      scrollSpeed: 500
    });


});
function myMap() {
  var myCenter = new google.maps.LatLng(54.21069, 36.61521);
  var mapProp = {center:myCenter, zoom:17, scrollwheel:true, draggable:true, disableDefaultUI: true, mapTypeId:google.maps.MapTypeId.ROADMAP};
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
}
