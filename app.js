const tempoDisplay = document.querySelector(".tempo");
const tempoText = document.querySelector(".tempo-text");
const decreaseTempoBtn = document.querySelector(".decrease-tempo");
const increaseTempoBtn = document.querySelector(".increase-tempo");
const tempoSlider = document.querySelector(".slider");
const startStopBtn = document.querySelector(".start-stop");
const subtractBeats = document.querySelector(".subtract-beats");
const addBeats = document.querySelector(".add-beats");
const measureCount = document.querySelector(".measure-count");

const click1 = new Audio("click1.mp3");
const click2 = new Audio("click2.mp3");


let bpm = 140;
let beatsPerMeasure = 4;
let tempoTextString = "Allegro";

decreaseTempoBtn.addEventListener("click", () => {
  if (bpm <= 20) {
    return;
  }
  bpm--;
  validateTempo();
  updateMetronome();
});

increaseTempoBtn.addEventListener("click", () => {
  if (bpm >= 280) {
    return;
  }
  bpm++;
  validateTempo();
  updateMetronome();
});

tempoSlider.addEventListener("input", () => {
  bpm = tempoSlider.value;
  validateTempo();
  updateMetronome();
});

subtractBeats.addEventListener("click", () => {
  if (beatsPerMeasure <= 1) {
    return;
  }
  beatsPerMeasure--;
  measureCount.textContent = beatsPerMeasure;
  count = 0;
});

addBeats.addEventListener("click", () => {
  if (beatsPerMeasure >= 12) {
    return;
  }
  beatsPerMeasure++;
  measureCount.textContent = beatsPerMeasure;
  count = 0;
});

function updateMetronome() {
  tempoDisplay.textContent = bpm;
  tempoSlider.value = bpm;

  if (bpm <= 40) {
    tempoTextString = "Grave";
  }
  if (bpm > 40 && bpm < 60) {
    tempoTextString = "Largo";
  }
  if (bpm > 60 && bpm < 66) {
    tempoTextString = "Lento";
  }
  if (bpm > 66 && bpm < 76) {
    tempoTextString = "Adagio";
  }
  if (bpm > 76 && bpm < 108) {
    tempoTextString = "Andante";
  }
  if (bpm > 108 && bpm < 120) {
    tempoTextString = "Moderato";
  }
  if (bpm > 120 && bpm < 152) {
    tempoTextString = "Allegro";
  }
  if (bpm > 152 && bpm < 168) {
    tempoTextString = "Vivace";
  }
  if (bpm > 168 && bpm < 200) {
    tempoTextString = "Presto";
  }
  if (bpm > 200 && bpm < 220) {
    tempoTextString = "Prestissimo";
  }
  if (bpm > 220 && bpm <= 280) {
    tempoTextString = "🔥🔥🔥";
  }

  tempoText.textContent = tempoTextString;
}

function validateTempo() {
  if (bpm <= 20) {
    console.log("Invalid BPM range");
  }
  if (bpm >= 280) {
    console.log("Invalid BPM range");
  }
}
