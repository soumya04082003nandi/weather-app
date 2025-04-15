let searchText = document.querySelector(".search input");
let searchImage = document.querySelector("#weather-img");
let city = document.querySelector(".city");
let temp = document.querySelector(".temp");
let windImg = document.querySelector(".wind-img");
let humidityImg = document.querySelector(".humidity-img");
let searchBtn = document.querySelector(".search-btn");
let searchIcon = document.querySelector("#search-icon")
let wind = document.querySelector(".wind p");
let humidity = document.querySelector(".humidity p");
const apiKey = "2b2a53311d1c64d4b7e14d8a780d279d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";



async function checkWeather(cityName) {
    const responce = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
    let data = await responce.json();
    console.log(data);
    city.innerHTML = data.name;
    temp.innerHTML = Math.floor(data.main.temp) + "°C";
    humidity.innerText = data.main.humidity + "%";
    wind.innerText = Math.floor(data.wind.speed) + " km/h";
    searchImage.src = "image/" + `${data.weather[0].main}` + ".png";



}
searchBtn.addEventListener("click", () => {
    checkWeather(searchText.value);
})
window.addEventListener("keypress",(e)=>{
    if(e.key==='Enter'){
        checkWeather(searchText.value);

    }
})











searchIcon.addEventListener("click", () => {
    searchIcon.classList.toggle("back-flipped");
    searchIcon.classList.toggle("flipped");

})