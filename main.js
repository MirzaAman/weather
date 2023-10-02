const options1 = {
	method: 'GET', 
	headers: {
		'X-RapidAPI-Key' : 'aea7f326a4msh3ed4775fdd3eab6p13f651jsn99f9dd4c77e1',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather1 = (city) => {
        cityName.innerHTML = city
    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options1)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            // cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
}

const defaultCity1 = "Delhi";
getWeather1(defaultCity1);


submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather1(city.value)
})

// shanghai
const getWeather = (city) => {

    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', options1)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            // cloud_pct.innerHTML = response.cloud_pct
            temp1.innerHTML = response.temp
            feels_like1.innerHTML = response.feels_like
            humidity1.innerHTML = response.humidity
            min_temp1.innerHTML = response.min_temp
            max_temp1.innerHTML = response.max_temp
            wind_speed1.innerHTML = response.wind_speed
            wind_degrees1.innerHTML = response.wind_degrees
        })
}

getWeather();

// boston
const getWeather3 = (city) => {

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston', options1)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        // cloud_pct.innerHTML = response.cloud_pct
        temp3.innerHTML = response.temp
        feels_like3.innerHTML = response.feels_like
        humidity3.innerHTML = response.humidity
        min_temp3.innerHTML = response.min_temp
        max_temp3.innerHTML = response.max_temp
        wind_speed3.innerHTML = response.wind_speed
        wind_degrees3.innerHTML = response.wind_degrees
    })
}

getWeather3();


// lucknow
const getWeather4 = (city) => {

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options1)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        // cloud_pct.innerHTML = response.cloud_pct
        temp4.innerHTML = response.temp
        feels_like4.innerHTML = response.feels_like
        humidity4.innerHTML = response.humidity
        min_temp4.innerHTML = response.min_temp
        max_temp4.innerHTML = response.max_temp
        wind_speed4.innerHTML = response.wind_speed
        wind_degrees4.innerHTML = response.wind_degrees
    })
}

getWeather4();

// kolkatta
const getWeather5 = (city) => {

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options1)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        // cloud_pct.innerHTML = response.cloud_pct
        temp5.innerHTML = response.temp
        feels_like5.innerHTML = response.feels_like
        humidity5.innerHTML = response.humidity
        min_temp5.innerHTML = response.min_temp
        max_temp5.innerHTML = response.max_temp
        wind_speed5.innerHTML = response.wind_speed
        wind_degrees5.innerHTML = response.wind_degrees
    })
}

getWeather5();