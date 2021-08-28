const weather = new Weather();
const ui = new UI();

// Make HTTP Request
let request = weather.getData();

request.then(function(weatherData){
    // update weather based on current location
    let dateNow = new Date(),
        days = ['Sunday', 'Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

    let today = {};
    today.day = days[dateNow.getDay()];
    today.date = dateNow.getDate();
    today.month = months[dateNow.getMonth()].slice(0, 3);
    today.year = dateNow.getFullYear();


    ui.updateWeather(today, weatherData);
});





// update weather when user changed location
// ui.updateWeather(data);