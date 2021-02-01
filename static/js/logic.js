//Creating the map
var mymap = L.map('map').setView([37.757815,-122.5076402],5);
var geoJSON_url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson"

//Setting tile layer
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(mymap);


//Reading geoJSON data and adding them to map

d3.json(geoJSON_url).then(record=>{
    
   //Array of features
    let JSON_features = record.features

    console.log(JSON_features)

    JSON_features.forEach(JSON_record=>{
       // console.log(JSON_record.properties)

        //Earthquake magnitude
        let magnitude = JSON_record.properties.mag

        //Latitude and longitude of each earthquake
        let latitude = JSON_record.geometry.coordinates[1];
        let longitude = JSON_record.geometry.coordinates[0];
 

        //Options to draw each Circle marker representing an earthquake
        let geojsonMarkerOptions = {
            radius: magnitude*3,              //Setting the circle marker radius according to earthquake magnitude
            fillColor: "#ff7800",
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        };


        //Adding geoJSON layer with circle markers to map
        L.geoJSON(JSON_record, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(L.latLng(latitude, longitude), geojsonMarkerOptions);
        }
    }).addTo(mymap);

    }
    )
    
})



