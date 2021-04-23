var myState = 0;
var lil;
var lil1;
var lil2;
var lil3;
var lil4;
var lil5;
var lil6;
var lil7;
var lil8;
var lil9;
var lilfoot, bg0, bg, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12, yes, no, you, youface, lilfoot, lilshoes, lilglasses, lilbowtie, lilgel, lilrose, lilmixtape, lilguitar, lilring;
var shoes;
var glasses;
var bowtie;
var gel;
var rose;
var mixtape;
var guitar;
var ring;
var lilpos = 200;
var video;
var timer = 0;
var myFont;
var music;
//********************************************************************
function setup() {
  createCanvas(1680, 765);
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();
  imageMode(CENTER);
  music.play();
}
//********************************************************************
function preload() {
  bg0 = loadImage("assets/Splash_ScreenOPEN.png");
  bg = loadImage("assets/bgforest.png");
  bg2 = loadImage("assets/bgall.png"); //all items
  bg3 = loadImage("assets/bgshoes.png"); //no shoes
  bg4 = loadImage("assets/bgglasses.png"); //no glasses
  bg5 = loadImage("assets/bgbowtie.png"); //no bowtie
  bg6 = loadImage("assets/bggel.png"); //no gel
  bg7 = loadImage("assets/bgrose.png"); //no rose
  bg8 = loadImage("assets/bgmixtape.png"); //no mixtape
  bg9 = loadImage("assets/bgguitar.png"); //no guitar
  bg10 = loadImage("assets/bgring.png"); //no ring
  bg11 = loadImage("assets/background2.png");
  bg12 = loadImage("assets/foreground2.png");
  yes = loadImage("assets/Splash_ScreenYES.png");
  no = loadImage("assets/Splash_ScreenNO.png");
  you = loadImage("assets/Lil_YOU.png");
  youface = loadImage("assets/LilYOU_Face.png");

  lilfoot = loadImage("assets/lilfoot.png"); //no items
  lilshoes = loadImage("assets/lilfootshoes.png"); //1
  lilglasses = loadImage("assets/lilfootglasses.png"); //2
  lilbowtie = loadImage("assets/lilfootbowtie.png"); //3
  lilmixtape = loadImage("assets/lilfootmixtape.png") //4
  lilgel = loadImage("assets/lilfootgel.png"); //5
  lilrose = loadImage("assets/lilfootrose.png"); //6
  lilguitar = loadImage("assets/lilfootguitar.png"); //7
  lilring = loadImage("assets/lilfootall.png"); //8

  myFont = loadFont('assets/Dokdo-Regular.ttf');

  music = loadSound('assets/FINAL.wav');

  music.loop();
  music.pause();
}
//********************************************************************

function draw() {
  background(0);


  switch (myState) {

    case 0:
    image(bg0, width /2, height/2);
    fill('white');
    textFont(myFont);
    textSize(80);
    text("Lilfoot's Big Day", 950, 300);
    textSize(40);
    text("Solve the riddles to", 1075, 400);
    text("help Lilfoot reach his goal!", 1015, 450);
    textSize(30);
    text("Click anywhere to begin!", 1085, 600);
    break;

    case 1:
      image(bg, width / 2, height / 2);
      fill('white');
      lil(lilpos);
      image(bg2, width / 2, height / 2);
      shoes();
      fill(19, 23, 58);
      textFont(myFont);
      textSize(30);
      text('Lilfoot tracks are so hard to find, how come?', 350, 330);
      break;

    case 2:
      image(bg, width / 2, height / 2);
      fill('white');
      lil1(lilpos);
      if (lilpos <= 450)  lilpos+=10;
      image(bg3, width / 2, height / 2);
      glasses();
      fill(19, 23, 58);
      textFont(myFont);
      textSize(30);
      text('Lilfoot’s intentions are clear.', 350, 330);
      break;

    case 3:
      image(bg, width / 2, height / 2);
      fill('white');
      lil2(lilpos);
      if (lilpos <= 650)  lilpos+=10;
      image(bg4, width / 2, height / 2);
      bowtie();
      fill(19, 23, 58);
      textFont(myFont);
      textSize(30);
      text('EITWOB! EITWOB! Is bigfoots mating call.', 350, 330);
      break;

    case 4:
      image(bg, width / 2, height / 2);
      fill('white');
      lil3(lilpos);
      if (lilpos <= 850) lilpos+=10;
      image(bg5, width / 2, height / 2);
      gel();
      fill(19, 23, 58);
      textFont(myFont);
      textSize(30);
      text('Find something as slick as lilfoot.', 350, 330);
      break;

    case 5:
      image(bg, width / 2, height / 2);
      fill('white');
      lil4(lilpos);
      if (lilpos <= 1050) lilpos+=10;
      image(bg6, width / 2, height / 2);
      rose();
      fill(19, 23, 58);
      textFont(myFont);
      textSize(30);
      text('... are red, violet’s are blue, Lilfoot wants to put a baby in you.', 303, 330);
      break;

    case 6:
      image(bg, width / 2, height / 2);
      fill('white');
      lil5(lilpos);
      if (lilpos <= 1250) lilpos+=10;
      image(bg7, width / 2, height / 2);
      mixtape();
      fill(19, 23, 58);
      textFont(myFont);
      textSize(30);
      text('What’s the most romantic gift you could receive?', 350, 330);
      break;

    case 7:
      image(bg, width / 2, height / 2);
      fill('white');
      lil6(lilpos);
      if (lilpos <= 1450) lilpos+=10;
      image(bg8, width / 2, height / 2);
      guitar();
      fill(19, 23, 58);
      textFont(myFont);
      textSize(28);
      text('Unlike all of Lilfoot’s previous flings, there ARE strings attached.', 305, 330);
      break;

    case 8:
      image(bg, width / 2, height / 2);
      fill('white');
      lil7(lilpos);
      if (lilpos <= 1650) lilpos+=10;
      image(bg9, width / 2, height / 2);
      ring();
      fill(19, 23, 58);
      textFont(myFont);
      textSize(30);
      text("Lilfoot's phone is going off again...", 350, 330);
      break;

    case 9:
      image(bg, width / 2, height / 2);
      fill(19, 23, 58);
      lil8(lilpos);
      if (lilpos <= 1850) lilpos+=10;
      image(bg10, width / 2, height / 2);
      timer++;
      if (timer > 60 * 2) {
        myState = 10;
        timer = 0;
        lilpos = 0;
      }
      break;

    case 10:
    image(bg11, width / 2, height / 2);
    lil9(lilpos);
    if (lilpos <= 750) lilpos+=10;
    image(you, width / 2 + 100, height / 2 + 150, 500, 500);
    image(bg12, width / 2, height / 2);
    push();
    tint(196, 189, 72);
    image(video, width /2 + 80, height / 2 + 90, 70, 70);
    pop();
    image(youface, width/2 + 95, height/2 + 150, 500, 500);
    timer++;
    if (timer > 60 * 2){
      myState = 11;
    }
      break;

    case 11:
    image(bg11, width / 2, height / 2);
    lil9(lilpos);
    if (lilpos <= 750) lilpos+=10;
    image(you, width / 2 + 100, height / 2 + 150, 500, 500);
    image(bg12, width / 2, height / 2);
    push();
    tint(196, 189, 72);
    image(video, width /2 + 80, height / 2 + 90, 70, 70);
    pop();
    image(youface, width/2 + 95, height/2 + 150, 500, 500);
    fill(213, 144, 74);
    textSize(72);
    text('Will you marry Lilfoot?', width/2 - 375, 200);
    textSize(60);
    text('yes', 360, height/2 + 100);
    text('no', width - 450, height/2 + 100);
    break;

    case 12:
    image(yes, width/2, height/2);
    push();
    tint(196, 189, 72);
    image(video, 1260, 442, 255, 255);
    pop();
    image(youface, 1300, 660, 1600, 1800);
    break;

    case 13:
    image(no, width/2, height/2);
    break;




  }

}

//********************************************************************

function lil(x) {
  image(lilfoot, x, 540, 250, 250);
}

function lil1(x) {
  image(lilshoes, x, 540, 250, 250);
}

function lil2(x) {
  image(lilglasses, x, 540, 250, 250);
}

function lil3(x) {
  image(lilbowtie, x, 540, 250, 250);
}

function lil4(x) {
  image(lilgel, x, 540, 250, 250);
}

function lil5(x) {
  image(lilrose, x, 540, 250, 250);
}

function lil6(x) {
  image(lilmixtape, x, 540, 250, 250);
}

function lil7(x) {
  image(lilguitar, x, 540, 250, 250);
}

function lil8(x) {
  image(lilring, x, 540, 250, 250);
}

function lil9(x) {
  image(lilring, x, 540, 350, 350);
}

//********************************************************************

function shoes() {
  noFill();
  noStroke();
  ellipse(1521, 204, 125, 125);
}

function glasses() {
  noFill();
  noStroke();
  ellipse(1215, 244, 75, 75);
}

function bowtie() {
  noFill();
  noStroke();
  ellipse(253, 613, 75, 75);
}

function gel() {
  noFill();
  noStroke();
  ellipse(254, 644, 80, 80);
}

function rose() {
  noFill();
  noStroke();
  ellipse(216, 157, 50, 50);
}

function mixtape() {
  noFill();
  noStroke();
  ellipse(1456, 629, 60, 60);
}

function guitar() {
  noFill();
  noStroke();
  ellipse(1521, 594, 60, 60);
}

function ring() {
  noFill();
  noStroke();
  ellipse(918, 219, 80, 80);
}

//********************************************************************

function mouseReleased() {

  switch (myState) {
    case 0:
    myState = 1;
    break;

    case 1:
      var d = dist(mouseX, mouseY, 1521, 204);
      if (d < 62.5) {
        myState = 2;
      }
      break;

    case 2:
      var d = dist(mouseX, mouseY, 1215, 244);
      if (d < 37.5) {
        myState = 3;
      }
      break;

    case 3:
      var d = dist(mouseX, mouseY, 253, 613);
      if (d < 37.5) {
        myState = 4;
      }
      break;

    case 4:
      var d = dist(mouseX, mouseY, 254, 613);
      if (d < 40) {
        myState = 5;
      }

      break;

    case 5:
      var d = dist(mouseX, mouseY, 216, 157);
      if  (d < 25) {
        myState = 6;
      }
      break;

    case 6:
      var d = dist(mouseX, mouseY, 1456, 629);
      if (d < 30) {
        myState = 7;
      }
      break;

    case 7:
      var d = dist(mouseX, mouseY, 1521, 594);
      if (d < 30) {
        myState = 8;
      }
      break;

    case 8:
      var d = dist(mouseX, mouseY, 918, 219);
      if (d < 40) {
        myState = 9;
      }
      break;
    case 9:
    break;

    case 10:
    break;

    case 11:
    var d = dist(mouseX, mouseY, 360, height/2 + 100);
    if (d < 50) {
      myState = 12;
    }
    var d = dist(mouseX, mouseY, width - 450, height/2 + 100);
    if (d < 50) {
      myState = 13;
    }
  }

}
