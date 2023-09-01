
const express = require("express");
const db_manager = require("./db_manager");
var app = express();

app.listen(3500, () => {
    console.log("The server is running");
});

app.get("/doctors", (req,res,next) => {
    var con = db_manager.createConnection();
    con = db_manager.connect(con);
    var sql = "SELECT * FROM Doctor";
    con.query(sql, function(err,result){
        if(err){
            throw err;
        }
        res.send(result);
    });
});

app.post("/addHospital", (req,res,next) => {
    var con = db_manager.createConnection();
    con = db_manager.connect(con);
    var sql = "INSERT INTO Hospital(hospital_id,hospital_name,bed_count) values (120,'Green lantern clinic',550);";
    con.query(sql,function(err,result){
        if(err){
            throw err;
        }
        console.log("Inserted!");
        console.log("Number of affected values: ",result.affectedRows);
    });
});