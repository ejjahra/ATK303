function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255);
  text("my mouse is at " + mouseX + "," + mouseY, 20, 20);

  if(mouseIsPressed) {
  //shading
    fill(247, 219, 170);
      //right feet
        arc(276, 480, 50, 75, 0, PI);
        arc(450, 480, 50, 75, 0, PI);
      //body
        arc(400, 400, 500, 200, 0, PI);
      //tail
        fill(230, 186, 135);
        ellipse(650, 350, 75, 75);
  //body
    fill(230, 186, 135);
      arc(374, 400, 551, 75, 0, HALF_PI);
      arc(400, 400, 500, 350, PI, 0);
      arc(275, 400, 250, 200, PI, 0);
      arc(275, 400, 250, 150, 0, PI);
      arc(310, 350, 300, 200, PI, 0);
      //arc(500, 340, 270, 200, PI + HALF_PI, 0);
    noFill();
      arc(400, 325, 250, 200, PI + HALF_PI, 0);
      arc(275, 400, 250, 200, PI, 0);
  //eyebrows
    fill(153, 98, 69);
      arc(300, 405, 50, 30, PI, 0);
      arc(200, 405, 50, 30, PI, 0);
      arc(300, 405, 50, 45, 0, PI);
      arc(200, 405, 50, 45, 0, PI);
  //snout
    fill(153, 98, 69);
      ellipse(250, 440, 155, 70);

  //tail
    fill(230, 186, 135);
      arc(643, 340, 50, 50, 0, PI + QUARTER_PI);
    noFill()
      arc(661, 334, 20, 15, QUARTER_PI, PI + QUARTER_PI);
  //left feet
    fill(247, 219, 170);
      arc(393, 470, 50, 75, 0, PI);
      arc(550, 470, 50, 75, 0, PI);

  //left ear
    fill(153, 98, 69);
      arc(330, 350, 90, 20, PI + HALF_PI, 0);
      arc(360, 350, 30, 105, 0, HALF_PI);
      arc(363, 343, 67, 120, HALF_PI, PI);
  //right ear
      arc(190, 350, 90, 20, PI, PI + HALF_PI);
      arc(160, 350, 30, 105, HALF_PI, PI);
      arc(157, 343, 67, 120, 0, HALF_PI);
  //eyes and nose
    fill(0);
      ellipse(190, 405, 15, 15);
      ellipse(310, 405, 15, 15);
      ellipse(245, 406, 30, 15);
    fill(255);
      ellipse(189, 403, 3, 5);
      ellipse(309, 403, 3, 5);
  //wrinkles
    noFill();
      arc(215, 375, 40, 20, PI, 0);
      arc(285, 375, 40, 20, PI, 0);
} else {
  //shading
    fill(247, 219, 170);
    //body
      arc(400, 400, 500, 200, 0, PI);
  //body
    fill(230, 186, 135);
      arc(400, 400, 500, 75, 0, PI);
      arc(400, 400, 500, 350, PI, 0);
      //arc(275, 400, 250, 200, PI, 0);
      //arc(275, 400, 250, 150, 0, PI);
      arc(310, 350, 300, 200, PI, 0);
      arc(500, 340, 270, 200, PI + HALF_PI, 0);
      //arc(530, 350, 150, 200, PI + HALF_PI, 0);
    noFill();
      arc(400, 325, 250, 200, PI + HALF_PI, 0);
      //arc(275, 400, 250, 200, PI, 0);
}
}
