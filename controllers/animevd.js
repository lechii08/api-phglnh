const { errorHandler } = require("../utils");

exports.animevd = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../txt/vdanime.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Author":"𝐩𝐡𝐠𝐥𝐧𝐡","count":`${data.length}`,"data":`${link}`});
};