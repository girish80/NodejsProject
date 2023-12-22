const mongoose = require("mongoose");
require("dotenv").config()
const connectDatabase = ()=>{
    mongoose
    .connect(process.env.DB_URL)
    .then((data)=>{
        console.log(`Mongodb connected with server: ${data.connection.host}`);   
    }).catch((error)=>{
        console.log("ERROR While connecting to DB", error.message);
    })
};

module.exports= connectDatabase;