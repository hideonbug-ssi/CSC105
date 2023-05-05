const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const connection = mysql.createConnection({
  host: "server2.bsthun.com",
  port: "6105",
  user: "lab_1crbvd",
  password: "W7qNs6r3poAH4kQy",
  database: "lab_todo02_1c5psaq",
});

connection.connect()
  console.log("Database is connected");
;

const port = 3000;
const app = express();

app.use(bodyParser.json({ type: "application/json" }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/basic/login", (req, res) => {
	const username = req.body.username;
	const password = req.body.password;

	var sql = mysql.format(
		"SELECT * FROM users WHERE username = ? AND password = ?",
		[username, password]
	);
	console.log("DEBUG: /basic/login => " + sql);
	connection.query(sql, (err, rows) => {
		if (err) {
			return res.json({
				success: false,
				data: null,
				error: err.message,
			});
		}

		numRows = rows.length;
		if (numRows == 0) {
			res.json({
				success: false,
				message: "Login credential is incorrect",
			});
		} else {
			res.json({
				success: true,
				message: "Login credential is correct",
				user: rows[0],
			});
		}
	});
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
  });
