//Creating the map
var mymap = L.map('map').setView([37.757815,-107.5076402],4.5);

//geoJSON URL - where the data is coming from
var geoJSON_url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

//Setting tile layer
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(mymap);


//Adding legend to map for colors in map
let legend = new L.Control({position: 'bottomleft'});
legend.onAdd = function (map) {

    let div = L.DomUtil.create('div', 'info legend'),
        magnitudes = [0, 1, 2, 3, 4, 5];
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (let i = 0; i < magnitudes.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(magnitudes[i]) + '"></i> ' +
            magnitudes[i] + (magnitudes[i + 1] ? '&ndash;' + magnitudes[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(mymap);




//Reading geoJSON data and adding them to map
d3.json(geoJSON_url).then(record=>{
    
   //Array of features
    let JSON_features = record.features

    console.log(JSON_features)

    JSON_features.forEach(JSON_record=>{
       // console.log(JSON_record.properties)

       /*ASSGINING RELEVANT EARTHQUAKE PROPERTIES TO VARIABLES*/
        //Earthquake magnitude
        let magnitude = JSON_record.properties.mag

        //Latitude and longitude of each earthquake
        let latitude = JSON_record.geometry.coordinates[1];
        let longitude = JSON_record.geometry.coordinates[0];
 
        //Circle's color representing earthquake zone
        let color = getColor(magnitude);

        //Earthquake type
        let type = JSON_record.properties.type

        //Earthquake place
        let place = JSON_record.properties.place

        //Earthquake time
        let date = setTime(JSON_record.properties.time)


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
        //Defining the zone where the earthquake occurred, using latitude and longitude
        pointToLayer: function (feature, latlng) {
            
            //Setting the zone as a circle using latitude and longitude as its center. 
            //Circle's properties are defined by geojsonMarkerOptions value
            let eq_circle = L.circleMarker(L.latLng(latitude, longitude), geojsonMarkerOptions);

            //HTML text in Popup
            let HTML_popup_message = "<p><b>Type: </b>"+type+"<br><b>Place: </b>"+place+"<br><b>Magnitude: </b>"+magnitude+"<br><b>Date: </b>"+date+"<br></p>"
            
            //Adding a binding Popup for that circle with relevant info
            eq_circle.bindPopup(HTML_popup_message);
            
            return  eq_circle;
        }
         }).addTo(mymap);
    }
    )
    
})







