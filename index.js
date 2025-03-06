window.onload = () => {
    document.querySelector("button").onclick = getWeather;
};


function getWeather() {
    const city = document.getElementById("city").value.trim(); // city is stored
    const apiKey = "8c01eee921230dec6464aafef06484e1"; // api key from open weather

    if (city === "") {
        alert("Please enter a city name!");      // checking if the field is empty
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;// setting unit to metric,city and apikey.

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`City not found or API issue! (${response.status})`);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("weather-info").innerHTML = ` 
                <h3>${data.name}, ${data.sys.country}</h3>       
                <p>Temperature: ${data.main.temp}°C</p>           
                <p>Weather: ${data.weather[0].description}</p>    
            `;
        })
        .catch(error => {
            console.error("Error fetching weather:", error);
            document.getElementById("weather-info").innerHTML = `<p style="color: red;">${error.message}</p>`;
        });
}
