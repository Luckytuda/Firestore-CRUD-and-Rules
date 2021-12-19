const express=require("express");
const router=express.Router();
const {readData}=require("../controller/read");

router.post("/read",readData);

module.exports=router;