function getWeatherData(){
    navigator.geolocation.getCurrentPosition((success)=>{
        console.log(success);

        fetch('https://api.openweathermap.org/data/3.0/onecall?lat=51.5072&lon=0.1276&exclude=hourly,minutely&units=metric&appid=328277f88c0b67cbf1fb3d9d97e9c4d4').then(res.json()).then(data =>{
            console.log(data)
            showWeatherData(data);
        })
    });
}

function showWeatherData(data){
    let {humidity,pressure,sunrise,sunset,wind_speed}=data.current;

    currentWeatherItemsEl.innerHTML = 
    '';
}




var currentWeatherItemsEl = document.getElementById("current-weather-items");
var timezone = document.getElementById("country");
var weatherForecastEl = document.getElementById("weather-forecast");
var currentTempEl = document.getElementById("current-temp");
function getWeatherData(){
navigator.geolocation.getCurrentPosition((success)=>{
    console.log(success);
    fetch("https://api.openweathermap.org/data/3.0/onecall?lat=51.5072&lon=0.1276&exclude=hourly,minutely&units=metric&appid=328277f88c0b67cbf1fb3d9d97e9c4d4").then(res => res.json()).then(data =>{
        console.log(data);
            showWeatherData(data);
            })
        });
    }

    function showWeatherData(data){
        let {humidity,pressure,sunrise,sunset,wind_speed}=data.current;
                
        }



            
        
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com'
    }
};
            
fetch("https://countries-cities.p.rapidapi.com/location/country/list")
    .then(response => response.json())
    .then(response => console.log(response))
.catch(err => console.error(err));
