var grid = [];
var GRID_LEN;
var s;
var squareSize;
var ant;
var running;

function setup() {

    running = false;

    s = 660;
    GRID_LEN = 20;
    squareSize = s / GRID_LEN;

    ant = new Ant(7, 7);

    var canvas = createCanvas(s + 1, s + 1);
    canvas.parent("canvas");

    frameRate(5);
    for(var i = 0; i < squareSize; i++) {

        grid[i] = [false];

    }

}

function draw() {

    background(220);
    for(var x = 0; x < GRID_LEN; x++) {

        for(var y = 0; y < GRID_LEN; y++) {

            if(grid[x][y])
                fill(0);
            else
                fill(255);

            rect(x * squareSize, y * squareSize, squareSize, squareSize);

        }

    }

    ant.draw();

    if(running) {

        //Current square is black
        if (grid[ant.x][ant.y])
            ant.turnLeft();

        //Current square is white
        else
            ant.turnRight();

        grid[ant.x][ant.y] = !grid[ant.x][ant.y];
        ant.move();

    }

}

function mousePressed() {

    x = Math.floor(mouseX / squareSize);
    y = Math.floor(mouseY / squareSize);

    console.log(mouseX + ", " + mouseY);

    grid[x][y] = !grid[x][y];

}

function startStop() {

    running = !running;
    
    if(running)
        document.getElementById("startstop").innerText = "Stop";
    else
        document.getElementById("startstop").innerText = "Start";


}

function Ant(x, y) {

    this.x = x;
    this.y = y;
    this.dir = 3; //NORTH = 0, WEST = 1, SOUTH = 2, EAST = 3

    this.turnRight = function() {

        this.dir = (this.dir + 1) % 4;

    }

    this.turnLeft = function() {

        this.dir = (this.dir + 3) % 4;

    }

    this.draw = function() {

        fill(255, 0, 0);
        rect(this.x * squareSize + squareSize * 0.8, this.y * squareSize + squareSize * 0.8, squareSize - 2 * squareSize * 0.8, squareSize - 2 * squareSize * 0.8);

    }

    //Move the ant one space according to direction;
    this.move = function() {

        switch(this.dir) {

            case 0: this.y--; break;
            case 1: this.x++; break;
            case 2: this.y++; break;
            default: this.x--; break;

        }

    }

}