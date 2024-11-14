let express = require('express');
let path = require('path');
let fs = require('fs');
let bodyParser = require('body-parser');
let app = express();
const mysql = require('mysql');

// Example MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'test_db',
});
connection.connect();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/profile', function (req, res) {
  let img = fs.readFileSync(path.join(__dirname, "img/toolbox-playground.png"));
  res.writeHead(200, {'Content-Type': 'image/jpg' });
  res.end(img, 'binary');
});

// Vulnerable endpoint due to SQL injection risk
app.get('/user', (req, res) => {
  const userId = req.query.id;

  // Unsafe query, vulnerable to SQL injection
  const query = `SELECT * FROM users WHERE id = ${userId}`;
  connection.query(query, (error, results) => {
    if (error) {
      res.status(500).send('Database error');
      return;
    }
    res.send(results);
  });
});

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(8080, function () {
  console.log("Let's get some fun on http://localhost:8080!");
});
