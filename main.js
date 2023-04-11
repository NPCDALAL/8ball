// Magic 8 Ball by Azer

// HTML Variables
let output = document.getElementById("output");
// Button Event Listener
document.getElementById("img").addEventListener("click", imgClicked);

function imgClicked() {
  // INPUT
  let question = document.getElementById("question-in").value.toLowerCase();
  let randNum = Math.random();
  // If statements
  if (question === "does a magic 8 ball actually work?") {
    output.innerHTML = "<p>How dare you doubt me!</p>";
  } else if (question === "is java script awesome?") {
    output.innerHTML = "<p>Of course!</p>";
  } else if (question === "is computer science cool?") {
    output.innerHTML = "<p>Obviously, yes</p>";
  } else if (question.length === 0) {
    output.innerHTML = "Please ask a question...";
  } else if (randNum < 0.2) {
    output.innerHTML = "<p>Without a doubt.</p>";
  } else if (randNum < 0.4) {
    output.innerHTML = "<p>As I see it, yes.</p>";
  } else if (randNum < 0.6) {
    output.innerHTML = "<p>Concentrate and ask again.</p>";
  } else if (randNum < 0.8) {
    output.innerHTML = "<p>Don't count on it.</p>";
  } else output.innerHTML = "<p>Outlook not so good.</p>";
}
