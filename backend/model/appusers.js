const {Schema}= require('mongoose');
const appuser = new Schema({
    name:String,
    email:String,
    phone:String,
    password:String,
    images:[
        {_id:Schema.Types.ObjectId,url:String}
    ]
})

module.exports=appuser