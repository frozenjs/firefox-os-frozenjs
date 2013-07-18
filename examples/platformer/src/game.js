define([
  './update',
  './draw',
  './handleInput',
  './Player',
  'frozen/InputManager',
  'frozen/box2d/BoxGame',
  'frozen/box2d/entities',
  './boxData'
], function(update, draw, handleInput, Player, InputManager, BoxGame, entities, boxData){

  'use strict';

  //setup a GameCore instance
  var game = new BoxGame({
    canvasId: 'canvas',
    gameAreaId: 'gameArea',
    canvasPercentage: 0.95,
    update: update,
    handleInput: handleInput,
    draw: draw,
    controlPt: {x: 128, y: 665}
    //,
    //inputManager: new InputManager({emulateMouse: true})
  });

  boxData.entities.forEach(function(entity){
    if(entity.id === 'player'){
      game.addBody(new Player(entity));
    }
    else if(entities[entity.type]){
      game.addBody(new entities[entity.type](entity));
    }
  });


  //if you want to take a look at the game object in dev tools
  console.log(game);

  //launch the game!
  game.run();

});