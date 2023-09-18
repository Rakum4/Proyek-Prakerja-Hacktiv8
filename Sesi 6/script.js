function animateTextColor(element, colors) {
  let currentColorIndex = 0;

  function changeColor() {
    element.style.color = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
  }

  setInterval(changeColor, 1000);

  setTimeout(changeColor, 10000);
}

const textElementPertama = document.getElementById("text-pertama");
const textElementKedua = document.getElementById("text-kedua");
const textElementKetiga = document.getElementById("text-ketiga");

textElementPertama && animateTextColor(textElementPertama, ["red", "black"]);

textElementKedua && animateTextColor(textElementKedua, ["green", "black"]);

textElementKetiga && animateTextColor(textElementKetiga, ["blue", "black"]);
