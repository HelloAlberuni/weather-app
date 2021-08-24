class Weather{
    constructor(){
        this.city = 'dhaka';
        this.apiKey = '4b45462b359fda05021d1bb246b299e6';
    }

    async getData(){
        let response = await fetch(`//api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);
        // console.log(response);
        let weatherData = await response.json();

        return weatherData;
    }
}