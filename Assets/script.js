let weather = {
    "apiKey": "4e323e25a41eb88616b82e8715147146",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&limit=5&appid=4e323e25a41eb88616b82e8715147146")
        .then((response)=> response.json())
        .then((data) => this.displayWeather(data));
    } ,
    displayWeather : function (data){
        const{ name } = data;
        const{ icon, description} = data.weather[0];
        const{ temp, humidity } = data.main;
        const{speed} = data.wind;   
        console.log(name, icon,description, temp, humidity)
    }
} ;