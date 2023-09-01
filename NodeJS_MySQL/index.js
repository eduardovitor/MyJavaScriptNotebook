// importing mysql driver/connector
var mysql = require("mysql");
// initializing connection
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "python_db"
});

con.connect(function(err) {
    if (err) {
        throw err;
    }
    console.log("Connected");
});

// Get all hospitals' information
var query_all_hospitals = "SELECT * FROM Hospital;";
con.query(query_all_hospitals,function(err,result){
    if(err){
        throw err;
    }
    console.log(result);
});

// Get a specific hospital record
var param = 1;
query_one_hospital = "SELECT * FROM Hospital where hospital_id = " + mysql.escape(param);
con.query(query_one_hospital,function(err,result){
    if(err){
        throw err;
    }
    console.log(result);
})

// Create a medical record
var values = [35,"Batman Clinic",500];
query_insert_hospital = `INSERT INTO Hospital (hospital_id, hospital_name, bed_count) VALUES ('${values[0]}','${values[1]}','${values[2]}');`;
con.query(query_insert_hospital,function(err,result){
    if(err) {
        throw err;
    }
    console.log(result);
});

// Update a doctor record
var experience = 25;
var doctor_id = 108;
query_update_doctor = `UPDATE Doctor set experience=${experience} where doctor_id=${doctor_id};`;
con.query(query_update_doctor,function(err,result){
    if(err){
        throw err;
    }
    console.log(result);
});

// Delete a hospital record
var hospital_id = 35;
query_delete_hospital = `DELETE FROM Hospital where hospital_id=${hospital_id};`;
con.query(query_delete_hospital,function(err,result){
    if(err){
        throw err;
    }
    console.log(result);
})