/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

let errorJSON = {
    "weather": [
      {
        "id": -1,
        "main": "city not found",
      }
    ],
    "main": {
      "temp": 0,
      "temp_min": 0,
      "temp_max": 0,
    },
    "name": "Lorem City",
    "cod": 200
  }

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = async (city) => {
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const finalURL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`
    let data= await fetch(finalURL)
    let response= await data.json()

    if(response.cod==='404'){
        return errorJSON
    }

    return response
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async () => {
    const city = document.getElementById('city-input').value;
    
    let weatherData = await getWeatherData(city)
    showWeatherData(weatherData)

}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
    console.log(weatherData);
    let cityName = document.getElementsByClassName('my-0')[0]
    let weatherType = document.getElementById('weather-type')
    let temp = document.getElementById('temp')
    let minTemp = document.getElementById('min-temp')
    let maxTemp = document.getElementById('max-temp')

    cityName.innerText=weatherData.name
    weatherType.innerText=weatherData.weather[0].main
    temp.innerText=weatherData.main.temp
    minTemp.innerText=weatherData.main.temp_min
    maxTemp.innerText=weatherData.main.temp_max


}

