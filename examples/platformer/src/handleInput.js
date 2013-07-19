define([
  'frozen/utils/distance',
  'frozen/utils/degreesFromCenter'
], function(distance, degreesFromCenter){

  'use strict';

  return function(im, millis){

    var power = 0.1875;
    if(im.mouseAction.isPressed()){
      var dist = distance(im.mouseAction.position, this.controlPt);
      if(dist < 160){
        var angle = degreesFromCenter(this.controlPt, im.mouseAction.position);
        if(angle > 45 && angle < 135){
          //move right
          this.box.applyImpulseDegrees('player', 90, power * millis);
        }else if(angle > 215 && angle < 335){
          //move left
          this.box.applyImpulseDegrees('player', 270, power * millis);
        }
      }
    }

  };

});