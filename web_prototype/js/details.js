// =========================================
// VoiceNest
// Recording Details Screen
// details.js
// =========================================

// Get HTML Elements

const recordingTitle = document.getElementById("recordingTitle");
const recordingDate = document.getElementById("recordingDate");
const recordingDuration = document.getElementById("recordingDuration");

const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const transcriptBtn = document.getElementById("transcriptBtn");
const privateCloudBtn = document.getElementById("privateCloudBtn");
const shareBtn = document.getElementById("shareBtn");
const renameBtn = document.getElementById("renameBtn");
const deleteBtn = document.getElementById("deleteBtn");
const backBtn = document.getElementById("backBtn");

// =========================================
// Load Selected Recording
// =========================================

const recording =
    JSON.parse(localStorage.getItem("selectedRecording"));

if(recording){

    recordingTitle.textContent = recording.name;

    recordingDate.textContent = recording.date;

    recordingDuration.textContent =
        "Duration : " + recording.duration;

}

// =========================================
// Play Recording
// =========================================

playBtn.addEventListener("click",function(){

    alert("▶ Playing Recording...");

});

// =========================================
// Pause Recording
// =========================================

pauseBtn.addEventListener("click",function(){

    alert("⏸ Recording Paused.");

});

// =========================================
// View Transcript
// =========================================

transcriptBtn.addEventListener("click",function(){

    alert(
        "Transcript\n\n" +
        "This is a sample transcript.\n\n" +
        "In the final application, AI-generated transcription will appear here."
    );

});

// =========================================
// Upload to Private Cloud
// =========================================

privateCloudBtn.addEventListener("click",function(){

    alert(
        "☁ Recording uploaded to your Private Cloud successfully!"
    );

});

// =========================================
// Share Recording
// =========================================

shareBtn.addEventListener("click",function(){

    const user = prompt(
        "Enter VoiceNest Username:"
    );

    if(user){

        alert(
            "Recording shared successfully with " + user
        );

    }

});

// =========================================
// Rename Recording
// =========================================

renameBtn.addEventListener("click",function(){

    const newName = prompt(
        "Enter new recording name:",
        recording.name
    );

    if(newName){

        recording.name = newName;

        recordingTitle.textContent = newName;

        let recordings =
            JSON.parse(localStorage.getItem("recordings")) || [];

        recordings = recordings.map(function(item){

            if(item.id === recording.id){

                item.name = newName;

            }

            return item;

        });

        localStorage.setItem(
            "recordings",
            JSON.stringify(recordings)
        );

        localStorage.setItem(
            "selectedRecording",
            JSON.stringify(recording)
        );

        alert("Recording renamed successfully.");

    }

});

// =========================================
// Delete Recording
// =========================================

deleteBtn.addEventListener("click",function(){

    const confirmDelete = confirm(
        "Are you sure you want to delete this recording?"
    );

    if(confirmDelete){

        let recordings =
            JSON.parse(localStorage.getItem("recordings")) || [];

        recordings = recordings.filter(function(item){

            return item.id !== recording.id;

        });

        localStorage.setItem(
            "recordings",
            JSON.stringify(recordings)
        );

        localStorage.removeItem("selectedRecording");

        alert("Recording deleted successfully.");

        window.location.href =
            "04_myrecordingsscreen.html";

    }

});

// =========================================
// Back Button
// =========================================

backBtn.addEventListener("click",function(){

    window.location.href =
        "04_myrecordingsscreen.html";

});