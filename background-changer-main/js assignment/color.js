const btn = document.getElementById("colorChanger");
const colors = [
  "#DFFF00",
  "#FFBF00",
  "#FF7F50",
  "#DE3163",
  "#9FE2BF",
  "#40E0D0",
  "#6495ED",
  "#CCCCFF",
  "#008080",
  "#800080",
];
btn.addEventListener("click", () => {
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.getElementById("heading").innerHTML = randomColor;
  document.body.style.background = randomColor;
  document.getElementById("colorChanger").style.color = randomColor;
  document.getElementById("colorChanger").style.borderColor = randomColor;
});
