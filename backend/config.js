const mysql = require('mysql');

const con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'todo_app'
});

con.connect((err) => {
	if(err) throw err;
	console.log('Database Connected')
});

exports.con = con;