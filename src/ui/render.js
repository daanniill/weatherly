export function renderWeather(weather) {
    const container = document.getElementById("weather")

    container.innerHTML = `
        <h2>${weather.location}</h2>
        <p>${weather.temp}°</p>
        <p>${weather.conditions}</p>
    `;
}