const request = require("request");
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const url ='https://www.relaischateaux.com/us/destinations/europe';

function searchRestau(searchTerm)
{
  return fetch(`${url}${searchTerm}`)
  .then(response => response.text())

}

// we can print all the body of the website
searchRestau('/france')
  .then(body => {
      console.log(body);
    });


