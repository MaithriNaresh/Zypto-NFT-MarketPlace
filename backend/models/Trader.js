import mongoose from "mongoose";

const traderSchema = new mongoose.Schema({
   uid: "String",
   bankdetails:{
     accountHolderName: "String",
    accountNumber: "String",
    ifscCode:"String",
    bankName: "String",
    branch:"String"
   },
   pancardNo:"String",
   adhaarNo:"String",
   idProof:"String",
   passportSizePhoto:"String",
   createDate:{
    type: Date,
    default: Date.now
   }

});
const bcomeatrader = mongoose.model("bcomeatrader",traderSchema);
export default  bcomeatrader; 