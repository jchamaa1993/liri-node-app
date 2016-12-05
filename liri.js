
var Twitter = require('twitter');
var fs = require('fs');
var omdb = require('omdb');
var spotify = require('spotify');
var arg = process.argv[2]

// set up for reading keys.js
var keys = require('./keys.js');
// console.log(keys);


var client = new Twitter({
  consumer_key: 'RtvTdBBw2PQOwU3E8VMqlCNXP',
  consumer_secret: 'ry9mjpDqSXTkzgtLIvyKDnzUQKXT3LIuaqdHsM79VR3OIBWr7x',
  access_token_key: '779116245912215552-gXA8BvPvqfyvanROQqvfKTTDYHisP23',
  access_token_secret: '8C4UnWcKGYjiEOhgSfjlxPzRylTnZxd7puxuX1GjjVMU9',
})


if(arg === 'my-tweets') {
	client.get('statuses/user_timeline', {q: 'node.js'}, function(error, tweets, response) {
		if(error) {
			console.log('there was an error grabbing the tweets.')
		}
  	 console.log(tweets.user.text);
});
}

if(arg === 'movie-this') {
	var movieName = '';
	if(process.argv.length > 3) {
		for(var i=3; i<process.argv.length; i++) {
			movieName = movieName + process.argv[i] + '%20';
		}
		console.log(movieName);
	} else {
		return console.log('Please specify a movie title');
	}

	omdb.search(movieName, function(err, movies) {
	    if(err) {
	        return console.error(err);
	    }
	 
	    if(movies.length < 1) {
	        return console.log('No movies were found!');
	    }
	    console.log(movies);
	 
	    // movies.forEach(function(movie) {
	    //     console.log('%s (%d)', movie.title, movie.year);
	    // });
	});
}