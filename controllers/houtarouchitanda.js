const { errorHandler } = require("../utils");

exports.houtarouchitanda = async (req, res, next) => {
  data = JSON.parse(require("fs").readFileSync(__dirname + "/images/data/json/avtdois/houtarouchitanda.txt"));
  let houtarouchitanda = data[Math.floor(Math.random() * data.length)];
  var hi = {} 
      hi.author = `𝐩𝐡𝐠𝐥𝐧𝐡`
      hi.url = houtarouchitanda
      hi.count = data.length
  res.header("Content-type", "application/json; charset=utf-8")
  res.send(JSON.stringify(hi, null, 2))
  var hem = []
      hem.houtarouchitanda = hi
  console.log(hem)
};
