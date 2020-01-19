function setup() {
  // put setup code here
  createCanvas(displayWidth, displayHeight);
}

function draw() {
  // put drawing code here
  background(0, 50, 85);
  fill(000);
  text("my mouse is at " + mouseX + "," + mouseY, 20, 300);

  fill(247, 174, 30);
  circle(1323, 685, 400);
  fill(241, 90, 36);
  circle(1323, 685, 300);

  fill(98, 181, 115);
  rect(0, 685, 1680, 2000);
  makeMedMountain();
  makeBigMountain();

  makeSnow();

  makeSnow1();

  scale(.75);
  translate(775, 375);
  makeMedMountain();

  scale(1.2);
  translate(170, -72);
  makeSnow1();


}



function makeBigMountain() {
   translate(200, -100);
    scale(1.25);
    translate(-20, 0);
    fill(154, 175, 182);
    noStroke();
    beginShape();
    curveVertex(75, 686);
    curveVertex(75, 686);
    curveVertex(150, 466);
    curveVertex(225, 306);
    curveVertex(300, 249);
    curveVertex(375, 337);
    curveVertex(450, 506);
    curveVertex(512, 685);
    curveVertex(525, 743);
    endShape();

      beginShape();
        curveVertex(75, 686);
        curveVertex(75, 686);
        curveVertex(174, 734);
        curveVertex(286, 754);
        curveVertex(419, 732);
        curveVertex(512, 685);
        curveVertex(512, 685);
      endShape();

    translate(20, 0);
    fill(169, 192, 200);
    noStroke();
    beginShape();
    curveVertex(75, 686);
    curveVertex(75, 686);
    curveVertex(150, 466);
    curveVertex(225, 306);
    curveVertex(300, 249);
    curveVertex(375, 337);
    curveVertex(450, 506);
    curveVertex(512, 685);
    curveVertex(525, 743);
    endShape();

      beginShape();
        curveVertex(75, 686);
        curveVertex(75, 686);
        curveVertex(174, 734);
        curveVertex(286, 754);
        curveVertex(419, 732);
        curveVertex(512, 685);
        curveVertex(512, 685);
      endShape();
}

function makeMedMountain() {
  translate(-22, 0);
  fill(154, 175, 182);
  noStroke();
  beginShape();
  curveVertex(75, 686);
  curveVertex(75, 686);
  curveVertex(150, 466);
  curveVertex(225, 306);
  curveVertex(300, 249);
  curveVertex(375, 337);
  curveVertex(450, 506);
  curveVertex(512, 685);
  curveVertex(525, 743);
  endShape();

    beginShape();
      curveVertex(75, 686);
      curveVertex(75, 686);
      curveVertex(174, 734);
      curveVertex(286, 754);
      curveVertex(419, 732);
      curveVertex(512, 685);
      curveVertex(512, 685);
    endShape();

  translate(22, 0);
  fill(169, 192, 200);
  noStroke();
  beginShape();
  curveVertex(75, 686);
  curveVertex(75, 686);
  curveVertex(150, 466);
  curveVertex(225, 306);
  curveVertex(300, 249);
  curveVertex(375, 337);
  curveVertex(450, 506);
  curveVertex(512, 685);
  curveVertex(525, 743);
  endShape();

  noStroke();
    beginShape();
      curveVertex(75, 686);
      curveVertex(75, 686);
      curveVertex(174, 734);
      curveVertex(286, 754);
      curveVertex(419, 732);
      curveVertex(512, 685);
      curveVertex(512, 685);
    endShape();
}

function makeSnow() {
    fill(555);
    arc(216, 368, 50, 50, 0, PI);
    arc(250, 368, 30, 30, 0, PI);
    arc(275, 368, 30, 60, 0, PI);
    arc(305, 368, 40, 40, 0, PI);
    arc(327, 368, 10, 20, 0, PI);
    arc(345, 368, 30, 30, 0, PI);
    arc(375, 368, 32, 40, 0, PI);

    translate(1,0);
    beginShape();
    curveVertex(190, 368);
    curveVertex(190, 368);
    curveVertex(210, 330);
    curveVertex(230, 299);
    curveVertex(250, 274);
    curveVertex(270, 257);
    curveVertex(290, 248);
    curveVertex(310, 253);
    curveVertex(330, 271);
    curveVertex(351, 298);
    curveVertex(371, 331);
    curveVertex(391, 368);
    curveVertex(391, 368);
    endShape();
}

function makeSnow1() {
    translate(-175, 68);
    scale(.85);
    fill(555);
    arc(216, 368, 50, 50, 0, PI);
    arc(250, 368, 30, 30, 0, PI);
    arc(275, 368, 30, 60, 0, PI);
    arc(305, 368, 40, 40, 0, PI);
    arc(327, 368, 10, 20, 0, PI);
    arc(345, 368, 30, 30, 0, PI);
    arc(375, 368, 32, 40, 0, PI);

    translate(1,0);
    beginShape();
    curveVertex(190, 368);
    curveVertex(190, 368);
    curveVertex(210, 330);
    curveVertex(230, 299);
    curveVertex(250, 274);
    curveVertex(270, 257);
    curveVertex(290, 248);
    curveVertex(310, 253);
    curveVertex(330, 271);
    curveVertex(350, 298);
    curveVertex(370, 331);
    curveVertex(390, 368);
    curveVertex(390, 368);
    endShape();
}
