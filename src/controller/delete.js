const User=require('../config');

exports.deleteUser=(req,res)=>{

    //delete data
    User.doc(req.body.docId).delete()
    .then(
        //if all good then this is run
        res.status(200).json({
            message: "User Deleted Successfully"
        })
    ).catch((error)=>{
        //if error occure then this is run
        res.status(400).json({
            error
        })
    });
}
