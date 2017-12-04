
//Declare player class
var Player = function(x,y) {
    this.x = x;//Player x coordinates
    this.y = y;//Player y coordinates
    this.height = 80;
    this.width = 80;
    this.speed = 100;
    this.sprite = 'images/char-princess-girl.png';
};
//Ensure that the player does not exceed the specified area
Player.prototype.update = function(dt) {
    if (this.x < 0) {
        this.x = 0;
    }
    else if (this.x > 400) {
        this.x = 400;
    }
    else if (this.y < 0) {
        this.reset();
    }
    else if (this.y > 400) {
        this.y = 400;
    }
    this.checkcollisions();
}

//Reset the player's position
Player.prototype.reset = function() {
        this.y = 400;
        this.x = 200;
};
//Control the distance the player moves
Player.prototype.handleInput = function(direction) {
    switch (direction) {
        case 'left':
            this.x -= 100;
            break;
        case 'right':
            this.x += 100;
            break;
        case 'up':
            this.y -= 85;
            break;
        case 'down':
            this.y += 85;
            break;
    }
}
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
//Collision detection
Player.prototype.checkcollisions = function() {

    for (var i = 0; i < allEnemies.length; i++) {
        if ((this.x < allEnemies[i].x + allEnemies[i].width) && (this.x + this.width > allEnemies[i].x) && (this.y < allEnemies[i].y + allEnemies[i].height) && (this.height + this.y > allEnemies[i].y)) {
            //Call reset method
            this.reset();
        }
    }
};

// Enemies our player must avoid
var Enemy = function(x,y) {
    this.x = x;
    this.y = y;
    this.speed = 100;
    this.height = 80;
    this.width = 100;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x = this.x + this.speed * dt;
    if (this.x > 500) {
        this.x = 0;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Create enemy objects.
var enemy1 = new Enemy(5,5);
var enemy2 = new Enemy(125,190);
var enemy3= new Enemy(85,100);
// Put all enemies in array allEnemies
var allEnemies = [enemy1,enemy2,enemy3];

//Initialize player object
var player = new Player(200,400);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
