// script.js
document.addEventListener("click", function(e) {
  let sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.left = e.pageX + "px";
  sparkle.style.top = e.pageY + "px";
  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 1000);
});

const music = document.getElementById("music");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");

playBtn.addEventListener("click", () => {
  music.play();
});

pauseBtn.addEventListener("click", () => {
  music.pause();
});


// Sound effects
const twinkleSound = new Audio("sounds/twinkle.mp3");
const popup = document.getElementById("fact-popup");
const factText = document.getElementById("fact-text");
const closePopup = document.getElementById("close-popup");

document.querySelectorAll(".star").forEach(star => {
  star.addEventListener("click", () => {
    let fact = star.getAttribute("data-fact");
    factText.textContent = fact;
    popup.style.display = "block";
    twinkleSound.currentTime = 0;
    twinkleSound.play();
  });
});



document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", (e) => {
    if (music && !link.target) { // only fade if it's an internal link
      e.preventDefault(); // stop normal jump
      music.volume = 1.0;
      let fade = setInterval(() => {
        if (music.volume > 0.05) {
          music.volume -= 0.05;
        } else {
          clearInterval(fade);
          window.location = link.href; // go after fade
        }
      }, 100);
    }
  });
});


closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});
