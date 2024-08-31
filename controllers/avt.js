const { errorHandler } = require("../utils");

exports.avt = async (req, res, next) => {
  data = JSON.parse(require("fs").readFileSync(__dirname + "/../txt/avt.txt"));
  let avt = data[Math.floor(Math.random() * data.length)];
  var hi = {} 
      hi.count = `${data.length}`
      hi.url = `${avt}`
      hi.authors = `𝐩𝐡𝐠𝐥𝐧𝐡`
  res.header("Content-type", "application/json; charset=utf-8")
  res.send(JSON.stringify(hi, null, 2))
  var hem = []
      hem.avt = hi
  console.log(hem)
};
