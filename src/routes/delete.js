const express=require("express");
const router=express.Router();
const {deleteUser} =require("../controller/delete");

router.post("/delete",deleteUser);

module.exports=router;