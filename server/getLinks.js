const $ = require("cheerio");
const axios = require("axios");

const getLinks = html => {
  axios.get("https://broken-links-api.herokuapp.com/").then(({ data }) => {
    const aTags = $("a", data);
    let href = [];
    for (let prop in aTags) {
      href.push(aTags[prop].attribs && aTags[prop].attribs.href);
    }
    href = href.filter(link => link !== undefined);

    console.log(href);
  });
};

getLinks();
