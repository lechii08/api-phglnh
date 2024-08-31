const { errorHandler } = require("../utils");

exports.nobitashizuka = async (req, res, next) => {
  data = JSON.parse(require("fs").readFileSync(__dirname + "/images/data/json/avtdois/nobitashizuka.txt"));
  let nobitashizuka = data[Math.floor(Math.random() * data.length)];
  var hi = {} 
      hi.author = `𝐩𝐡𝐠𝐥𝐧𝐡`
      hi.url = nobitashizuka
      hi.count = data.length
  res.header("Content-type", "application/json; charset=utf-8")
  res.send(JSON.stringify(hi, null, 2))
  var hem = []
      hem.nobitashizuka = hi
  console.log(hem)
};
