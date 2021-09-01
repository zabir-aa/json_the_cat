const request = require('request');
const fetchBreedDescription = function(name, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${name}`,(error, response, body) => {
    const parsed = (JSON.parse(body));
    let desc = null;
    if (parsed[0] !== undefined) desc = parsed[0].description;
    return callback(error,desc);
  });
};

module.exports = {fetchBreedDescription};