var friends = require('../data/friends.js');
var path = require('path');

// Export API Routes
module.exports = function(app) {
	
	// Total list of friend entries
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	// Add new friend entry
	app.post('/api/friends', function(req, res) {
		
		var userInput = req.body;
		var userResponses = userInput.scores;
		
		// Compute Match
		var matchName = '';
		var matchPhoto = '';
		var totalDifference = 1000;

		// Examine all existing friends in the list
		for (var i = 0; i < friends.length; i++) {
			
			// Compute differenes for each question
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}
			
			// If lowest difference, record the friend match
			if (diff < totalDifference) {
				
				totalDifference = diff;
				matchName = friends[i].name;
				matchPhoto = friends[i].photo;
			}
		}

		// Add User
		friends.push(userInput);

		// Send Response
		res.json({status: 'OK', matchName: matchName, matchPhoto: matchPhoto});
	});
};