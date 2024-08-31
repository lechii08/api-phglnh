const { errorHandler } = require("../utils");

exports.apigif = async (req, res, next) => {
  data = JSON.parse(require("fs").readFileSync(__dirname + "/../txt/apigif.txt"));
  let apigif = data[Math.floor(Math.random() * data.length)];
  var hi = {} 
      hi.count = `${data.length}`
      hi.author = `𝐩𝐡𝐠𝐥𝐧𝐡`
      hi.url = apigif
  res.header("Content-type", "application/json; charset=utf-8")
  res.send(JSON.stringify(hi, null, 2))
  var hem = []
      hem.apigif = hi
  console.log(hem)
};
