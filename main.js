// Magic 8 Ball by Azer

// HTML Variables
let response1 = document.getElementById("output");
// Button Event Listener
document.getElementById("img").addEventListener("click", imgClicked);

function imgClicked() {
  // Determine 8 ball response
  let randNum = Math.random();
  console.log(randNum);
  // 8 ball response
  if (randNum < 0.2) {
    output.innerHTML = "<p>Without a doubt.</p>";
  } else if (randNum < 0.4) {
    output.innerHTML = "<p>As I see it, yes.</p>";
  } else if (randNum < 0.6) {
    output.innerHTML = "<p>Concentrate and ask again.</p>";
  } else if (randNum < 0.8) {
    output.innerHTML = "<p>Don't count on it.</p>";
  } else {
    output.innerHTML = "<p>Outlook not so good.</p>";
  }
  let character = document.getElementById("search-in").value.toLowercase();
  if (character === "does a magic 8 ball actually work?") {
    output.innerHTML = "<p>How dare you doubt me!</p>";
  } else if (character === 0) {
  }
}
