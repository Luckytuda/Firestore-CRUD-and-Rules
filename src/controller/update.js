const User=require('../config');

exports.updateUser=(req,res)=>{

    User.doc(req.body.docId).update({
        email:req.body.email,
        password:req.body.password
    }).then(
        //if success
        res.status(200).json({
            message:"Update Successfully"
        })
    ).catch((error)=>{
        //if error occured
        res.status(400).json({
            error
        })
    });
    
}