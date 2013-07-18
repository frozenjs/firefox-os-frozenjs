define(function(){

  'use strict';

  if(screen.mozLockOrientation){
    var locked = screen.mozLockOrientation('landscape');
    console.log('locked', locked);
  }

});