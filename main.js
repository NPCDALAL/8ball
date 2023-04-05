// Magic 8 Ball by Azer

// HTML Variables
let response1 = document.getElementById("output");
// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
    let character = document.getElementById()
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
  } else (randNum < 1) 
    output.innerHTML = "<p>Outlook not so good.</p>";
}
