const { errorHandler } = require("../utils");

exports.vuatiengviet = async (req, res, next) => {
  data = JSON.parse(require("fs").readFileSync(__dirname + "/images/data/json/datawords.json"));
  let vuatiengviet = data[Math.floor(Math.random() * data.length)];
  var hi = {} 
      hi.author = `𝐩𝐡𝐠𝐥𝐧𝐡`
      hi.data =vuatiengviet.text
  res.header("Content-type", "application/json; charset=utf-8")
  res.send(JSON.stringify(hi, null, 2))
  var hem = []
      hem.vuatiengviet = hi
  console.log(hem)
};
