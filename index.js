const inputBox = document.querySelector('.Input-box');
const searchchBtn = document.getElementById('search-btn');
const weather_img = document.querySelector('.Whether-img');
const temp = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humd = document.getElementById('humadity');
const wind_speed = document.getElementById('Wind-Speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');


async function checkwhether(city) {
    const api_key = "d2f34a4383e538fd8fa1950018221609";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;


    const whether_data = await fetch(`${url}`).then(response => response.json());

    if(whether_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log('error');
        return;
    }
    weather_body.style.display = "flex";

    temp.innerHTML = `${Math.round(whether_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${whether_data.weather[0].description}`;
    humd.innerHTML = `${whether_data.main.humidity}%`;
    wind_speed.innerHTML = `${whether_data.wind.speed}Km/H`;


    // console.log(whether_data);

    switch (whether_data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "images/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "images/clear.png";
            break;
        case 'Rain':
            weather_img.src = "images/rain.png";
            break;
        case 'Mist':
            weather_img.src = "images/mist.png";
            break;
        case 'Snow':
            weather_img.src = "images/snow.png";
            break;
        
    }

}
searchchBtn.addEventListener('click', () => {
    checkwhether(inputBox.value);
});