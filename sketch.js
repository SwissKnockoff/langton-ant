var grid = [];
var GRID_LEN;
var s;
var squareSize;
var ant;

function setup() {

    s = 660;
    GRID_LEN = 20;
    squareSize = s / GRID_LEN;

    ant = new Ant(7, 7);

    createCanvas(s + 1, s + 1);
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

    //Current square is black
    if (grid[ant.x][ant.y])
        ant.turnLeft();

    //Current square is white
    else
        ant.turnRight();

    grid[ant.x][ant.y] = !grid[ant.x][ant.y];
    ant.move();

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

            case 0: this.y--; console.log("NORTH"); break;
            case 1: this.x++; console.log("WEST"); break;
            case 2: this.y++; console.log("SOUTH"); break;
            default: this.x--; console.log("EAST"); break;

        }

    }

}