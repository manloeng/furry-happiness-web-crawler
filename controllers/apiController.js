const doStuff = require('../models/apiModel');

const getLinks = (req, res, next) => {
  doStuff(req.body)
}

module.exports = getLinks;
