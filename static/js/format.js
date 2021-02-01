/**
 * Based on earthquake's magnitude, the color will be assigned to earthquake's zone represented by a circle
 * @param {decimal} magnitude 
 */
function getColor(magnitude){
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

    return color;
}

/**
 * sets Timestamp into a "Date + Time" format using 'en-US' locale
 * @param {timestamp} time Timestamp when the earthquake occurred
 */
function setTime(time){
    let date = new Date(time);

    //Getting time as string format to add it to Popup
    let timeString = " "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();

    //Options to display Date format 
    const options = { year: "numeric", month: "short", day: "numeric" }

    //Returns date and time using 'en-US' locale
    return date.toLocaleDateString("en-US", options)+timeString;
}
