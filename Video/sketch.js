let video;
let asciiDiv;
let videoWidth = 100;
let videoHeight = 50;
let spacesQuatity = 10;

function setup() {
  video = createCapture(VIDEO);
  video.size(videoWidth, videoHeight);
  asciiDiv = createDiv("");
}

function draw() {
  const space = " ";
  const txt = space.repeat(spacesQuatity) + ".:-i|=+%O#@";
  const W = videoWidth;
  const H = videoHeight;

  background(0);
  video.loadPixels();
  let output = "";

  for (let j = 0; j < H; j++) {
    for (let i = 0; i < W; i++) {
      let index = (i + j * W) * 4; // 1 = 41 * 4, 2 =  42 * 4.....
      let r = video.pixels[index + 0];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];
      let bright = (r + g + b) / 3;
      let bindex = map(bright, 0, 255, 0, txt.length);
      let ch = txt.charAt(floor(bindex));
      if (ch == " ") {
        output += "&nbsp;";
      } else {
        output += ch;
      }
    }
    output += "<br>";
  }
  asciiDiv.html(output);
}
