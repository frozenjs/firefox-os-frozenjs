define([
  'dcl',
  'frozen/box2d/entities/Rectangle',
  'frozen/Animation',
  'frozen/ResourceManager',
  'frozen/plugins/loadImage!images/player.png',
  'frozen/plugins/loadImage!images/walking.png'
], function(dcl, Rectangle, Animation, ResourceManager, playerImg, walkingImg){

  'use strict';

  var walkingLeftImg = ResourceManager.prototype.flipImageX('walkingLeft', walkingImg);

  return dcl(Rectangle, {
    linearDamping : 0.5,
    angularDamping : 1,
    touching: {},
    walkingAnim: Animation.prototype.createFromSheet(11, 75, walkingImg, 75, 96),
    walkingLeftAnim: Animation.prototype.createFromSheet(11, 75, walkingLeftImg, 75, 96),
    draw: function(ctx){

      if(this.linearVelocity.x > 1){
        this.walkingAnim.draw(ctx, (this.x * this.scale) - 22.5, (this.y * this.scale) - 56);
      }else if(this.linearVelocity.x < -1){
        this.walkingLeftAnim.draw(ctx, (this.x * this.scale) - 22.5, (this.y * this.scale) - 56);
      }
      else{
        ctx.drawImage(playerImg, (this.x * this.scale) - 33, (this.y * this.scale) - 56);
      }
    },
    updateAnimation: function(millis){
      this.walkingAnim.update(millis);
    }
  });

});
