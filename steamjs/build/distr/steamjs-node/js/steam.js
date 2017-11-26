

(function() {
	
	var NODEJS_PLATFORM_GLOBAL_OBJECTS = {
			Buffer: Buffer,
			__dirname: __dirname,
			__filename: __filename,
			clearImmediate: clearImmediate,
			setImmediate: setImmediate,
			clearInterval: clearInterval,
			setInterval: setInterval,
			clearTimeout: clearTimeout,
			setTimeout: setTimeout,
			console: console,
			exports: exports,
			global: global,
			module: module,
			process: process,
			require: require
	}
	
	/*
	 * ======================================
	 * Global Variables
	 * ======================================
	 */
	
/**
 * Default SteamJS instance
 */
var steamjs = null;

	
	/*
	 * ======================================
	 * Platform Dependent Components
	 * ======================================
	 */
	

function Loader() {
	
}

function Platform() {
	
	
}



function initPlatform() {
	
}

	
	/*
	 * ======================================
	 * Platform Independent Core Components
	 * ======================================
	 */
	
function SteamJSModule() {
	
}


function SteamJSEngine() {
	
	

	
}




function SteamJS() {
	
	// SteamJS API
	
	this.version = () => {
		return "0.0.1-alpha";
	}
	
	
} 



function initCore() {
	
}
	
	
	// ------Init Platform Components--------
	initPlatform();
	
	// --------Init Core Components----------
	initCore();
	
	// ----Init Default SteamJS Context------
	
	steamjs = new SteamJS();
	
	module.exports = steamjs;
	
})();
