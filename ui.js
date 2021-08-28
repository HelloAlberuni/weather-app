class UI{
    updateWeather( today, weatherData ){
        let $day         = document.querySelector('.date-dayname'),
            $date        = document.querySelector('.date-day'),
            $location    = document.querySelector('.location'),
            $todayTemp   = document.querySelector('.weather-temp'),
            $weatherType = document.querySelector('.weather-desc'),
            $feelsLike   = document.querySelector('.precipitation .value'),
            $humidity    = document.querySelector('.humidity .value'),
            $wind        = document.querySelector('.wind .value'),
            $weekList    = document.querySelector('.week-list');

        $day.innerHTML = today.day;
        $date.innerHTML = today.date +' '+ today.month +' '+ today.year;
        $location.innerHTML = weatherData.currentWeather.name + ', ' + weatherData.currentWeather.sys.country;

        $todayTemp.innerHTML = Number.parseInt(weatherData.currentWeather.main.temp) + '°C';
        $weatherType.innerHTML = weatherData.currentWeather.weather[0].description.slice(0,1).toUpperCase() + weatherData.currentWeather.weather[0].description.slice( 1, 9999);

        // $feelsLike.innerHTML = weatherData.currentWeather.main.feels_like;
        $humidity.innerHTML = weatherData.currentWeather.main.humidity + '%';
        $wind.innerHTML = weatherData.currentWeather.wind.speed + ' km/h';

        console.log(weatherData);
    }
}