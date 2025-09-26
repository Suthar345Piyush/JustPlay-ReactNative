import mongoose from "mongoose";


const messageSchema = new mongoose.Schema({
   sender : {
     type : mongoose.Schema.Types.ObjectId,
     ref : 'User',
     required : true,
   },
   recipient : {
     type : mongoose.Schema.Types.ObjectId,
     ref : 'User',   // private chats 
   },

   game : {
     type : mongoose.Schema.Types.ObjectId,
     ref : 'Game',
   },

   content : {
     type : String,
     required : true,
   },

   timeStamp : {
     type : Date,
     default : Date.now,
   },
   isGroup : {
     type : Boolean,
     default : false,
   }
});


module.exports = mongoose.model('Message' , messageSchema);


