class Storage{
    constructor(){
        this.city      = 'dhaka';
        this.apiKey    = '4b45462b359fda05021d1bb246b299e6';

        this.convertLocationNameToLatlong();
    }

    convertLocationNameToLatlong( name ){
        var latlong;

        var request = fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${this.city}&limit=1&appid=${this.apiKey}`);
        
        
        request.then((response) => function(){
            console.log(response);
            console.log(request);
        });

        // return latlong;
    }

    setLocation( name ){
        var latlong = '';
        localStorage.setItem( 'azp_location', latlong );
    }

    getLocation(){
        var latlong = ''

        if( localStorage.getItem('azp_location') == null ){
            latlong = this.convertLocationNameToLatlong(this.city);
        } else {
            latlong = localStorage.getItem('azp_location');
        }

        return latlong;
    }
}