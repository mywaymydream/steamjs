

const steamjs = require('steamjs')

console.log('SteamJS version:', steamjs.version())

console.log('Starting SteamJS standalone application ...')

steamjs.load('standalone')
       .then(() => {
    	   console.log('Application started');
       });