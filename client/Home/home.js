import '../lib/googleMapApi.js';

var map;
var geocoder;
var BeachIcon = "../../public/images/beach.png";
var DataXMLSource = require("../components/constants/beach.json");

function initialize() {
  var mapOptions = {
    //center: new google.maps.LatLng(lat, lng),
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    draggable: true
  };

  map = new google.maps.Map(document.getElementById("map"),
    mapOptions);

  console.log('==> what is my map?', map, document.getElementById("map"));

  geocoder = new google.maps.Geocoder();
  getLocation();

  GetMarkersFromJSON();
}

function getLocation() {
  if (navigator.geolocation) {
    return navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;

  var currentPosition = new google.maps.LatLng(lat, lng);

  map.setCenter(currentPosition);
}

function AddMarker(lat, lng, title, icon) {
  return new google.maps.Marker({
    position: new google.maps.LatLng(lat, lng),
    map: map,
    title: title,
    icon: icon
  });
}

function CodeAddress(address) {
  var address = document.getElementById('address').value;
  geocoder.geocode({ 'address': address }, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      map.setCenter(results[0].geometry.location);
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

function GetMarkersFromXML() {
  console.log('==> GetMarkersFromXML');
  // For more information on doing XMLHR with jQuery, see these resources:
  // http://net.tutsplus.com/tutorials/javascript-ajax/use-jquery-to-retrieve-data-from-an-xml-file/
  // http://marcgrabanski.com/article/jquery-makes-parsing-xml-easy
  jQuery.get(DataXMLSource, {}, function (data) {
    jQuery(data).find("marker").each(function () {

      var marker = jQuery(this);
      console.log('==> marker:', marker);

      var dataMarker = AddMarker(parseFloat(marker.attr("lat")), parseFloat(marker.attr("lng")), marker.attr("title"), BeachIcon);

      var infowindow = new google.maps.InfoWindow(
        {
          content: "<a target='blank' href='" + marker.attr("link") + "'>" + marker.attr("title") + "</a>" + "<br />",
          //+ marker.attr("lat") + "," + marker.attr("lng"),
          size: new google.maps.Size(50, 50)
        });
      //{
      //	//content: "<a target='blank' href='" + marker.attr("link") + "'>" + marker.attr("title") + "</a>",
      //	content: marker.attr("title"),
      //	size: new google.maps.Size(50, 50)
      //});

      //infowindow.open(map, dataMarker);

      google.maps.event.addListener(dataMarker, 'click', function () {
        map.setZoom(10);
        map.setCenter(dataMarker.getPosition());
        infowindow.open(map, dataMarker)
      });
    });
  })
    .fail(function () {
      alert("error");
    });
}

function TestAJAX() {
  var url: "http://api.wunderground.com/api/ade0476a71159cf7/conditions/q/5.480213,100.253903.json";
  // Assign handlers immediately after making the request,
  // and remember the jqxhr object for this request
  var jqxhr = $.get("../data.xml", function () {
    alert("success");
  })
    .done(function () {
      alert("second success");
    })
    .fail(function () {
      alert("error");
    })
    .always(function () {
      alert("finished");
    });

  //Perform other work here ...

  // Set another completion function for the request above
  jqxhr.always(function () {
    alert("second finished");
  });
}

function GetMarkersFromJSON() {
  DataXMLSource.forEach(function (item) {
    var dataMarker = AddMarker(parseFloat(item.lat), parseFloat(item.lng), item.title, "/images/beach.png");

    var infowindow = new google.maps.InfoWindow(
      {
        content: "<a target='blank' href='" + item.link + "'>" + item.title + "</a>" + "<br />",
        //+ marker.attr("lat") + "," + marker.attr("lng"),
        size: new google.maps.Size(50, 50)
      });
    //{
    //	//content: "<a target='blank' href='" + marker.attr("link") + "'>" + marker.attr("title") + "</a>",
    //	content: marker.attr("title"),
    //	size: new google.maps.Size(50, 50)
    //});

    //infowindow.open(map, dataMarker);

    google.maps.event.addListener(dataMarker, 'click', function () {
      map.setZoom(10);
      map.setCenter(dataMarker.getPosition());
      infowindow.open(map, dataMarker)
    });
  });
}

google.maps.event.addDomListener(window, 'load', initialize);