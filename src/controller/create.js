const User=require('../config');

exports.createUser=(req,res)=>{
    //access data from request
    const userData=req.body;

    //add data to database
    User.add(userData)
    .then(
        //if all good then this is run
        res.status(200).json({
            message: "User Added Successfully"
        })
    ).catch((error)=>{
        //if error occure then this is run
        res.status(400).json({
            error
        })
    });
}
