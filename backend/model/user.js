const {Schema}= require('mongoose');
const userSchema =new Schema({
    name:Schema.Types.String,
    email:Schema.Types.String,
    phone:Schema.Types.String,
    password:Schema.Types.String,
    role:Schema.Types.String
})
exports.userSchema =userSchema;