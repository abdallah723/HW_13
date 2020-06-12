const mysql = require("mysql");

if(process.env.JAWSDB_URL) {
    var connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        port: 3306,
        password: "Project_3psilon",
        database: "burgers_db"
    })
}


connection.connect(function(err) {
    if (err) {
        console.log("error connection: " + err.stack);
        return ;
    }

    console.log("connected as id: " + connection.threadId)
});

module.exports = connection;