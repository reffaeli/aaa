(function() {

  var log = window.parent.debug ? function(type, more) {
    var style;
    if (/^add/.test(type)) {
      style = 'background: DarkMagenta; color: #FFF;margin:2px';
    } else if (/^get/.test(type)) {
      style = 'background: Maroon; color: #FFF;margin:2px';
    } else if (/^set/.test(type)) {
      style = 'background: Navy; color: #FFF;margin:2px';
    } else {
      style = 'background: #222; color: #bada55;margin:2px';
    }
    console.log('%c' + type, style, more);
  } : function() {};

  window.mraid = {
    getState: function() {
      return 'default';
    },
    addEventListener: function(event, listener) {
      if (event === 'stateChange') {
        // listener('default');
      } else if (event === 'error') {
        listener();
      }
      log('addEventListener', arguments);
    },
    signalReady: function() {
      log('signalReady', arguments);
    },
    getVersion: function() {
      log('getVersion', arguments);
      return '1.0';
    },
    info: function() {
      log('info', arguments);
    },
    error: function() {
      log('error', arguments);
    },
    removeEventListener: function() {
      log('removeEventListener', arguments);
    },
    getPlacementType: function() {
      log('getPlacementType', arguments);
    },
    isViewable: function() {
      log('isViewable', arguments);
      return true;
    },
    open: function() {
      log('open', arguments);
    },
    expand: function() {
      log('expand', arguments);
    },
    getExpandProperties: function() {
      log('getExpandProperties', arguments);
    },
    setExpandProperties: function() {
      log('setExpandProperties', arguments);
    },
    close: function() {
      log('close', arguments);
    },
    useCustomClose: function() {
      log('useCustomClose', arguments);
      return false;
    },
    resize: function() {
      log('resize', arguments);
    },
    getResizeProperties: function() {
      log('getResizeProperties', arguments);
    },
    setResizeProperties: function() {
      log('setResizeProperties', arguments);
    },
    getCurrentPosition: function() {
      log('getCurrentPosition', arguments);
    },
    getSize: function() {
      log('getSize', arguments);
    },
    supports: function() {
      log('supports', arguments);
    },
    getMaxSize: function() {
      log('getMaxSize', arguments);
    },
    getDefaultPosition: function() {
      log('getDefaultPosition', arguments);
    },
    getScreenSize: function() {
      log('getScreenSize', arguments);
    },
    storePicture: function() {
      log('storePicture', arguments);
    },
    createCalendarEvent: function() {
      log('createCalendarEvent', arguments);
    },
    playVideo: function() {
      log('playVideo', arguments);
    },
    getOrientation: function() {
      log('getOrientation', arguments);
    },
    setOrientationProperties: function() {
      log('setOrientationProperties', arguments);
    },
    getOrientationProperties: function() {
      log('getOrientationProperties', arguments);
    }
  };

}());
