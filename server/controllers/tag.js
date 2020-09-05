'use strict';

var TagModel = require('../models').Tag;
var LinkModel = require('../models').Link;

exports.index = function(req, res) {
	TagModel.find({}, {}, { sort: { timestamp: 1 }})
	.exec(function(err, data) {
		if (err) {
			res.json(500, {msg: 'Error getting Tag.', err: err});
		}
		else {
			if (!data){
				res.json(404, {msg: 'Tag Not Found.'});
			} else {
				res.json(data);
			}
		}
	});
};

exports.findById = function(req, res) {
	TagModel.findById(req.params.id)
	.exec(function(err, data) {
		if (err) {
			res.json(500, {msg: 'Error getting Tag.', err: err});
		}
		else {
			res.json(data);
		}
	});
};

exports.update = function(req, res) {
	TagModel.findById(req.params.id)
	.exec(function(err, data) {
		if (err) {
			res.json(500, {msg: 'Error getting Tag.', err: err});
		}
		else {
			if (req.body.hasOwnProperty('Title')) {
				data.Title = req.body.Title;
			}
			data.save(function(err) {
				if (err) {
					res.json(500, {msg: 'Error updating Tag.', err: err});
				}
				else {
          res.json({ message: 'Tag updated!' });
        }
			});

		}
	});
};

exports.delete = function(req, res) {
	LinkModel.find({ Tag: req.params.id })
	.exec(function(err, data) {
		if (err) {
			res.json(500, {msg: 'Error deleting Tag.', err: err});
		}
		else if (data && data.length > 0) {
			res.json(500, {msg: 'Tag not empty.'});
		}
		else {
			TagModel.remove({ id: req.params.id })
			.exec(function(err1) {
				if (err1) {
					res.json(500, {msg: 'Error deleting Tag.', err: err1});
				}
				else {
					res.json({ message: 'Tag deleted!' });
				}
			});
		}
	});

};


exports.create = function(req, res) {
	var newTag = new TagModel({
		Title: req.body.Title
	})
	newTag.save(function(err) {
		if (err){
			res.json(500, {msg: 'Error createing new tag.', err: err});
		} else {
			res.json(newTag);
		}
	});
};