
var myLat;
var myLng;
var me;
var request = new XMLHttpRequest();
var gmap;
var meMarker;

function init() {

    /* Initialize map, zoom in on Tufts */

    var map_canvas = document.getElementById("map_canvas");
    var tufts = new google.maps.LatLng(42.406484, -71.119023);
    var options = {zoom: 15, center: tufts};

    gmap = new google.maps.Map(map_canvas, options);


    locateMe();
}

function locateMe() {

    if (navigator.geolocation) { // the navigator.geolocation object is supported on your browser
        navigator.geolocation.getCurrentPosition(function(position) {
            myLat = position.coords.latitude;
            myLng = position.coords.longitude;
            renderMap();
        });
    } else {
        alert("Please try a different browser.");
    }
}

function renderMap() {
    me = new google.maps.LatLng(myLat, myLng);

    gmap.panTo(me);

    marker = new google.maps.Marker({
                position: me,
                title: "Here I Am!"
    });
    marker.setMap(gmap);

    console.log("hi");
}









