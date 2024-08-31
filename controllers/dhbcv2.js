const { errorHandler } = require("../utils");

exports.dhbcv2 = async (req, res, next) => {
  data = JSON.parse(require("fs").readFileSync(__dirname + "/images/data/json/dhbcv2.json"));
const length1 = data.doanhinh.length
    const dhbcv2 = data.doanhinh[Math.floor(Math.random() * length1)]
  var hi = {} 
      hi.author = `𝐩𝐡𝐠𝐥𝐧𝐡`
      hi.dataGame = dhbcv2
  res.header("Content-type", "application/json; charset=utf-8")
  res.send(JSON.stringify(hi, null, 2))
  var hem = []
      hem.dhbcv2 = hi
  console.log(hem)
};
