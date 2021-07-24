const con = require('./config.js');
const express = require('express');
const routes = require('./routes');
const cors =  require('cors');
var bodyParser = require('body-parser');

const app = express();
const port = 3002;

app.use(express.json());
app.use(cors());

app.use('/api', routes);

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});