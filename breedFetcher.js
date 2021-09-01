const request = require('request');
const breedName = process.argv[2];
request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,(error, response, body) => {
  if (error) console.log("#ERROR:", error);
  const parsed = (JSON.parse(body));
  if (parsed[0] === undefined) console.log("Breed not found in database");
  else console.log(parsed[0].description);
});