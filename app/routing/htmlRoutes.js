var express = require('express');
var path = require('path');

// Export HTML Routes
module.exports = function(app) {
	
	// Home Page
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	// Survey Page
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});
}