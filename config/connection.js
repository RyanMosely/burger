// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "mgs0iaapcj3p9srz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "gh90eay4mxahjfkt",
  password: "rcjs7cgdu6inspy0",
  database: "gfhiwsgbw09lks9v"
});

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);   
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "burgers_db"
    })
}

//COMMENT THIS OUT WHEN CREAT POOL
/////////////////////////////////////////////
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
/////////////////////////////////////////////

// Export connection for our ORM to use.
module.exports = connection;
