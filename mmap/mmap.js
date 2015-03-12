
var myLat;
var myLng;
var me;
var request;
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

    reportLocation(me);

    console.log("hi");
}


function reportLocation(pos) {

    request = new XMLHttpRequest();
    request.open("POST", "https://secret-about-box.herokuapp.com/sendLocation");
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.onreadystatechange = locateOthers;

    var login = "ErinHair";

    request.send("login=" + login +
                 "&lat="  + pos.lat() +
                 "&lng="  + pos.lng());

    console.log("Status: " + request.status);
}

function locateOthers() {
    if (request.readyState == 4) {
        if (request.status == 200) {
            console.log("hello");

            // JSON.parse(request.responseText)

            var others = JSON.parse(request.responseText);

            for(person in others) {
                console.log(others[person]["login"]);

                var person_pos = new google.maps.LatLng(others[person]["lat"], others[person]["lng"]);

                var person_marker = new google.maps.Marker({
                    position: person_pos,
                    title: "Here lies " + others[person]["login"];
                });

                person_marker.setMap(gmap);
            }





        } else {
            alert("Something went wrong. Please try again.");
        }
    }
}




