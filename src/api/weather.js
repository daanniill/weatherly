require('dotenv').config(); // Load env variables from .env
const apiKey = process.env.API_KEY

export async function featherWeather(location, unit="us") {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unit}&key=${apiKey}`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Weather data not found");
    }

    const data = await response.json();
    return processWeatherData(data);

}

function processWeatherData(data) {
    return {
        location: data.resolvedAddress,
        temp: data.currentConditions.temp,
        conditions: data.currentConditions.conditions,
        icon: data.currentConditions.icon,
    };
}
