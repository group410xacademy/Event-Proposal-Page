const {Schema}= require('mongoose');
const proposalimagesSchema =new Schema({
    UUID:Schema.Types.String,
images:[{id:Schema.Types.String,url:Schema.Types.String}]
})
exports.proposalimagesSchema =proposalimagesSchema;