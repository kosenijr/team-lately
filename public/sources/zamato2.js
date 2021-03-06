<script>
      var map, infoWindow;
      const config = { headers: {'user-key': 'bf0b007a082354a7c35efef48bf5a3c9'} };

      function zomatoAPICall(lat, lng){
        axios.get(`https://developers.zomato.com/api/v2.1/geocode?lat=${lat}&lon=${lng}`, config)
        .then(response => {
          console.log(response);
        })
      }

      
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.7484, lng: -73.9857},
          zoom: 12
        });
        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }
            infoWindow.setPosition(pos);
            infoWindow.setContent("Sean's House");
            infoWindow.open(map);
            map.setCenter(pos);

            // call zaboto
            zomatoAPICall(pos.lat, pos.lng);

          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          })
    
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      };
</script>