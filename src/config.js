const admin = require("firebase-admin");

//connect with your serviceaccount.json file
const serviceAccount = require("/path/to/serviceaccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
//create or access collection in the firestore cloud
const User= db.collection("user");
module.exports=User;
