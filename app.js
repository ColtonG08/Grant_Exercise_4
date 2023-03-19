function setup(){
    // Happens only once
    myCanvas = createCanvas(1000, 800);
    myCanvas.parent('myContainer');
}

let distribution = new Array(360);
function setup() {
   myCanvas = createCanvas(1000, 800);
   myCanvas.parent('myContainer');
   textFont('Monoton');
  textSize(width / 100);
  textAlign(CENTER, CENTER);
   stroke('#F19C33');
   for (let i = 0; i < distribution.length; i++) {
     distribution[i] = floor(randomGaussian(500, 150));
   }
 }

function draw(){
    // Happens for every frame refresh of the browser
background('#F0EECD');
describe('canvas with off-white background');


/* fill('#138C82');
beginShape();
vertex(0, 100);
vertex(0, 150);
vertex(500, 400);
endShape(CLOSE); */

fill('#584632');
beginShape();
vertex(0, 200);
vertex(0, 250);
vertex(500, 400);
endShape(CLOSE);

fill('#F19C33');
beginShape();
vertex(0, 300);
vertex(0, 350);
vertex(500, 400);
endShape(CLOSE);

fill('#138C82');
beginShape();
vertex(0, 400);
vertex(0, 450);
vertex(500, 400);
endShape(CLOSE);

fill('#D94B25');
beginShape();
vertex(0, 500);
vertex(0, 550);
vertex(500, 400);
endShape(CLOSE);

fill('#584632');
beginShape();
vertex(0, 600);
vertex(0, 650);
vertex(500, 400);
endShape(CLOSE);

fill('#F19C33');
beginShape();
vertex(0, 700);
vertex(0, 750);
vertex(500, 400);
endShape(CLOSE);



fill('#F19C33');
beginShape();
vertex(0, 0);
vertex(0, 50);
vertex(500, 400);
endShape(CLOSE);

fill('#584632');
beginShape();
vertex(150, 0);
vertex(100, 0);
vertex(500, 400);
endShape(CLOSE);

fill('#D94B25');
beginShape();
vertex(250, 0);
vertex(200, 0);
vertex(500, 400);
endShape(CLOSE);

fill('#138C82');
beginShape();
vertex(350, 0);
vertex(300, 0);
vertex(500, 400);
endShape(CLOSE);

fill('#F19C33');
beginShape();
vertex(450, 0);
vertex(400, 0);
vertex(500, 400);
endShape(CLOSE);

fill('#584632');
beginShape();
vertex(550, 0);
vertex(500, 0);
vertex(500, 400);
endShape(CLOSE);

fill('#D94B25');
beginShape();
vertex(650, 0);
vertex(600, 0);
vertex(500, 400);
endShape(CLOSE);

fill('#138C82');
beginShape();
vertex(750, 0);
vertex(700, 0);
vertex(500, 400);
endShape(CLOSE);

fill('#F19C33');
beginShape();
vertex(850, 0);
vertex(800, 0);
vertex(500, 400);
endShape(CLOSE);

fill('#584632');
beginShape();
vertex(950, 0);
vertex(900, 0);
vertex(500, 400);
endShape(CLOSE);

fill('#D94B25');
beginShape();
vertex(1000, 0);
vertex(1050, 0);
vertex(500, 400);
endShape(CLOSE);




fill('#138C82');
beginShape();
vertex(0, 800);
vertex(50, 800);
vertex(500, 400);
endShape(CLOSE);

fill('#D94B25');
beginShape();
vertex(150, 800);
vertex(100, 800);
vertex(500, 400);
endShape(CLOSE);

fill('#584632');
beginShape();
vertex(250, 800);
vertex(200, 800);
vertex(500, 400);
endShape(CLOSE);

fill('#F19C33');
beginShape();
vertex(350, 800);
vertex(300, 800);
vertex(500, 400);
endShape(CLOSE);

fill('#138C82');
beginShape();
vertex(450, 800);
vertex(400, 800);
vertex(500, 400);
endShape(CLOSE);

fill('#D94B25');
beginShape();
vertex(550, 800);
vertex(500, 800);
vertex(500, 400);
endShape(CLOSE);

fill('#584632');
beginShape();
vertex(650, 800);
vertex(600, 800);
vertex(500, 400);
endShape(CLOSE);

fill('#F19C33');
beginShape();
vertex(750, 800);
vertex(700, 800);
vertex(500, 400);
endShape(CLOSE);

fill('#138C82');
beginShape();
vertex(850, 800);
vertex(800, 800);
vertex(500, 400);
endShape(CLOSE);

fill('#D94B25');
beginShape();
vertex(950, 800);
vertex(900, 800);
vertex(500, 400);
endShape(CLOSE);

fill('#584632');
beginShape();
vertex(1000, 800);
vertex(1050, 800);
vertex(500, 400);
endShape(CLOSE);



fill('#138C82');
beginShape();
vertex(1000, 100);
vertex(1000, 150);
vertex(500, 400);
endShape(CLOSE);

fill('#F19C33');
beginShape();
vertex(1000, 200);
vertex(1000, 250);
vertex(500, 400);
endShape(CLOSE);

fill('#584632');
beginShape();
vertex(1000, 300);
vertex(1000, 350);
vertex(500, 400);
endShape(CLOSE);

fill('#D94B25');
beginShape();
vertex(1000, 400);
vertex(1000, 450);
vertex(500, 400);
endShape(CLOSE);

fill('#138C82');
beginShape();
vertex(1000, 500);
vertex(1000, 550);
vertex(500, 400);
endShape(CLOSE);

fill('#F19C33');
beginShape();
vertex(1000, 600);
vertex(1000, 650);
vertex(500, 400);
endShape(CLOSE);

let s = 'Catch You On The Flip Side';
fill(0);
stroke(0);
textSize(50);
text(s, 350, 60, 300, 700); // Text wraps within text box

{
  translate(width / 1.99, width / 2.5);
  for (let i = 2; i < distribution.length; i++) {
     rotate(TWO_PI / distribution.length);
     stroke('#638B60');
     let dist = abs(distribution[i]);
     line(140, 20, dist, 5);
   }
  describe(`lines radiate from center of canvas.
     The size changes each render.`);
 }
 
helperCoordinates();
}

function helperCoordinates(){
    fill();
    text(
        '(' + 
        floor(mouseX) +
        ',' +
        floor(mouseY) +
        ')',
        mouseX,
        mouseY
    );
}