const { errorHandler } = require("../utils");

exports.cadao = async (req, res, next) => {
  data = JSON.parse(require("fs").readFileSync(__dirname + "/images/data/json/text/cadao.json"));
  let cadao = data[Math.floor(Math.random() * data.length)];
  var hi = {} 
      hi.count = `${data.length}`
      hi.data = `${cadao}`
      hi.authors = `𝐩𝐡𝐠𝐥𝐧𝐡`
  res.header("Content-type", "application/json; charset=utf-8")
  res.send(JSON.stringify(hi, null, 2))
  var hem = []
      hem.cadao = hi
  console.log(hem)
};
