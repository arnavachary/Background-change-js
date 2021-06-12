function colorChange() {
  const colors = ["Red", "Green", "Blue", "Yellow", "Grey", "Pink"];
  const index = Math.floor(Math.random() * colors.length);

  document.getElementById("color").innerHTML = colors[index];
  document.getElementById("color").style.color = colors[index];
  document.querySelector("#container").style.background = colors[index];
}
