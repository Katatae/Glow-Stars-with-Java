let darkMode= false;
const body = document.body;
const title = document.getElementById("title");
const button = document.getElementById("changeBtn");
const btn = document.getElementById("darktheme")
 

button.addEventListener("click", () => {
  title.textContent = "Glow green!";
  title.style.color = "lightgreen";
});

function toggleMode() {
  darkMode = !darkMode;
  if (!darkMode) {
    body.style.backgroundColor = "black"
    body.style.color = "white"
  } else {  
    body.style.backgroundColor = "white"
    body.style.color = "black"
  }
}
toggleMode();
darktheme.addEventListener("click", toggleMode);

