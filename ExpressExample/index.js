const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql2");
const bodyParser = require("body-parser"); // import the body-parser

const connection = mysql.createConnection({
  host: "server2.bsthun.com",
  port: "6105",
  user: "lab_1crbvd",
  password: "W7qNs6r3poAH4kQy",
  database: "lab_todo01_1c4hnep",
});

connection.connect();
//connection to database
console.log("Database is connected");

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: "application/json" }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/hello", (req, res) => {
  res.send({
    name: "Pipatpol Jirawatpapha",
    nickName: "Peem",
    university: "KMUTT",
  });
});

app.get("/todo", (req, res) => {
  // Assign the params as a variable
  // https://medium.com/@joseph.pyram/9-parts-of-a-url-that-you-should-know-89fea8e11713
  const todoId = req.query.todo_id;

  // Regex to check the todo_is is a number only or not
  const checkTodoId = new RegExp(/^\d+$/).test(todoId); // Boolean

  // Check if the todo_id is not exist or is not a number, return json with an error
  if (!todoId || !checkTodoId) {
    res.json({
      success: false,
      data: null,
      error: "todo_id is invalid",
    });
  }

  connection.query(`SELECT * FROM items WHERE id = ${todoId}`, (err, rows) => {
    // Check if cannot find the data in the database then return the error
    if (err) {
      res.json({
        success: false,
        data: null,
        error: err.message,
      });
    } else {
      // Return data to the client if success
      if (rows[0]) {
        res.json({
          success: true,
          data: rows[0],
          error: null,
        });
      } else {
        res.json({
          success: true,
          data: null,
          error: null,
        });
      }
    }
  });
});

app.post("/todo/create", (req, res) => {
  // The JSON body
  const payload = req.body;

  connection.query(
    `INSERT INTO users (username) VALUES (?)`,
    [payload.userName],
    (err, rows) => {
      // Check if cannot find the data in the database then return the error
      if (err) {
        res.json({
          success: false,
          data: null,
          error: err.message,
        });
      } else {
        // Return data to the client if success
        console.log(rows);
        if (rows) {
          res.json({
            success: true,
            data: {
              message: "create success",
            },
          });
        }
      }
    }
  );
});

app.patch("/todo/edit", (req, res) => {
  // The JSON body
  const payload = req.body;

  console.log(payload);

  connection.query(
    "UPDATE items SET name = ?, detail = ? WHERE id = ?",
    [payload.name, payload.detail, payload.id],
    (err, rows) => {
      // Check if cannot find the data in the database then return the error
      if (err) {
        res.json({
          success: false,
          data: null,
          error: err.message,
        });
      } else {
        // Return data to the client if success
        if (rows) {
          res.json({
            success: true,
            data: {
              message: "update successfully",
            },
          });
        }
      }
    }
  );
});

app.delete("/todo/delete", (req, res) => {
  // Assign the params as a variable
  const id = req.query.id;
  const todoId = req.query.todo_id;

  connection.query(
    `DELETE FROM links where id = ? AND todo_id = ?`,
    [id, todoId],
    (err, rows) => {
      // Check if cannot find the data in the database then return the error
      if (err) {
        res.json({
          success: false,
          data: null,
          error: err.message,
        });
      } else {
        if (rows) {
          res.json({
            success: true,
            data: {
              message: "delete successfully",
            },
          });
        }
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
