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
            $weekList    = document.querySelector('.week-list'),
            output       = '';

        $day.innerHTML = today.day;
        $date.innerHTML = today.date +' '+ today.month +' '+ today.year;
        $location.innerHTML = weatherData.currentWeather.name + ', ' + weatherData.currentWeather.sys.country;

        $todayTemp.innerHTML = Number.parseInt(weatherData.currentWeather.main.temp) + '°C';
        $weatherType.innerHTML = weatherData.currentWeather.weather[0].description.slice(0,1).toUpperCase() + weatherData.currentWeather.weather[0].description.slice( 1, 9999);

        $feelsLike.innerHTML = Number.parseInt(weatherData.currentWeather.main.feels_like) + '°C';
        $humidity.innerHTML = weatherData.currentWeather.main.humidity + '%';
        
        // convert wind unit m/sec to km/hour
        $wind.innerHTML = Math.ceil(weatherData.currentWeather.wind.speed*3.6) + ' km/h';

        var test = '';
        $weekList.innerHTML = '';
        for(let i = 0; i < 4; i++){
            let li = document.createElement('li');

            if(i == 0){
                li.classList.add('active');
                li.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun day-icon"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                    <span class="day-name">${today.day.slice(0, 3)}</span>
                    <span class="day-temp">${Number.parseInt(weatherData.currentWeather.main.temp) + '°C'}</span>
                    `;
            } else {
                let icon = document.createElement('svg');
                if(i == 1){
                    icon = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud day-icon"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`;
                } else if(i == 2){
                    icon = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-snow day-icon"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line></svg>`;
                } else if(i == 3){
                    icon = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-rain day-icon"><line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path></svg>`;
                }

                li.innerHTML = `
                    ${icon}
                    <span class="day-name">${today.days[today.dayNumber++ + 1].slice(0, 3)}</span>
                    <span class="day-temp">${Number.parseInt(weatherData.next3DaysWeather.list[i].main.temp) + '°C'}</span>
                    `;
            }
            $weekList.appendChild(li);
        }

        let clear = document.createElement('div');
            clear.classList.add('clear');
        $weekList.appendChild(clear);
    }
}