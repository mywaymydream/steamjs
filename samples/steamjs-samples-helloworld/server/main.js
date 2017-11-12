
const steamjs = require('steamjs')
console.log('SteamJS version ', steamjs.version());

const express = require('express')
const app = express()
const path = require('path')

app.get('/api/data', (req, res) => {
	res.send({
		'message': 'Hello World'
	})
})

const publicResourcesPath = path.join(__dirname, '../public');
console.log('Use static resources from: ', publicResourcesPath);

app.use('/static', express.static(publicResourcesPath));

app.listen(8080, () => console.log('Example app listening on port 8080!'))