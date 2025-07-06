const text = [
  "[ENREGISTREMENT INTERDIT]",
  "ENTRΛILLES.",
  "Tu n’es pas censé être là.",
  "",
  "Et pourtant… tu insistes."
];

let index = 0;
let textDiv = document.getElementById("text");
let continueBtn = document.getElementById("continueBtn");

function showNextLine() {
  if (index < text.length) {
    let p = document.createElement("p");
    p.textContent = text[index];
    textDiv.appendChild(p);
    index++;
    setTimeout(showNextLine, 2000);
  } else {
    continueBtn.style.display = "inline-block";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  showNextLine();
});