// =========================================
// VoiceNest
// Save Recording Screen
// saveRecording.js
// =========================================

// Get Elements

const durationText = document.getElementById("durationText");
const recordingName = document.getElementById("recordingName");
const saveBtn = document.getElementById("saveBtn");
const discardBtn = document.getElementById("discardBtn");

// Get Duration

const duration = localStorage.getItem("recordingDuration");

if (duration) {
    durationText.textContent = "Duration : " + duration;
}

// Save Recording

saveBtn.addEventListener("click", function () {

    const name = recordingName.value.trim();

    if (name === "") {
        alert("Please enter a recording name.");
        return;
    }

    const recording = {
        name: name,
        duration: duration,
        date: new Date().toLocaleDateString(),
        encrypted: true
    };

    let recordings =
        JSON.parse(localStorage.getItem("recordings")) || [];

    recordings.push(recording);

    localStorage.setItem(
        "recordings",
        JSON.stringify(recordings)
    );

    alert("Recording Saved Successfully!");

    window.location.href = "04_myrecordingsscreen.html";

});

// Discard Recording

discardBtn.addEventListener("click", function () {

    const discard = confirm(
        "Discard this recording?"
    );

    if (discard) {

        localStorage.removeItem("recordingDuration");

        window.location.href = "01_homescreen.html";

    }

});