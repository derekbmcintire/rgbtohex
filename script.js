function getHex(num) {
  let hex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F"
  ];
  let x = Math.floor(num / 16);
  let y = num % 16;
  return hex[x] + hex[y];
}

function convert(R, G, B) {
  let a = getHex(R);
  let b = getHex(G);
  let c = getHex(B);
  return a + b + c;
}

document.getElementById('submit-button').onclick = function() {
  const rr = Number(document.getElementById("R").value),
    gg = Number(document.getElementById("G").value),
    bb = Number(document.getElementById("B").value);
  if (rr > 255 || gg > 255 || bb > 255) {
    document.getElementById('hex-result').innerHTML = "Not a valid RGB code";
  } else {
  document.getElementById('hex-result').innerHTML = "#" + convert(rr, gg, bb);
  document.getElementById("color-sample").style.backgroundColor =
    "#" + convert(rr, gg, bb);
  }
  event.preventDefault();
};
