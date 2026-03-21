const today = new Date();

document.getElementById("currentyear").innerHTML = `©${today.getFullYear()}`;
document.getElementById("lastmodified").innerHTML = `Last Modified: ${document.lastModified}`;
document.getElementById("windChill").innerHTML = `${calculateWindChill(74, 3)}`;

/* hamburger button */
const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");


    if (navMenu.classList.contains("show")) {
        menuButton.innerHTML = "✕";
    } else {
        menuButton.innerHTML = "☰";
    }
});

const temperature = 74;
const windSpeed = 3;

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed >= 3) {
        const windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        return Math.round(windChill);
    } else {
        return "N/A";
    }
}