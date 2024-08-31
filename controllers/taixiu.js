const { errorHandler } = require("../utils");

exports.taixiu = async (req, res, next) => {
  let input = req.query.chon;
  let one = Math.ceil(Math.random() * 6);
  let two = Math.ceil(Math.random() * 6);
  let three = Math.ceil(Math.random() * 6);
  var one1 = (one == "1") ? "https://i.imgur.com/xtdfYkP.jpg" : (one == "2") ? "https://i.imgur.com/UwcX6bB.jpg" : (one == "3") ? "https://i.imgur.com/WdHxoVb.jpg" : (one == "4") ? "https://i.imgur.com/cEiy8oG.jpg" : (one == "5") ? "https://i.imgur.com/iAARfLh.jpg" : "https://i.imgur.com/vCncmlu.jpg";
  var two1 = (two == "1") ? "https://i.imgur.com/xtdfYkP.jpg" : (two == "2") ? "https://i.imgur.com/UwcX6bB.jpg" : (two == "3") ? "https://i.imgur.com/WdHxoVb.jpg" : (two == "4") ? "https://i.imgur.com/cEiy8oG.jpg" : (two == "5") ? "https://i.imgur.com/iAARfLh.jpg" : "https://i.imgur.com/vCncmlu.jpg";
  var three1 = (three == "1") ? "https://i.imgur.com/xtdfYkP.jpg" : (three == "2") ? "https://i.imgur.com/UwcX6bB.jpg" : (three == "3") ? "https://i.imgur.com/WdHxoVb.jpg" : (three == "4") ? "https://i.imgur.com/cEiy8oG.jpg" : (three == "5") ? "https://i.imgur.com/iAARfLh.jpg" : "https://i.imgur.com/vCncmlu.jpg";
  var images = [one1, two1, three1];
  let result = (one == two == three) ? "thua" : (one + two + three <= 10) ? (["xỉu", "xiu", "x"].includes(input)) ? "thắng" : "thua" : (["tài", "tai", "t"].includes(input)) ? "thắng" : "thua";
  let dices = (one == two && two == three) ? "3 nút bằng nhau" : (one + two + three <= 10) ? "xỉu" : "tài";
  var hi = {}
  hi.result = `${dices}`
  hi.input = input
  hi.dices = result
  hi.image = images
  hi.authors = `𝐩𝐡𝐠𝐥𝐧𝐡`
  res.header("Content-type", "application/json; charset=utf-8")
  res.send(JSON.stringify(hi, null, 2))
  var he = []
  he.taixiu = hi
  console.log(he)
};