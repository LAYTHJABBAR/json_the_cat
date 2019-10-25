const request = require('request');
const url = `https://api.thecatapi.com/v1/breeds/search?q=`;
const fetchBreedDescription = function(breedName, callback) {
  request(url + breedName, (error, response, body) => {
    const data = JSON.parse(body);
    if (data['status'] === 404) {
      callback(error);
      process.exit();
    } if (data[0] === undefined) {
      callback('No!!! such a Breed' , null );
    } else {
      callback(null , data[0].description);
    }
  });
};
module.exports = { fetchBreedDescription };










