

const mysql = require("mysql");
const host = "localhost"
const user = "root"
const password = ""
const db_name = "python_db"

function createConnection() {
    var con = mysql.createConnection({
        host: host,
        user: user,
        password: password,
        database: db_name
    });
    return con;
}

function connect(con){
    con.connect(function(err){
        if(err){
            throw err;
        }
        console.log("Connected!")
    });
    return con;
}

module.exports = {createConnection,connect};
