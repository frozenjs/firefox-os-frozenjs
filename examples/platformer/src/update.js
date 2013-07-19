define([

], function(){

  'use strict';

  return function(millis){
    this.entities.player.walkingAnim.update(millis);
    this.entities.player.walkingLeftAnim.update(millis);
  };

});