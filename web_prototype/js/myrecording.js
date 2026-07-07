// =======================================
// VoiceNest
// My Recordings Screen
// myrecordings.js
// =======================================

// Get HTML Elements

const recordingsList = document.getElementById("recordingsList");
const searchInput = document.getElementById("searchInput");
const newRecordingBtn = document.getElementById("newRecordingBtn");

// =======================================
// Load Recordings
// =======================================

let recordings =
    JSON.parse(localStorage.getItem("recordings")) || [];

// =======================================
// Display Recordings
// =======================================

function displayRecordings(recordingsArray){

    recordingsList.innerHTML = "";

    if(recordingsArray.length === 0){

        recordingsList.innerHTML = `

            <div class="card">

                <div class="content">

                    <h2>No Recordings Found</h2>

                    <p>Create your first recording.</p>

                </div>

            </div>

        `;

        return;

    }

    recordingsArray.forEach(function(recording,index){

        const card = document.createElement("div");

        card.className = "card recording-card";

        card.innerHTML = `

            <div class="left">

                <div class="icon purple">

                    <i class="fa-solid fa-microphone-lines"></i>

                </div>

                <div class="content">

                    <h2>${recording.name}</h2>

                    <p>

                        <i class="fa-solid fa-lock"></i>

                        Encrypted

                    </p>

                    <small>

                        ${recording.date} • ${recording.duration}

                    </small>

                </div>

            </div>

            <div class="arrow">

                <i class="fa-solid fa-chevron-right"></i>

            </div>

        `;

        // ==========================
        // Open Details Screen
        // ==========================

        card.addEventListener("click",function(){

            localStorage.setItem(
                "selectedRecording",
                JSON.stringify(recording)
            );

            window.location.href = "05_recordingdetails.html";

        });

        recordingsList.appendChild(card);

    });

}

// =======================================
// Initial Load
// =======================================

displayRecordings(recordings);

// =======================================
// Search Recordings
// =======================================

searchInput.addEventListener("keyup",function(){

    const text =
        searchInput.value.toLowerCase();

    const filteredRecordings =
        recordings.filter(function(recording){

            return recording.name
                .toLowerCase()
                .includes(text);

        });

    displayRecordings(filteredRecordings);

});

// =======================================
// New Recording Button
// =======================================

newRecordingBtn.addEventListener("click",function(){

    window.location.href =
        "02_recordingscreen.html";

});