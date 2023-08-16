const {Schema}= require('mongoose');
const vendorSchema =new Schema({
    name:Schema.Types.String,
    email:Schema.Types.String,
    phone:Schema.Types.String,
    password:Schema.Types.String,
    role:Schema.Types.String,
    PROPOSALS:[{
        type:Schema.Types.ObjectId,
        ref:"proposal"
    }],
    IMAGES:[{
        type:Schema.Types.ObjectId,
        ref:"proposalimagesDB"
    }]
})
exports.vendorSchema =vendorSchema;