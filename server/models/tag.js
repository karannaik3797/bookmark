var mongoose   = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var TagSchema = new Schema({
	Title: {
		type: String,
		required: true,
		unique: true
	}
},{
	timstamps: true
})

/**
 * Transforming _id to id.
 */
TagSchema.set('toJSON', {
  transform: function(doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
})


module.exports = mongoose.model('Tag', TagSchema);

