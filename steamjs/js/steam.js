
(function (context) {

    // Establish the root object, `window` in the browser, or `global` on the server.
    var rootObject = this;

    var hasModule = typeof module !== 'undefined';
    var hasModuleExports = typeof module.exports !== 'undefined';
    var hasRequire = typeof require !== 'undefined';
    
    if (hasModule && hasModuleExports && hasRequire) {
        // It looks like that code SteamJS is running under NodeJS Environment
    	module.exports = require('./steam-node.js')
    } else {
    	throw new SteamJSError("JSUnsupported runtime environment");
    }
    
    
    
    function SteamJSError(message) {
    	  this.name = 'SteamJSError';
    	  this.message = message || 'Runtime Error';
    	  this.stack = (new Error()).stack;
    	}
    SteamJSError.prototype = Object.create(Error.prototype);
    SteamJSError.prototype.constructor = SteamJSError;
    
})(this);