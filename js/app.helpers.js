window.APP = (function(module) {
    "use strict";

    module.device = {
    	// Check for touch support usign touch & ms-pointer events		
	supportsTouch : (function() {
		var isTouch = !!('ontouchstart' in window) || !!window.navigator.msMaxTouchPoints;
		if (isTouch) {
			document.getElementsByTagName("html")[0].className += " supports-touch";			
		}			
		return isTouch; 			
	})(),
	// Check for retina display. 
	isRetina : (function() {
		var isRetina = (window.devicePixelRatio > 1) ? true : false;
		if (isRetina) {
			document.getElementsByTagName("html")[0].className += " retina";			
		}			
		return isRetina; 		
	})(),
	// Is mobile view.		
	isSmallScreen : function() {
		var isSmallScreen = (window.innerWidth <= 480) ? true : false;					
		return isSmallScreen;		
	},
	// Is IEx or lt-IEx
	/*isIE : (function(version) {
	})(),*/
	// Connection type e.g. wifi, 3g etc. Currently only supported by Android
	connectionType : (function() {
		var bandwidth = navigator.connection;
		if (typeof bandwidth === "undefined") {
   			bandwidth = 'connection.type not supported';
		}
		else {
			bandwidth = bandwidth.type		
		}
		return bandwidth;		
	})(),
	orientation : function() {
		var deviceOrientation = window.orientation;
		if (typeof deviceOrientation === "undefined") 
   			deviceOrientation = 'orientation not supported';
		
		return deviceOrientation;
	}

    }
	
    return module;

})(window.APP || {});  
