const { errorHandler } = require("../utils");

exports.dhbcv1 = async (req, res, next) => {
  data = JSON.parse(require("fs").readFileSync(__dirname + "/images/data/json/dhbcv1.json"));
  const length1 = data.doanhinh.length
    const dataGame = data.doanhinh[Math.floor(Math.random() * length1)]
  var hi = {} 
      hi.doanhinh = [ dataGame ]
      hi.author = `𝐩𝐡𝐠𝐥𝐧𝐡`
  res.header("Content-type", "application/json; charset=utf-8")
  res.send(JSON.stringify(hi, null, 2))
  var hem = []
      hem.dhbcv1 = hi
  console.log(hem)
};
