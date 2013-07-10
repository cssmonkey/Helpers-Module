window.APP = (function(module, $) {
    "use strict";

    module.helpers = {
        supportsTouch: isTouchDevice(),
	screenView : getScreenView(),
	orientation: getOrientation(),
	jsPath : '/assets/js/'
    }

	
	/*--- Check what view we are in - small, medium, large ---*/
	// Use a common element which changes between window sizes
	// e.g. main nav - hidden on small screens. try and avoid using device widths if possible
    function getScreenView() {
		var small = 480,
			med = 768,
			large,
			screen;
		if($(window).width() <= small) {
			screen = 'small';
		}
		else if($(window).width() <= med) {
			screen = 'medium';
		}
		else {
			screen = 'large';
		}
		return screen;
	}
	
	/*--- Check the orientation of device ---*/
    function getOrientation() {
		var deviceOrientation = window.orientation;
		if (typeof deviceOrientation === "undefined") 
   			deviceOrientation = 'orientation not supported';
		
		return deviceOrientation;
		
	}
	
    /*--- Check if device supports touch event ---*/
    function isTouchDevice() {
        return !!('ontouchstart' in window) || !!window.navigator.msMaxTouchPoints; 
    }
    if (module.helpers.supportsTouch) {
		document.getElementsByTagName("html")[0].className += " supports-touch";
    }
	
	
	
    return module;

})(window.APP || {}, window.jQuery);  
