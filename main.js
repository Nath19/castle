const request = require("request");
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const castle = require("./castle.js").Castle;
const url ='https://www.relaischateaux.com/us/destinations/france';

/*
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
*/

//get all hotel restaurants info
    castle.getListHotels().then(response => {
      const hotels = response;
      console.log(hotels);
    });
    