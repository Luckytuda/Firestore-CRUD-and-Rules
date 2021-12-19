const express=require('express');
const router=express.Router();
const {updateUser}= require("../controller/update");

router.post("/update",updateUser);

module.exports=router;