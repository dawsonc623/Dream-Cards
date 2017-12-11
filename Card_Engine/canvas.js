const canvas = document.getElementById("myGame"); // Get the canvas id from the html document
const context = canvas.getContext('2d'); // game will be rendered in 2d

canvas.addEventListener('click', function(event) {
  var x = event.pageX - 0;
  var y = event.pageY - 0;
  let handX = 360;
  let handXOffset = handX + 45;
  let handY = 530;
  let handYOffset = handY + 70;
  if( x >= handX && x <= handXOffset && y >= handY && y <= handYOffset) {
    alert('you clicked ' + player1.hand[0].name);
  }
  if(x >= handX+110&& x <= handXOffset+110 && y >=handY && handYOffset) {
    alert('you clicked ' + player1.hand[1].name);
  }
  if(x >= handX+210&& x <= handXOffset+210 && y >=handY && handYOffset) {
    alert('you clicked ' + player1.hand[2].name);
  }
  
  if(x >= handX+310&& x <= handXOffset+310 && y >=handY && handYOffset) {
    alert('you clicked ' + player1.hand[3].name);
  }
  if(x >= handX+410&& x <= handXOffset+410 && y >=handY && handYOffset) {
    alert('you clicked ' + player1.hand[4].name);
  }
  if(x >= handX+510&& x <= handXOffset+510 && y >=handY && handYOffset) {
    alert('you clicked ' + player1.hand[5].name);
  }
  if(x >= handX+610&& x <= handXOffset+610 && y >=handY && handYOffset) {
    alert('you clicked ' + player1.hand[5].name);
  }
}, false);

function tile(x,y, color, number) {
  for(var i = 0; i < number; i++) {
      context.fillStyle = color;
      context.fillRect(x, y, 181, 165);
      x += 182;
  }
} // Tile function will create the tiles for the boards

function drawHand(x, y, user) {
  for(var i = 0; i < user.hand.length; i++) {
    context.fillStyle = "white";
    context.fillRect(x, y, 45, 60);
    x += 100
  }
} // Draw hand function will draw the state of the hand.

function draw_Element(x, y, color, width, height) {
  context.fillStyle = color;
  context.fillRect(x, y, width, height);
}
// hand x= 360
// hand y = 530 - width is 45 and height is 60
function draw() {
  context.fillStyle = "#000"; // fill canvas with this color
  context.fillRect(0, 0, canvas.width, canvas.height); // Black Rectangle background
  drawHand(360, 530, player1); // player 1 hand state.
  draw_Element(1090, 245, "green", 181, 165); // Background behind End Turn.
  tile(180, 160, "red", 5); // bot board
  tile(180, 325, "yellow", 5); // player1 board
  draw_Element(1090, 490, "#42a7f4", 180, 160); // Player 1 info ui
  draw_Element(0, 490, 'blue', 180, 160); // Player 1 hero
  draw_Element(0, 0, "orange", 180, 160); // Player 2 info ui
  draw_Element(1090, 0, 'pink', 180, 160); // Player 2 Hero
}//drawing the state of the board/

function updateValue(player, value) {
  document.getElementById(player).innerText = value;
} // update value function. Allows us to change values on canvas to manipulate state of the game.

let turnTracker = 0;
const seconds = 1000;
let lastTime = 0;

function update(time = 0) {
  const gameTime = time - lastTime;
  lastTime = time;

  turnTracker += gameTime;
  if (turnTracker > 90000) {
    //alert('turn ended');
    turnTracker = 0;
  }
  lastTime = time;
  draw();
  updateValue('hand_count_p1', player1.hand.length); // Player 1 hand count
  updateValue('deck_count_p1', player1.deck.length); // player 1 deck count
  updateValue('hand_count_p2', player2.hand.length); // Player 2 hand count
  updateValue('deck_count_p2', player2.deck.length); // player 2 deck count
  requestAnimationFrame(update);
}

player1.hand.push(imp);
player1.hand.push(imp_lord);
player1.hand.push(imp_archer);
player1.hand.push(imp_mage);
player1.hand.push(raigon);
player1.hand.push(boukoua);
player1.hand.push(Okami);
/*
1. Made the card interactions.

2. Added the controls.

3. Draw a card each turn.

4. Loop logic
*/
update();