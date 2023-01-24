let weather = {
    "apiKey": "4e323e25a41eb88616b82e8715147146",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&limit&units=metrics=5&appid=4e323e25a41eb88616b82e8715147146")
        // fetch("https://api.openweathermap.org/data/2.5/weather?q="+ + "&limit&units=metrics=5&appid=4e323e25a41eb88616b82e8715147146")
        .then((response)=> response.json())
        .then((data) => this.displayWeather(data));
    } ,
    displayWeather: function (data) {
        const{ name } = data;
        const{ icon, description} = data.weather[0];
        const{ temp, humidity } = data.main;
        const{speed} = data.wind;   
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = (temp -273.15).toFixed(2) + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText ="Wind speed: " + speed + " mp/h";
        document.querySelector(".weather").classList.remove("loading");
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});
document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

  document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Denver");