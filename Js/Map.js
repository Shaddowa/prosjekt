function initMap(){
    var location = {
        lat: 59.947322, lng: 10.814999
    
    };

    var map = new google.maps.Map(document.getElementById("map"),{
        zoom: 16, 
        center: location
    });


    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}