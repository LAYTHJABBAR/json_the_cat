const input = process.argv.slice(2);
const request = require('request');
const url = `https://api.thecatapi.com/v1/breeds/search?q=${input}`;
request(url, (error, response, body) => {
  const data = JSON.parse(body);
  if (data['status'] === 404) {
    console.log("NO!!! such a Link Please Check Out");
    process.exit();
  } if (data[0] === undefined) {
    console.log('No!!! such a Breed');
  } else {
    console.log(data[0]['description']);
  }
});



