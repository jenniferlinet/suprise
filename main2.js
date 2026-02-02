let noCount = 0;


document.addEventListener("DOMContentLoaded", () => {
  const img = document.getElementById("mainImg");

  // Force reload GitHub image
  const src = img.src;
  img.src = "";
  setTimeout(() => {
    img.src = src;
  }, 50);
});


const memes = [
  "assets/meme1.png",
  "assets/meme2.png",
  "assets/meme3.png",
  "assets/meme4.png"
];

const roasts = [
  "Are you SURE? 🤨",
  "Strategy team crying rn 😭",
  "This will be investigated by FIA 🚨",
  "Ferrari strategy moment fr 🟥",
  "Race control says: SAY YES 🏁"
];

function happy() {
  mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/happy2.gif?raw=true";
}

function angry() {
  mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/angry.gif?raw=true";
}

function normal() {
  mainImg.src = "https://github.com/NikhilMarko03/resources/blob/main/happy1.gif?raw=true";
}

function no() {
  model.style.display = "flex";
  modelImg.src = memes[noCount % memes.length];
  modelText.innerText = roasts[noCount % roasts.length];
  noCount++;
}

function yes() {
  window.location.href = "flowers.html";
}
