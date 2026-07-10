// ======================================
// VoiceNest Home Screen
// home.js
// ======================================

// Start Recording

document.getElementById("startRecording").addEventListener("click", function () {

    window.location.href = "02_recordingscreen.html";

});

// My Recordings

document.getElementById("myRecordings").addEventListener("click", function () {

    window.location.href = "04_myrecordingsscreen.html";

});

// Cloud

document.getElementById("cloud").addEventListener("click", function () {

    alert("Cloud feature will be added in the next version.");

});

// Settings

document.getElementById("settings").addEventListener("click", function () {

    window.location.href = "06_settingsscreen.html";

});