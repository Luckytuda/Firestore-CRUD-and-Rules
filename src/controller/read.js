const { doc } = require('../config');
const User=require('../config');

exports.readData=async (req,res)=>{

    const collection= User.doc(req.body.docId);
    const doc= await collection.get();
    if (!doc.exists) {
        res.status(400).json({
            message:"No data found!!"
        })
      } else {
        res.status(200).json({
            data: doc.data()
      })
    }
}
