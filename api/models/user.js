import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
       clerkId : {type : String , required : true , unique : true},
       email : {type : String , required : true},
       firstName : {type : String , required : true},
       lastName : {type : String},
       image : {type : String , required : true},
       skill : { type : String},
       noOfGames : {type : Number , default : 0},
       playpals : [{type : message.Schema.Types.ObjectId , ref:'User'}],
       sports : [String],
       provider : String,
    },
    {timeStamps : true}
);


const User = mongoose.models.User || mongoose.model('User' , userSchema);


module.exports = User;

