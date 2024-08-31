const { errorHandler } = require("../utils");

exports.thinh = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../txt/thinh.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)];
  res.json({"data":`${link}`});
};
