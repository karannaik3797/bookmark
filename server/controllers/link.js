'use strict';

var LinkModel = require('../models').Link;

exports.index = function(req, res) {
	LinkModel.find({}, {}, { sort: { timestamp: 1 }})
	.populate('Tag')
	.exec(function(err, data) {
		if (err) {
			res.json(500, {msg: 'Error getting links.', err: err});
		}
		else {
			res.json(data);
		}
	});
};

exports.findById = function(req, res) {
	LinkModel.findById(req.params.id)
	.populate('Tag')
	.exec(function(err, data) {
		if (err) {
			res.json(500, {msg: 'Error getting Link.', err: err});
		}
		else {
			res.json(data);
		}
	});
};

exports.update = function(req, res) {
	LinkModel.findById(req.params.id)
	.exec(function(err, data) {
		if (err) {
			res.json(500, {msg: 'Error getting link.', err: err});
		}
		else {
			if (req.body.hasOwnProperty('Link')) {
				data.Link = req.body.Link;
			}
			if (req.body.hasOwnProperty('Title')) {
				data.Title = req.body.Title;
			}
			if (req.body.hasOwnProperty('Tags')) {
				data.Tags = req.body.Tags;
			}
			if (req.body.hasOwnProperty('Publisher')) {
				data.Publisher = req.body.Publisher;  
			}
			data.save(function(err) {
				if (err) {
					res.json(500, {msg: 'Error updating link.', err: err});
				}
				else {
          res.json({ message: 'link updated!' });
        }
			});

		}
	});
};

exports.delete = function(req, res) {
	LinkModel.remove({ id: req.params.id })
	.exec(function(err, data) {
		if (err) {
			res.json(500, {msg: 'Error deleting link.', err: err});
		}
		else {
			res.json({ message: 'link deleted!' });
		}
	});
};


exports.create = function(req, res) {
	var newLink = new LinkModel({
		Link: req.body.Link,
		Title: req.body.Title,
		Publisher: req.body.Publisher,
		Tags: req.body.Tags
	})
	newLink.save(function(err) {
		if (err){
			res.json(500, {msg: 'Error createing new link.', err: err});
		} else {
			res.json(newLink);
		}
	});
};