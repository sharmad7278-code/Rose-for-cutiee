function showMsg() {
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
