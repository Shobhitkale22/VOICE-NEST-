// ================================
// VoiceNest Recording Screen
// recording.js
// ================================

// Timer Variables

let seconds = 0;
let minutes = 0;

let timer = null;

let isPaused = false;

// HTML Elements

const timerDisplay = document.getElementById("timer");
const pauseBtn = document.getElementById("pauseBtn");
const stopBtn = document.getElementById("stopBtn");

// ================================
// Start Timer Automatically
// ================================

startTimer();

function startTimer(){

    timer = setInterval(updateTimer,1000);

}

// ================================
// Update Timer
// ================================

function updateTimer(){

    if(isPaused){
        return;
    }

    seconds++;

    if(seconds === 60){

        minutes++;
        seconds = 0;

    }

    let displayMinutes = String(minutes).padStart(2,"0");
    let displaySeconds = String(seconds).padStart(2,"0");

    timerDisplay.textContent = displayMinutes + ":" + displaySeconds;

}

// ================================
// Pause / Resume
// ================================

pauseBtn.addEventListener("click",function(){

    if(isPaused){

        isPaused = false;

        pauseBtn.innerHTML = `
            <i class="fa-solid fa-pause"></i>
            Pause Recording
        `;

    }

    else{

        isPaused = true;

        pauseBtn.innerHTML = `
            <i class="fa-solid fa-play"></i>
            Resume Recording
        `;

    }

});

// ================================
// Stop Recording
// ================================

stopBtn.addEventListener("click",function(){

    clearInterval(timer);

    const duration = timerDisplay.textContent;

    // Save duration for next screen

    localStorage.setItem("recordingDuration",duration);

    // Redirect

    window.location.href = "03_saverecordingscreen.html";

});