const { errorHandler } = require("../utils");

exports.home = async (req, res, next) => {
  //res.json({"Authors":"𝐂𝐲𝐜𝐲𝐲 𝐱 𝐂𝐡𝐚𝐧𝐠𝐠"});
  var hi = {} 
      hi.ALLAPI = `65 loại`
     // hi.APITHIEU = `Thiếu các loại về FACE, INS, TIKTOK, UPLOAD, NETANH, SIM, TACHNEN, XSMB, XSMN`
      hi.AUTHOR = `𝐩𝐡𝐠𝐥𝐧𝐡`
      hi.WEBAPI = `https://tran-ngoc-phuong-linh.lcynthy3.repl.co`
      rhi.FBAUTHOR = `https://www.facebook.com/lechi08`
  res.header("Content-type", "application/json; charset=utf-8")
  res.send(JSON.stringify(hi, null, 2))
  var hem = []
      hem.home = hi
  
};
