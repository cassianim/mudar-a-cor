var quadrado
var cor1
var cor2
var cor3

function setup() {
  createCanvas(400, 400);
  quadrado = createSprite(200, 200, 50, 50)
  cor1 = 232
  cor2 = 199
  cor3 = 122

}


function draw() {

  background(cor1, cor2, cor3);

  if (keyIsDown(RIGHT_ARROW)) {
    quadrado.position.x = quadrado.position.x + 4

  }
  if (keyIsDown(LEFT_ARROW)) {
    quadrado.position.x = quadrado.position.x - 4

  }
  if (keyIsDown(UP_ARROW)) {
    quadrado.position.y = quadrado.position.y - 4

  }

  if (keyIsDown(DOWN_ARROW)) {
    quadrado.position.y = quadrado.position.y + 4

  }


  if (keyIsDown(RIGHT_ARROW)) {
    cor1 = 0
    cor2 = 0
    cor3 = 255

  }



  if (keyIsDown(DOWN_ARROW)) {
    cor1 = 120
    cor2 = 023
    cor3 = 244
  }
  if (keyIsDown(UP_ARROW)) {
    cor1 = 255
    cor2 = 0
    cor3 = 255

  }

  if (keyIsDown(LEFT_ARROW)){
    cor1 = 012
    cor2 = 023
    cor3 = 064

  }


  drawSprites();
}


