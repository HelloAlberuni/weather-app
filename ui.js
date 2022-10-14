class UI{
    constructor() {
        const storage = new Storage();

        this.date_now = new Date();
        this.days = UI.getDays();
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

        // Full date
        let today = {};
        today.date  = this.date_now.getDate(),
        today.month = this.months[this.date_now.getMonth()].slice(0, 3),
        today.year  = this.date_now.getFullYear();
        
     
        this.day_name = this.days[this.date_now.getDay()];
        this.full_date = `${today.date} ${today.month} ${today.year}`;
        
        // Location
        this.location_name = storage.getLocation();
        this.country_code = '';

        if(!this.country_code){
            this.country_code = 'BD';
        }
    }

    static getDays(){
        return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    }

    update( weatherData ){

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

        // Update day name
        $day.textContent = this.day_name;

        // Update date
        $date.textContent = this.full_date;

        // Update location name
        $location.textContent = `${storage.getLocation()}, ${this.country_code}`;

        // Update temp
        $todayTemp.innerHTML = Number.parseInt(weatherData.current.temp) + '°C';

        // Update kind
        $weatherType.innerHTML = weatherData.current.temp_kind;

        // Feels like
        $feelsLike.innerHTML = Number.parseInt(weatherData.current.feels_like) + '°C';

        // Humidity
        $humidity.innerHTML = weatherData.current.humidity + '%';

        // Wind
        // convert wind unit m/sec to km/hour
        $wind.innerHTML = Math.round(weatherData.current.wind.toFixed(1) * 3.6) + ' km/h';

        // Next 4 days
        let $ul = document.createElement('ul');
            $ul.classList.add('week-list');

        // console.log(weatherData.next_days);
        $weekList.innerHTML = '';
        weatherData.next_days.map(function(item, i){

            let x = i + 1,
                date_now = new Date(),
                day_number = date_now.getDay();

            if( day_number <= 6 ){
                day_number = day_number + x;
            }

            if( day_number >= 7 ){
                day_number = day_number - 7;
            }
            
            let temp = item.main.temp,
                day_name = UI.getDays()[ + day_number];

            let icon = item.weather[0].icon,
                icon_desc = item.weather[0].description;

            let li = document.createElement('li');

            li.innerHTML += `<img title="${icon_desc}" src="//openweathermap.org/img/wn/${icon}@2x.png" />`;
            li.innerHTML += `<span class="day-name">${day_name.slice(0, 3)}</span>`;
            li.innerHTML += `<span class="day-temp">${Number.parseInt(temp) + '°C'}</span>`;
            $weekList.appendChild(li);
        });

        let clear = document.createElement('div');
            clear.classList.add('clear');
        $weekList.appendChild(clear);


        // $day.innerHTML = today.day;
        // $date.innerHTML = today.date +' '+ today.month +' '+ today.year;
        // $location.innerHTML = weatherData.currentWeather.name + ', ' + weatherData.currentWeather.sys.country;

        
        
        // // convert wind unit m/sec to km/hour
        // $wind.innerHTML = Math.ceil(weatherData.currentWeather.wind.speed*3.6) + ' km/h';

        
        // for(let i = 0; i < 4; i++){

        //     if(i == 0){
        //         li.classList.add('active');
        //         li.innerHTML = `
        //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun day-icon"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
        //             <span class="day-name">${today.day.slice(0, 3)}</span>
        //             <span class="day-temp">${Number.parseInt(weatherData.currentWeather.main.temp) + '°C'}</span>
        //             `;
        //     } else {
        //         let icon = document.createElement('svg');
        //         if(i == 1){
        //             icon = `
        //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud day-icon"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`;
        //         } else if(i == 2){
        //             icon = `
        //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-snow day-icon"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line></svg>`;
        //         } else if(i == 3){
        //             icon = `
        //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-rain day-icon"><line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path></svg>`;
        //         }

        //         li.innerHTML = `
        //             ${icon}
        //             <span class="day-name">${today.days[today.dayNumber++ + 1].slice(0, 3)}</span>
        //             <span class="day-temp">${Number.parseInt(weatherData.next3DaysWeather.list[i].main.temp) + '°C'}</span>
        //             `;
        //     }
        //     $weekList.appendChild(li);
        // }

        // let clear = document.createElement('div');
        //     clear.classList.add('clear');
        // $weekList.appendChild(clear);
    }
}