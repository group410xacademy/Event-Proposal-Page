const mongoose= require("mongoose");
const Appuser=mongoose.model("Appuser",
new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    password:String,
    roles:[
        {type:mongoose.Schema.Types.ObjectId,ref:"Role"}
    ]
})
)
module.exports=Appuser