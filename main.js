// Magic 8 Ball by Azer

// HTML Variables
let output = document.getElementById("output");
// Button Event Listener
document.getElementById("img").addEventListener("click", imgClicked);

function imgClicked() {
  // INPUT
  let question = document.getElementById("question-in").value.toLowerCase();
    // Process
    getResponse(question);
    // Output
    output.innerHTML = response;
  }

  function getResponse(question) {
  // If statements
  if (question.length === 0){
    response = "Please ask a question...";
  } else if (question === "does a magic 8 ball actually work?") {
    response = "<p>How dare you doubt me!</p>";
  } else if (question === "is java script awesome?") {
    response = "<p>Of course!</p>";
  } else if (question === "is computer science cool?") {
    response = "<p>Obviously, yes</p>";
  } else {

  }
}
  function randomResponse() {
    let randNum = Math.random();

    if (randNum < 0.2) {
      response = "<p>Without a doubt.</p>";
    } else if (randNum < 0.4) {
      response = "<p>As I see it, yes.</p>";
    } else if (randNum < 0.6) {
      response = "<p>Concentrate and ask again.</p>";
    } else if (randNum < 0.8) {
      response = "<p>Don't count on it.</p>";
    } else { response = "<p>Outlook not so good.</p>";
  }
return response;
  }
