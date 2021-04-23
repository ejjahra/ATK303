// var myCar ;
var myCars = [];
var frogPos;
// var score = 0;
var myState = 0;
var maxTimer = 30 * 60;
var timer = maxTimer;
var frogMouth;
var numCars = 20;
var bg, bg2, bg3, bg4, sfx, sfx1, music;
var pugsize = .5;
var hitboxX = -105;
var hitboxY = 90;
var delta = 30;

function preload() {
  bg = loadImage("assets/openingscreen.png");
  bg2 = loadImage("assets/game.png");
  bg3 = loadImage("assets/lose.png");
  bg4 = loadImage("assets/win.png");

  sfx = loadSound("assets/pugyum.wav");
  sfx1 = loadSound("assets/sniffs.wav")
  music = loadSound("assets/music.wav")

  sfx.pause();
  sfx1.pause();
  music.loop();
  music.pause();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frogPos = createVector(width / 2, height - 100);
  frogMouth = createVector(frogPos.x, frogPos.y);

  // spawn "how_many" cars here -- FOR loop, push new cars onto myCars array
  spawnCars(numCars);
  music.play();

}


function draw() {

  switch (myState) {
    case 0:
      image(bg, 0, 0, windowWidth, windowHeight);
      translate(425, 120);
      makeFrog();
      break;

    case 1:
      game();
      break;

    case 2:
      image(bg3, 0, 0, windowWidth, windowHeight);
      sfx1.play();
      pugsize = .5;
      hitboxX = -105;
      hitboxY = 90;
      timer = maxTimer;
      delta = 30;
      frogPos = createVector(width / 2, height - 100);
      myState = 4;
      break;

    case 3:
      image(bg4, 0, 0, windowWidth, windowHeight);
      sfx1.play();
      pugsize = .5;
      hitboxX = -105;
      hitboxY = 90;
      timer = maxTimer;
      delta = 30;
      frogPos = createVector(width / 2, height - 100);
      myState = 4;
      break;

      case 4:
      break;
  }
}




function game() {
  // put drawing code here
  image(bg2, 0, 0, windowWidth, windowHeight);

  rectMode(CENTER);

  // THE FROG CODE

  checkForKeys(); // move the frog position depending on the key hits
  frogMouth.x = frogPos.x + hitboxX; // that 100 is just tweaked to where the frog's "hit" point is.
  frogMouth.y = frogPos.y - hitboxY; // same here. It's kind of random that they are both 100 in this case

  // the frog code is "hard-coded" to make a character that is a bit large for our game
  // and it's also too far down on the y axis so we are scaling and translating it with an offset
  push();
  translate(frogPos.x - 225, frogPos.y - 300); // figure out this offset first
  scale(pugsize); // then figure out the scale command - make sure scale is after translate!
  makeFrog();
  pop();

  // this is for debugging purposes - put an ellipse here so you can see where the "hit point" is
  //ellipse(frogMouth.x, frogMouth.y, 70, 70);

  // END FROG CODE


  // ITERATE THROUGH THE CARS and move and display and test for collision
  for (var i = 0; i < myCars.length; i++) {
    myCars[i].move();
    myCars[i].display();

    // collision detection

    var d = myCars[i].pos.dist(frogMouth);
    console.log(d);
    if (d < delta) {
      myCars.splice(i, 1);
      pugsize+= .1;
      hitboxX+= 25
      hitboxY+= -50;
      sfx.play();
      delta+= 5;
    }
  }
  // END ITERATING THROUGH THE CARS CODE


  // IF NO CARS ARE LEFT,
  if (myCars.length == 0) {
    //GO TO THE WIN STATE!
    myState = 3;
    sfx1.play();
    // re-spawn your "cars" because this area happens quickly, once.
    spawnCars(numCars);
  }


  // THE GAME HAS A TIMER
  timer--;

  // make a rectangle that represents how much time is left
  fill(255);
  rectMode(CORNER);
  var timerWidth;
  timerWidth = map(timer, 0, maxTimer, 10, width - 10);
  rect(10, 10, timerWidth, 10);

  // IF THE TIMER IS 0,
  if (timer == 0) {
    // GO TO THE LOSE STATE
    myState = 2;
    // reset the timer for next time
    timer = 0;
    // re-spawn your "cars" because this area happens quickly, once.
    spawnCars(numCars);
  }


  // // here is the score!
  // fill(255, 0, 0);
  // textSize(28);
  // text("score = " + score, 30, 30);

}


// Define the Car class
function Car() {
  // properties
  this.pos = createVector(windowWidth/2, windowHeight/2);
  this.vel = createVector(random(-3, 3), random(-3, 3));
  this.c = color(random(255), random(255), random(255), random(100));


  // methods
  this.move = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width - 100) this.pos.x = 0;
    if (this.pos.x < -100) this.pos.x = width - 100;
    if (this.pos.y > height + 300) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height + 300;
  }

  this.display = function() {
    fill(this.c);

    push();
    translate(this.pos.x - 80, this.pos.y - 75);
    scale(.20);
    loaf();
    pop();

    //ellipse(this.pos.x, this.pos.y, 50, 50);
  }

}


function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;

}

function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 2: // "you lost" state
      myState = 0;
      break;

    case 4: // "you won" state
      myState = 0;
      break;


  }

}



function makeFrog() {
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
}

function loaf() {
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

function spawnCars(how_many) {
  // set the cars array to empty
  myCars = [];
  // push "how_many" cars on the list
  for (var i = 0; i < how_many; i++) {
    myCars.push(new Car());
  }
}
