import "./styles/main.css";
import { featchWeather } from "./api/weather";
import { renderWeather } from "./ui/render";
import { updateBackground } from "./ui/background";
import { showLoading, hideLoading} from "./ui/loading";
import { toggleUnit, getUnit } from "./utils/units";

const form = document.getElementById("search-form");
const input = document.getElementById("location-input");
const toggleBtn = document.getElementById("unit-toggle");

let lastLocation = "";

form.addEventListener("submit", async (e) => {
    e.preventDefault()
    lastLocation = input.value;

    try {
        showLoading();
        const weather = await featchWeather(lastLocation, getUnit());
        renderWeather(weather);
        updateBackground(weather.icon)
    } catch(err) {
        alert(err.message);
    } finally {
        hideLoading();
    }

    toggleBtn.addEventListener("click", async() => {
        if (!lastLocation) return;
        toggleUnit();
        const weather = await featchWeather(lastLocation, getUnit());
        renderWeather(weather);
    })
});
