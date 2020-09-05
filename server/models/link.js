var mongoose   = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var LinkSchema = new Schema({
	Link: { 
		type: String,
		required: true,
		unique: true
	},
	Title: {
		type:String
	},
	Publisher: {
		type:String
	},
	Tags: { 
		type: ObjectId,
		ref: 'Tag',
		required: true
	}
},{
	timestamps : true
})

/**
 * Transforming _id to id.
 */
LinkSchema.set('toJSON', {
  transform: function(doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
})

module.exports = mongoose.model('Link', LinkSchema);

