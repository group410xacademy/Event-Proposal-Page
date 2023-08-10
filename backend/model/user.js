const {Schema}= require('mongoose');
const userSchema =new Schema({
    Name:Schema.Types.String,
    Email:Schema.Types.String,
    Contact:Schema.Types.String,
    Password:Schema.Types.String
})
exports.userSchema =userSchema;