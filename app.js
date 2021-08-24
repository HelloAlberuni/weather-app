const weather = new Weather();
const ui = new UI();

// Make HTTP Request
let request = weather.getData();

request.then(function(data){
    // update weather based on current location
    console.log(data);
    ui.updateWeather();
});





// update weather when user changed location
// ui.updateWeather(data);