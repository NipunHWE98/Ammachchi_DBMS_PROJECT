const config = require("./config/config");
const express=require("express");
const mysql=require("mysql");

const server=express();

//create mysql connection
const db=mysql.createConnection({
host:'localhost',
user:"root",
password:"",
database:"ammachchi_canteen"
});
db.connect((error) => {
    if (error) console.log(error.message);
    else {
      console.log("Connected to the Database...");
    }
  });
  


server.listen("3000",(()=>{
    console.log("Server is running successfully on port 3000")
}));