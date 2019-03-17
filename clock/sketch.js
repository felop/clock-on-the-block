let font,
  fontsize = 40;
let crX = 20;
let crY = 20;
let edges = 10;


function setup() {
  createCanvas(crX * 12 + 2 * edges + 15, crY * 12 + 2 * edges);

  // Set text characteristic
  //textSize(fontsize);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);

  let hr = hour();
  let mn = minute();
  let sc = second();

  drawWords(0 + edges, 24, 12, hr); // 0
  drawWords(50 + edges, 60, 12, mn); // 40
  drawWords(160 + edges, 60, 12, sc); // 140
}

function drawWords(xask, len, cutby, brightnb) {
  textAlign(RIGHT);
  let y = 0;
  let x = 0;

  for (let i = 0; i < len; i++) {

    if (brightnb == i) {
      fill(200, 0, 200);
    } else {
      fill(65);
    }

    text(i, xask + crX * Math.floor((i) / cutby + 1), ((i) % cutby * crY) + edges+10);
  }

}
