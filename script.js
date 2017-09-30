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
  let nums = hexNum.split('');
  console.log((hex.indexOf(nums[0]) * 16) + (hex.indexOf(nums[1])));
}

//takes hex input and converts to rgb
function convertHex(hex) {
  let a = getRGB(R);
  let b = getRGB(G);
  let c = getRGB(B);
  return a + b + c;
}

//toggles between hex to rgb and rgb to hex converter
document.getElementById('toggle').onclick = function() {
  let title = document.getElementById('title'),
      R = document.getElementById('R'),
      G = document.getElementById('G'),
      B = document.getElementById('B'),
      toggler = document.getElementById('toggle');

 if (toggle) {
  title.innerHTML = 'Hexidecimal to RGB Converter';
   document.getElementById('R').placeholder='#';
   document.getElementById('G').placeholder='#';
   document.getElementById('B').placeholder='#';
   toggler.innerHTML='Convert RGB to Hex';
   toggle ? toggle = false : toggle = true;
 } else {
   title.innerHTML = 'RGB to Hexidecimal Converter';
   document.getElementById('R').placeholder='RR';
   document.getElementById('G').placeholder='GG';
   document.getElementById('B').placeholder='BB';
    toggler.innerHTML='Convert Hex to RGB';
   toggle ? toggle = false : toggle = true;
 }

}


document.getElementById('submit-button').onclick = function() {
  if (toggle) {
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
  } else {
    const
  }
  event.preventDefault();
};
