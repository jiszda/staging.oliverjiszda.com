'use strict';

var utils       = require('./utils')
  , imageLoader = require('./imageLoader')
;

function addGUI() {
  var extraMenu       = utils.getMenuContainer()
    , menuUl          = extraMenu.querySelector('ul')
    , buttonRightCont = document.createElement('li')
    , buttonLeftCont  = document.createElement('li')
    , buttonRight     = document.createElement('a')
    , buttonLeft      = document.createElement('a')
  ;
  buttonLeftCont.className = 'gallery-left btn-container';
  buttonRightCont.className = 'gallery-right btn-container';
  buttonRight.className = 'btn gallery-right icon-caret-right icon';
  buttonLeft.className = 'btn gallery-left icon-caret-left icon';
  buttonLeft.addEventListener('click', imageLoader.loadPreviousImage);
  buttonRight.addEventListener('click', imageLoader.loadNextImage);
  buttonRightCont.appendChild(buttonRight);
  buttonLeftCont.appendChild(buttonLeft);
  menuUl.appendChild(buttonLeftCont);
  menuUl.appendChild(buttonRightCont);

  document.addEventListener('keyup', function (evt) {
    var kC = evt.keyCode;
    if ( kC === 37 || kC === 38 ) { //left or up arrow keyboard keys
      imageLoader.loadPreviousImage();
    } else if ( kC === 39 || kC === 40 ) { //right or down arrow 
      imageLoader.loadNextImage();
    }
  });
}

(function addImageGalleryControls() {
  (function addImageGalleryUi() {
    var contentEle  = document.getElementById('content');
    if ( contentEle ) {
      var cN = contentEle.className;
      //only load gui on gallery page
      if ( cN.indexOf('slide') >= 0 ) {
        addGUI();
      }
    }
  })();
})();
