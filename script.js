window.onload = function() {
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
    ],
    toggle = true;

  const title = document.getElementById("title"),
    R = document.getElementById("R"),
    G = document.getElementById("G"),
    B = document.getElementById("B"),
    toggler = document.getElementById("toggle"),
    colorSample = document.getElementById("color-sample"),
    result = document.getElementById("hex-result"),
    code = document.getElementById("hex-code");

  //Math for converting rgb to hex
  function getHex(num) {
    let x = Math.floor(num / 16);
    let y = num % 16;
    return hex[x] + hex[y];
  }

  //takes rgb input and converts to hex
  function convertRGB(R, G, B) {
    let a = getHex(R);
    let b = getHex(G);
    let c = getHex(B);
    return a + b + c;
  }

  //math for converting hex to rgb
  function getRGB(hexNum) {
    let nums = hexNum.toUpperCase().split("");
    if (nums.length != 2) {
      return "Invalid input";
    } else if (hex.indexOf(nums[0]) > -1) {
      return hex.indexOf(nums[0]) * 16 + hex.indexOf(nums[1]);
    } else {
      return "Invalid input";
    }
  }

  //takes hex input and converts to rgb
  function convertHex(R, G, B) {
    let a = getRGB(R).toString();
    let b = getRGB(G).toString();
    let c = getRGB(B).toString();
    return a + ", " + b + ", " + c;
  }

  //displays Hex to RGB converter
  function switchHextoRGB() {
    title.innerHTML = "Hexidecimal to RGB Converter";
    R.placeholder = "#";
    G.placeholder = "#";
    B.placeholder = "#";
    R.value = "";
    G.value = "";
    B.value = "";
    colorSample.style.backgroundColor = "#000000";
    result.innerHTML = "rgb(0, 0, 0)";
    code.innerHTML = "RGB Color Code:";
    toggler.innerHTML = "RGB to Hex";
    toggle ? (toggle = false) : (toggle = true);
  }

  //displays RGB to Hex converter
  function switchRGBtoHex() {
    title.innerHTML = "RGB to Hexidecimal Converter";
    R.placeholder = "RR";
    G.placeholder = "GG";
    B.placeholder = "BB";
    R.value = "";
    G.value = "";
    B.value = "";
    colorSample.style.backgroundColor = "#000000";
    toggler.innerHTML = "Hex to RGB";
    result.innerHTML = "#000000";
    code.innerHTML = "Hexidecimal Color Code:";
    toggle ? (toggle = false) : (toggle = true);
  }

  //toggles between hex to rgb and rgb to hex converter
  document.getElementById("toggle").onclick = function() {
    if (toggle) {
      switchHextoRGB();
    } else {
      switchRGBtoHex();
    }
  };

  document.getElementById("submit-button").onclick = function() {
    if (toggle) {
      let rr = Number(R.value),
        gg = Number(G.value),
        bb = Number(B.value);
      if (rr > 255 || gg > 255 || bb > 255) {
        result.innerHTML = "Not a valid RGB code";
      } else {
        result.innerHTML = "#" + convertRGB(rr, gg, bb);
        colorSample.style.backgroundColor = "#" + convertRGB(rr, gg, bb);
      }
    } else {
      let rr = R.value,
        gg = G.value,
        bb = B.value;
      result.innerHTML = "rgb(" + convertHex(rr, gg, bb) + ")";
      colorSample.style.backgroundColor = "rgb(" + convertHex(rr, gg, bb) + ")";
    }
    event.preventDefault();
  };
};
