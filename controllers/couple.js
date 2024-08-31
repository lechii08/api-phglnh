const { errorHandler } = require("../utils");

exports.couple = async (req, res, next) => {
  data = JSON.parse(require("fs").readFileSync(__dirname + "/images/data/json/couple.json"));
  const length1 = data.couple.length
    let couple = data.couple[Math.floor(Math.random() * length1)]
  var hi = {} 
      hi.data = couple
      hi.authors = `𝐩𝐡𝐠𝐥𝐧𝐡`
  res.header("Content-type", "application/json; charset=utf-8")
  res.send(JSON.stringify(hi, null, 2))
  var hem = []
      hem.couple = hi
  console.log(hem)
};
