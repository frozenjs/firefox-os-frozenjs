define([
  'dcl',
  'frozen/box2d/entities/Rectangle',
  'frozen/plugins/loadImage!images/player.png',
  'frozen/plugins/loadImage!images/walking.png'
], function(dcl, Rectangle, playerImg, walking){

  'use strict';

  return dcl(Rectangle, {
    linearDamping : 0.5,
    angularDamping : 1,
    touching: {},
    draw: function(ctx){

      
      ctx.drawImage(playerImg, (this.x * this.scale) - 33, (this.y * this.scale) - 56);

    }
  });

});
