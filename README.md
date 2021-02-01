# Leaflet Project - Visualizing Data with Leaflet


### Before to Start

1. Repository for this project is in  `https://github.com/luzvazgal/leaflet-challenge`. 

2. Clone the new repository to your computer.

3. This project utilizes both **html** and **Javascript** 


## Project Structure

* index.html: Presentation page
* static/css: Style files
   * style.css
* static/js: Javascript files
   * config.js: Mapbox key (Go to https://account.mapbox.com/ to create an account and get an API key (token))
   * format.js: functions to format colors and time
   * logic.js: main leaflet logic Javascript code

## Project Description

### Level 1: Basic Visualization

![1-BasicMap](https://github.com/luzvazgal/leaflet-challenge/blob/main/images/Leaflet%20earthquake%20map.jpeg)

Your first task is to visualize an earthquake data set.

1. **Get your data set**

   The USGS provides earthquake data in a number of different formats, updated every 5 minutes. Visit the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and pick a data set to visualize. When you click on a data set, for example 'All Earthquakes from the Past 7 Days', you will be given a JSON representation of that data. You will be using the URL of this JSON to pull in the data for our visualization.

   For this project, data visualization used is : 

   <b> Past 7 days - M4.5+ Earthquakes  (https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson)</b>

2. **Import & Visualize the Data**

   Create a map using Leaflet that plots all of the earthquakes from your chosen data set based on their longitude and latitude.

   * Data markers reflect the magnitude of the earthquake in their size and color. Earthquakes with higher magnitudes appear larger and darker in color.

   Color based on earthquake magnitude are: 

      * 0-1 = #27AE60
      * 1-2 = #DAF7A6
      * 2-3 = #FFC300
      * 3-4 = #F39C12
      * 4-5 = #FF5733
      * 5+ = #900C3F 

   * Popups that provide additional information about the earthquake when a marker is clicked are included: 

      * Earthquake magnitude
      * Place: where the earthquake took place
      * Time: formatted from timestamp to 'en-us' locale
      * Type: of earthquake

   * Create a legend that will provide context for your map data.



