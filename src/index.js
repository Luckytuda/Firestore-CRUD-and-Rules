const express= require("express");
const app= express();
//import config file
const User=require('./config');
app.use(express.json());

// import files 
const CreateUser=require("./routes/create");
const UpdateUser=require("./routes/update");
const GetUsers=require("./routes/read");
const DeleteUser=require("./routes/delete");

app.use("/api",CreateUser);
app.use("/api",UpdateUser);
app.use("/api",DeleteUser);
app.use("/api",GetUsers);

// listen on the port 4000, you can chenge it also.
app.listen(4000,()=>{
    console.log("listen on the port 4000");
})