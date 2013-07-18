define([
    'frozen/plugins/loadImage!images/background.png',
    'frozen/plugins/loadImage!images/crosshairs.png'
], function(background, crosshairs){

  'use strict';

  return function(ctx){
    ctx.drawImage(background, 0, 0, this.width, this.height);
    this.entities.player.draw(ctx);
    ctx.drawImage(crosshairs, this.controlPt.x - crosshairs.width/2, this.controlPt.y - crosshairs.height/2);
    for(var id in this.entities){
      //this.entities[id].draw(ctx);
    }
  };

});