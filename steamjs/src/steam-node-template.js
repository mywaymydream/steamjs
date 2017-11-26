

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
	$$_GLOBAL_$$
	
	/*
	 * ======================================
	 * Platform Dependent Components
	 * ======================================
	 */
	$$_PLATFORM_$$
	
	/*
	 * ======================================
	 * Platform Independent Core Components
	 * ======================================
	 */
	$$_CORE_$$
	
	
	// ------Init Platform Components--------
	initPlatform();
	
	// --------Init Core Components----------
	initCore();
	
	// ----Init Default SteamJS Context------
	
	steamjs = new SteamJS();
	
	module.exports = steamjs;
	
})();
