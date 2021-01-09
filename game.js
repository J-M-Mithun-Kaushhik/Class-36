class Game {
    constructor() {

    }
    getGameState(){
        db.ref('gameState').on('value', function (data){
            gs = data.val();
        })
    }
    updateGameState(state){
        db.ref('/').update({
            gameState: state
        })
    }
    start(){
        if (gs === 0){
            form = new Form();
            player = new Player();
            player.getCount();
            form.display();
            
        }
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        cars = [car1, car2];
    }
    play(){
        form.hide();
        Player.getPlayerInfo();

        drawSprites();
        var index = 0;
        var x = 172;
        var y;

        if(allPlayers){
            //background("white");
            //console.log(allPlayers);
            for(var plr in allPlayers){
                console.log(player.index);
                index = index + 1;
                x = x + 200;
                y = displayHeight - allPlayers[plr].distance;
                cars[index - 1].x = x;
                cars[index - 1].y = y;
                if (index === player.index){
                    cars[index - 1].shapeColor = "red";
                    camera.position.x = displayWidth / 2;
                    camera.position.y = cars[index - 1].y;
                }
            }
        }
        if (keyDown(UP_ARROW) && player.index != null){
            player.distance += 10;
            player.update();
        }
    }
}