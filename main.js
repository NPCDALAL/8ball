// Magic 8 Ball by Azer

// HTML Variables
let output = document.getElementById("output");
// Button Event Listener
document.getElementById("img").addEventListener("click", imgClicked);

function imgClicked() {
  // INPUT
  let question = document.getElementById("question-in").value.toLowerCase();
    // OUTPUT
    output.innerHTML = getResponse(question);
  }

  function getResponse(question) {
  // If statements
  if (question === ""){
    return"Please ask a question...";
  } else if (question === "does a magic 8 ball actually work?") {
    return"<p>How dare you doubt me!</p>";
  } else if (question === "is java script awesome?") {
    return"<p>Of course!</p>";
  } else if (question === "is computer science cool?") {
    return"<p>Obviously, yes</p>";
  } else {

  }
}
  function randomResponse() {
    let randNum = Math.random();

    if (randNum < 0.2) {
      return"<p>Without a doubt.</p>";
    } else if (randNum < 0.4) {
      return"<p>As I see it, yes.</p>";
    } else if (randNum < 0.6) {
      return"<p>Concentrate and ask again.</p>";
    } else if (randNum < 0.8) {
      return"<p>Don't count on it.</p>";
    } else { return"<p>Outlook not so good.</p>";
  }
  }
