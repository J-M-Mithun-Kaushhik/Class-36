var db, gs = 0;
var game, player, form, pc;
var allPlayers;
var car1, car2, cars

function setup(){
    createCanvas(displayWidth, displayHeight);
    
    db = firebase.database();
    game = new Game();
    game.getGameState();
    game.start();

    
}

function draw(){
    if(pc === 2){
    game.updateGameState(1)
    }
    if (gs === 1){
        clear();
        game.play();
    }
}


