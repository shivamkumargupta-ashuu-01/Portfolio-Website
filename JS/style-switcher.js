// Toggle style switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide style switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

// Theme color switcher
const alternateStyles = document.querySelectorAll("link.alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (style.getAttribute("title") === color) {
            // Enable the chosen stylesheet
            style.removeAttribute("disabled");
        } else {
            // Disable the other stylesheets
            style.setAttribute("disabled", "true");
        }
    });
}

// Light and dark theme color switcher
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});

// Ensure correct icon is shown on page load
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});
