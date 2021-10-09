( function(){
  window.onload = function(){
    console.log("hello");
    var myLatlng   = new google.maps.LatLng(34.0201613, -118.6919133);
    var mapOptions = {
      zoom: 10,
      center: myLatlng,
      mapTypeId: 'roadmap'
    };
    const map = new google.maps.Map(document.getElementById('roadmap'), mapOptions);
    $.getJSON("https://api.jsonbin.io/b/6157b0d09548541c29bc48c5", function (json){
        var data = json.markers;
        data.forEach (function(item){
          
          var pin = new google.maps.LatLng(item.lat, item.long);
          var marker = new google.maps.Marker({ 
            position: pin, 
             map: map, title: item.title
             });

             marker.setMap(map);
          
        });
      
      });
  }
}) ();

