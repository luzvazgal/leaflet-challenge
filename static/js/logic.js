//Creating the map
var mymap = L.map('map').setView([37.757815,-107.5076402],4.5);
var geoJSON_url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

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
 
        let color = "";
        //Setting circle color according to magnitude
        switch (Math.floor(magnitude)){
            case 0:     //Magnitude 0-1
                color = "#27AE60";
                break;
            case 1:     //Magnitude 1-2
                color = "#DAF7A6";
                break;
            case 2:     //Magnitude 2-3
                color = "#FFC300";
                break;
            case 3:     //Magnitude 3-4
                color = "#F39C12";
                break;
            case 4:     //Magnitude 4-5
                color = "#FF5733";
                break;
            case 5:     //Magnitude 5-6
                color = "#900C3F";
                break;
            default:    //Magnitude 6+
                color = "#900C3F"; 
                break;
        }


        //Options to draw each Circle marker representing an earthquake
        let geojsonMarkerOptions = {
            radius: magnitude*4,              //Setting the circle marker radius according to earthquake magnitude
            fillColor: color,
            color: 'grey',
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



