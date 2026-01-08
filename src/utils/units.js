let unit = "us"; // us = Fahrenheit, metric = Celsius

export function toggleUnit() {
    unit = unit === "us" ? "metric" : "us";
    return unit;
}

export function getUnit() {
    return unit
}