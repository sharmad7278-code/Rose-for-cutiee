function showLove() {
  document.getElementById("msg").innerText =
    "I knew it 😌💗";

  document.getElementById("letter").style.display = "block";
}function showMsg() {
  document.getElementById("msg").innerText =
    "You are the most beautiful rose 🌹❤️";
}
setInterval(() => {
  const rose = document.createElement("div");
  rose.innerText = "🌹";
  rose.className = "rose";
  rose.style.left = Math.random() * 100 + "vw";
  rose.style.animationDuration = (3 + Math.random() * 3) + "s";
  document.body.appendChild(rose);

  setTimeout(() => {
    rose.remove();
  }, 6000);
}, 300);
let step = 0;

function showMsg() {
  if (step === 0) {
    msg.innerText = "This rose is just the beginning 🌹";
    step++;
  } else if (step === 1) {
    msg.innerText = "You make everything more beautiful 💖";
    step++;
  } else {
    msg.innerText = "Happy Rose Day, Cutiee 🌹❤️";
  }
}
