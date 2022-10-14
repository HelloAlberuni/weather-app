const ui = new UI();
const weather = new Weather();
const storage = new Storage();

// When page is loaded show weather data by default location
document.addEventListener('DOMContentLoaded', getWeather());

// Click on the change location button
$button = document.querySelector('.location-button');
$button.addEventListener('click', function(){
    let city_name = '';
    // Open modal
    document.querySelector('.location-select').style.display = 'block';

    if( city_name ){
        // Store the city name
        storage.setLocation( city_name );
        
        getWeather();
    }
});

function getWeather(){
    weather.getData().then( res => {
        // prepare weather data
        var weatherData = {
            current: {
                // city: '',
                // day: '',
                // full_date: '', // 00 jan 1669
                temp: res.currentWeather.main.temp,
                temp_kind: res.currentWeather.weather[0].description.slice(0,1).toUpperCase()+ res.currentWeather.weather[0].description.slice( 1, 9999),
                feels_like: res.currentWeather.main.feels_like,
                humidity: res.currentWeather.main.humidity,
                wind: res.currentWeather.wind.speed,
            },
            next_days: res.next3DaysWeather.list
        }

        ui.update(weatherData);
    });
}

// Close modal
document.querySelector('.modal .close').addEventListener('click', function(){
    document.querySelector('.modal').style.display = 'none';
});

// // Make HTTP Request
// let request = weather.getData();

// request.then(function(weatherData){
//     // update weather based on current location
//     let dateNow = new Date(),
//         days = ['Sunday', 'Monday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
//         months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

//     let today = {};
//     today.dayNumber = dateNow.getDay();
//     today.day = days[dateNow.getDay()];
//     today.days = days;
//     today.date = dateNow.getDate();
//     today.month = months[dateNow.getMonth()].slice(0, 3);
//     today.year = dateNow.getFullYear();
    
//     ui.updateWeather(today, weatherData);
// });





// update weather when user changed location
// ui.updateWeather(data);