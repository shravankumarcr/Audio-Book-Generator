var synthesis = window.speechSynthesis;
var utterance = new SpeechSynthesisUtterance();

document.getElementById("playButton").addEventListener("click", function () {
  var userInput = document.getElementById("userInput").value;

  utterance.text = userInput;

  synthesis.speak(utterance);
});

document.getElementById("pauseButton").addEventListener("click", function () {
  synthesis.pause();
});

document.getElementById("stopButton").addEventListener("click", function () {
  synthesis.cancel();
});
