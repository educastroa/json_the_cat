const breed = process.argv.slice(2);

const request = require('request');


request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    return error;
  }

  const data = JSON.parse(body);
    console.log(data[0].description)
    
    // console.log(typeof data);

});