# Weather App 🌦️

This is a simple weather application that fetches and displays the current weather conditions of a given city using the OpenWeather API.

## Features
- Fetches real-time weather data using OpenWeather API.
- Displays the city name, temperature, and weather description.
- Handles API errors and displays appropriate messages.

## Installation & Usage
1. Clone this repository or copy the script into your project.
2. Obtain an API key from [OpenWeather](https://openweathermap.org/api).
3. Replace `"YOUR_API_KEY"` in the script with your actual API key.
4. Call the `getWeather(city)` function with a city name.

### Example:
```javascript
getWeather("Bangalore");
