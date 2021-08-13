const con = require('./config.js');
const express = require('express');
const routes = require('./routes');
var bodyParser = require('body-parser');
var cors = require('cors')

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(cors());

app.use('/api', routes);

app.listen(port, () => {
	console.log(`listening on port ${port}`);
});