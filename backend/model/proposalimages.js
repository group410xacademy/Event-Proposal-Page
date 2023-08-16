const {Schema}= require('mongoose');
const proposalimagesSchema =new Schema({
    UUID:Schema.Types.String,
images:[{id:Schema.Types.String,url:Schema.Types.String}],
AUTHOR:{
    type:Schema.Types.ObjectId,
    ref:"vendor"
},
PROPOSALS:{
    type:Schema.Types.ObjectId,
    ref:"proposal"
}
})
exports.proposalimagesSchema =proposalimagesSchema;