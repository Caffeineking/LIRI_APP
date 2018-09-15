require("dotenv").config();

var keys = require("./keys.js"); // #8

var spotify = new Spotify(keys.spotify);

console.log(spotify);