var matrix = [];
var grassArr = [];
var blackArr = [];
var grassEaterArr = [];
var grassTigrArr = [];
var grassGazanArr = [];

var side = 20;
function setup() {
    function matrixGenerator(matrixSize, grassCount, grassEaterCount,grassTigrCount,grassGazanCount,blackCount){
        for (let i = 0; i < matrixSize; i++) {
            matrix[i] = []
            for (let o = 0; o < matrixSize; o++) {
                matrix[i][o] = 0;
            }
        }
        for (let i = 0; i < grassCount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 1;
        }
        for (let i = 0; i < grassEaterCount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 2;
        }
         for (let i = 0; i < grassTigrCount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 3;
        }
       
        for (let i = 0; i < grassGazanCount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 4;
        }
        for (let i = 0; i < blackCount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 5;
        }
         
    }
    matrixGenerator(60, 45, 18,15,15,15)
   
    frameRate(3);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
           
            if (matrix[y][x] == 1){
                let gr = new Grass(x, y);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2){
                let eater = new GrassEater(x, y);
                grassEaterArr.push(eater);
            }
            else if (matrix[y][x] == 4){
                let gazan = new GrassGazan(x, y);
                grassGazanArr.push(gazan);
            }
            else if (matrix[y][x] == 5){
                let bl = new Black(x, y);
                blackArr.push(bl);
            }
           
             else if (matrix[y][x] == 3){
                let tigr = new GrassTigr(x, y);
                grassTigrArr.push(tigr);
            }
        }
    }
}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
            }
            else if (matrix[y][x] == 5) {
                fill("black");
            }
           
            rect(x * side, y * side, side, side);

        }
    }

    for (let i = 0; i < grassArr.length; i++) {
        const grass = grassArr[i];
        grass.mul();
    }
      for (let i = 0; i < blackArr.length; i++) {
        const black = blackArr[i];
        black.mulblack();
    }
    for (let i = 0; i < grassEaterArr.length; i++) {
        const eater = grassEaterArr[i];
        eater.eat();
    }
    for (let i = 0; i < grassGazanArr.length; i++) {
        const gazan = grassGazanArr[i];
        gazan.eatet();
    }
   for (let i = 0; i < grassTigrArr.length; i++) {
        const tigr = grassTigrArr[i];
        tigr.eated();
    }
 
}

