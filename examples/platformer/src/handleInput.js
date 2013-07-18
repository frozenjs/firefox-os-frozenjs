define([
  'frozen/utils/distance',
  'frozen/utils/degreesFromCenter'
], function(distance, degreesFromCenter){

  'use strict';

  return function(im){
    if(im.touchAction && im.touchAction.positions){
       console.log(im.touchAction.positions);
    }

    if(im.mouseAction.isPressed()){
      var dist = distance(im.mouseAction.position, this.controlPt);
      if(dist < 160){
        var angle = degreesFromCenter(this.controlPt, im.mouseAction.position);
        if(angle > 30 && angle < 150){
          //move right
          this.box.applyImpulseDegrees('player', 90, 3);
        }else if(angle > 210 && angle < 330){
          //move left
          this.box.applyImpulseDegrees('player', 270, 3);
        }
      }
    }

  };

});