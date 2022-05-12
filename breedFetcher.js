const request = require('request');

const fetchBreedDescription = function (breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(`Something went wrong ${error}`, null);
    }

    const data = JSON.parse(body);

    if (data[0]) {
    callback(null, data[0].description);
    // console.log(typeof data);
    }
    else {callback(`Cant find your cat`, null)
  }
  });
};

module.exports = { fetchBreedDescription };

