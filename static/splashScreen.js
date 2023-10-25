document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const splashScreen = document.querySelector('.splash-screen');
        const websiteContent = document.querySelector('.website-content');

        // Fade out the splash screen and reveal the website content
        splashScreen.style.opacity = '0';
        websiteContent.style.display = 'block';
        websiteContent.style.opacity = '1';

        // Optionally, remove the splash screen from the DOM
        splashScreen.addEventListener('transitionend', () => {
            splashScreen.style.display = 'none';
        });
    }, 1000); // Adjust the time (in milliseconds) for how long the splash screen is displayed
});

const checkbox = document.getElementById("checkbox")
const bioSection = document.getElementById('#bio');
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode")
  bioSection.classList.toggle("dark-mode")
})