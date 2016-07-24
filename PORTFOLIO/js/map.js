var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 4,
    center: new google.maps.LatLng(10.773722, 106.661350),
    mapTypeId: google.maps.MapTypeId.TERRAIN,
    });


var places = [
  ['Ho Chi Minh City', 10.773722, 106.661350, 1, 'img/map/hochimin.jpg'],
  ['Bangkok', 13.706341, 100.522659, 2, 'img/map/hochimin.jpg'],
  ['Vientianne', 17.960100, 102.631855, 3, 'img/map/hochimin.jpg'],
  ['Siem Reap', 13.424887, 103.869121, 4, 'img/map/hochimin.jpg'],
  ['George Town', 5.389489, 100.251586, 5, 'img/map/hochimin.jpg'],
  ['Singapore', 1.354541, 103.816107, 6, 'img/learning/jekyll.png'],
  ['Bali', -8.363317, 115.142738, 7, 'img/map/hochimin.jpg'],
  ['Manila', 14.596075, 120.985659, 8, 'img/map/hochimin.jpg']
];



(function setMarker () { 
  for (var i = 0; i < places.length; i++) {
    var place = places[i];
    var marker = new google.maps.Marker({
      position: {lat: place[1], lng: place[2]},
      map: map,
      icon: "img/backpack.png"
    });
  };

  for (var i = 0; i < places.length; i++) {
    var place = places[i];
    var infowindow = new google.maps.InfoWindow({
      content:"<img src="+ place[4]+">",
      maxWidth: 200
    });
  };


marker.addListener('click', function() {
    //infowindow.open(map, marker);
    document.getElementById('route-map').innerHTML = infowindow.content;
  })
})();

/*
*/


/*var myLatLng = {lat: 10.773722, lng: 106.661350};

var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
marker.setMap(map);

var infowindow = new google.maps.InfoWindow({
      content:"<img src='img/map/hochimin.jpg'>",
      maxWidth: 200
});

marker.addListener('click', function() {
    //infowindow.open(map, marker);
    document.getElementById('route-map').innerHTML = infowindow.content;
  });*/