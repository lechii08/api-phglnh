const { errorHandler } = require("../utils");

exports.shikizum = async (req, res, next) => {
  data = JSON.parse(require("fs").readFileSync(__dirname + "/images/data/json/avtdois/shikizum.txt"));
  let shikizum = data[Math.floor(Math.random() * data.length)];
  var hi = {} 
      hi.author = `𝐩𝐡𝐠𝐥𝐧𝐡`
      hi.url = shikizum
      hi.count = data.length
  res.header("Content-type", "application/json; charset=utf-8")
  res.send(JSON.stringify(hi, null, 2))
  var hem = []
      hem.shikizum = hi
  console.log(hem)
};
