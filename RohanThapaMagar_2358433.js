const api = {
    key: "5ed63b06a659639575821c6da9811d30",
    base: "https://api.openweathermap.org/data/2.5/"
}

const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
// btn.addEventListener("click", (event) => {
//     getInput(event, "London");
// });

function checkOnlin(){
    return navigator.onLine
}

document.addEventListener("DOMContentLoaded", () => {
    // Get weather data for default location on page load
    getData("York");
});
btn.addEventListener("click", getInput);

function getInput (event) {
    event.preventDefault();
    if(checkOnlin()){
        getData(search.value)
    }else{
        localValue(search.value)
    }
}

async function getData () {
    fetch(`${api.base}weather?q=${search.value}&units=metric&appid=${api.key}`)
        .then(response => {
            return response.json();
        }).then(displayData);
         
}
//for local storage
function localValue(city){
    let result = localStorage.getItem(city)
    if (result){
        let response = JSON.parse(result);

        const city = document.querySelector(".city");
        city.innerText = `${response.name}, ${response.sys.country}`;

        const today = new Date();
        const date = document.querySelector(".date");
        date.innerText = dateFunction(today);

        const temp = document.querySelector(".temp");
        temp.innerHTML = `Temp: ${Math.round(response.main.temp)} <span>°C</span>`;

        const weather = document.querySelector(".weather");
        weather.innerText = `Weather: ${response.weather[0].main}`;

        const tempRange = document.querySelector(".temp-range");
        tempRange.innerText = `Temp Range: ${Math.round(response.main.temp_min)}°C / ${Math.round(response.main.temp_max)}°C`;

        const humidity = document.querySelector(".humidity");
        humidity.innerText = `Humidity: ${response.main.humidity}%`;

        const wind = document.querySelector(".wind");
        wind.innerText = `Wind: ${response.wind.speed} m/s`;


        const weatherIcon = document.querySelector(".weather-icon");
        const iconURL = "http://openweathermap.org/img/w/";
        weatherIcon.src = iconURL + response.weather[0].icon + ".png";

        search.value = "";
    }else{
        const error = document.querySelector(".error");
        error.textContent = "City not found in Local Storage";
        search.value = "";
        const city = document.querySelector(".city");
        city.innerText = `Try Again !!!`;

        const today = new Date();
        const date = document.querySelector(".date");
        date.innerText = "";

        const temp = document.querySelector(".temp");
        temp.innerHTML = ``;

        const weather = document.querySelector(".weather");
        weather.innerText = ``;

        const tempRange = document.querySelector(".temp-range");
        tempRange.innerText = ``;

        const humidity = document.querySelector(".humidity");
        humidity.innerText = ``;

        const wind = document.querySelector(".wind");
        wind.innerText = ``;


        const weatherIcon = document.querySelector(".weather-icon");
        const iconURL = "http://openweathermap.org/img/w/";
        weatherIcon.src = ""
    }
    
}

function displayData (response) {
    console.log(search.value)
    console.log(response);
    localStorage.setItem(search.value,JSON.stringify(response))
    if (response.cod === "404") {
        const error = document.querySelector(".error");
        error.textContent = "Please enter a valid city";
        search.value = "";
        const city = document.querySelector(".city");
        city.innerText = `Invalid city`;

        const today = new Date();
        const date = document.querySelector(".date");
        date.innerText = "";

        const temp = document.querySelector(".temp");
        temp.innerHTML = ``;

        const weather = document.querySelector(".weather");
        weather.innerText = ``;

        const tempRange = document.querySelector(".temp-range");
        tempRange.innerText = ``;

        const humidity = document.querySelector(".humidity");
        humidity.innerText = ``;

        const wind = document.querySelector(".wind");
        wind.innerText = ``;


        const weatherIcon = document.querySelector(".weather-icon");
        const iconURL = "http://openweathermap.org/img/w/";
        weatherIcon.src = ""
    } else {
        const city = document.querySelector(".city");
        city.innerText = `${response.name}, ${response.sys.country}`;

        const today = new Date();
        const date = document.querySelector(".date");
        date.innerText = dateFunction(today);

        const temp = document.querySelector(".temp");
        temp.innerHTML = `Temp: ${Math.round(response.main.temp)} <span>°C</span>`;

        const weather = document.querySelector(".weather");
        weather.innerText = `Weather: ${response.weather[0].main}`;

        const tempRange = document.querySelector(".temp-range");
        tempRange.innerText = `Temp Range: ${Math.round(response.main.temp_min)}°C / ${Math.round(response.main.temp_max)}°C`;

        const humidity = document.querySelector(".humidity");
        humidity.innerText = `Humidity: ${response.main.humidity}%`;

        const wind = document.querySelector(".wind");
        wind.innerText = `Wind: ${response.wind.speed} m/s`;


        const weatherIcon = document.querySelector(".weather-icon");
        const iconURL = "http://openweathermap.org/img/w/";
        weatherIcon.src = iconURL + response.weather[0].icon + ".png";

        search.value = "";
    }
}

function dateFunction (d) {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
}


