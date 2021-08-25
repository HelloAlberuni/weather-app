class Weather{
    constructor(){
        this.city = 'dhaka';
        this.apiKey = '4b45462b359fda05021d1bb246b299e6';
        this.daysCount = 4;
    }

    async getData(){
        let currentWeatherResponse = await fetch(`//api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);
        console.log(currentWeatherResponse);
        // console.log(response);
        let currentWeather = await currentWeatherResponse.json();

        // let next3DaysResponse =  await fetch(`//api.openweathermap.org/data/2.5/forecast/daily?q=${this.city}&cnt=${this.daysCount}&appid=${this.apiKey}`);
        // let next3DaysWeather = await next3DaysResponse.json();

        return {
            currentWeather,
            // next3DaysWeather
        };
    }
}