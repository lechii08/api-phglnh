const { errorHandler } = require("../utils");

exports.du = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../txt/du.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Author":"𝐩𝐡𝐠𝐥𝐧𝐡","count":`${data.length}`, "data":`${link}`});
};