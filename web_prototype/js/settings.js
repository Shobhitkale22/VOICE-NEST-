// =======================================
// VoiceNest
// Settings Screen
// settings.js
// =======================================

// Get HTML Elements

const backHomeBtn = document.getElementById("backHomeBtn");
const logoutBtn = document.getElementById("logoutBtn");

// =======================================
// Back To Home
// =======================================

backHomeBtn.addEventListener("click", function () {

    window.location.href = "01_homescreen.html";

});

// =======================================
// Logout
// =======================================

logoutBtn.addEventListener("click", function () {

    const confirmLogout = confirm("Are you sure you want to logout?");

    if (confirmLogout) {

        alert("Logout feature will be available after backend integration.");

        // Future Backend Code
        // localStorage.clear();
        // window.location.href = "login.html";

    }

});

// =======================================
// Theme (Coming Soon)
// =======================================

const themeCard = document.querySelectorAll(".card")[4];

themeCard.addEventListener("click", function () {

    alert("Theme feature is coming soon.");

});

// =======================================
// Cloud Storage
// =======================================

const cloudCard = document.querySelectorAll(".card")[3];

cloudCard.addEventListener("click", function () {

    alert("Private Cloud will be connected after backend integration.");

});

// =======================================
// Privacy & Security
// =======================================

const securityCard = document.querySelectorAll(".card")[2];

securityCard.addEventListener("click", function () {

    alert("Your recordings are securely encrypted using AES-256 (POC Simulation).");

});

// =======================================
// About
// =======================================

const aboutCard = document.querySelectorAll(".card")[5];

aboutCard.addEventListener("click", function () {

    alert(
        "VoiceNest v1.0\n\n" +
        "A Secure Voice Recording Application.\n\n" +
        "Developed as a JavaScript Prototype."
    );

});

// =======================================
// Account
// =======================================

const accountCard = document.querySelectorAll(".card")[0];

accountCard.addEventListener("click", function () {

    alert("User Profile will be available after backend integration.");

});