const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const mysql = require('mysql2');
const saltRounds = 10;

app.use(express.json());

const connection = mysql.createConnection({
    host: 'server2.bsthun.com',
    user: 'lab_1crbvd',
    password: 'W7qNs6r3poAH4kQy',
    database: 'lab_todo02_1c5psaq',
    port: 6105
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database.');
});

function validatePassword(password) {
    const lengthValid = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);

    return lengthValid && hasUpperCase && hasLowerCase && hasNumber;
}

app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!validatePassword(password)) {
        return res.json({
            success: false,
            message: "Password does not meet the required conditions",
        });
    }

    bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
        if (err) {
            return res.json({
                success: false,
                data: null,
                error: err.message,
            });
        }

        const sql = "INSERT INTO users (username, password, hashed_password) VALUES (?, ?, ?)";
        connection.query(sql, [username, password, hashedPassword], (err, result) => {
            if (err) {
                return res.json({
                    success: false,
                    data: null,
                    error: err.message,
                });
            }

            res.json({
                success: true,
                message: "Registration process is successful",
            });
        });
    });
});

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const sql = "SELECT * FROM users WHERE username = ?";
    connection.query(sql, [username], (err, rows) => {
        if (err) {
            return res.json({
                success: false,
                data: null,
                error: err.message,
            });
        }

        if (rows.length == 0) {
            res.json({
                success: false,
                message: "User not found",
            });
        } else {
            const storedPasswordHash = rows[0].hashed_password;
            bcrypt.compare(password, storedPasswordHash, (err, result) => {
                if (err) {
                    return res.json({
                        success: false,
                        data: null,
                        error: err.message,
                    });
                }

                if (result) {
                    res.json({
                        success: true,
                        message: "User authentication is successful",
                        user: {
                            id: rows[0].id,
                            username: rows[0].username,
                        },
                    });
                } else {
                    res.json({
                        success: false,
                        message: "User authentication failed",
                    });
                }
            });
        }
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
