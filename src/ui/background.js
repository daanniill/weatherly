export async function updateBackground(icon) {
    let image;

    switch(icon) {
        case "rain":
            image = await import("../assets/rain.png");
            break;
        case "snow":
            image = await import("../assets/snow.png");
            break;
        default:
            image = await import("../assets/sunny.png");
    }

    document.body.style.backgroundImage = `url(${image.default})`;
}