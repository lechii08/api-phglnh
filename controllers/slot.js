const { errorHandler } = require("../utils");

exports.slot = async (req, res, next) => {
const slotItems = ["🍇", "🍉", "🍎", "🍏", "7", "🍓", "🍒", "🍌", "🥝", "🥑", "🌽"];
var number = [];
for (i = 0; i < 3; i++) number[i] = slotItems[Math.floor(Math.random() * slotItems.length)];
var slot = [ number[0] , number[1] , number[2] ];
var image0 = (number[0] == "🍇") ? "https://i.imgur.com/HSceZWP.jpg" : (number[0] == "🍉") ? "https://i.imgur.com/5egfWrA.jpg" : (number[0] == "🍎") ? "https://i.imgur.com/ZvyVBvE.png" : (number[0] == "🍏") ? "https://i.imgur.com/XYGp2mu.jpg" : (number[0] == "7") ? "https://i.imgur.com/cNE7yjv.jpg" : (number[0] == "🍓") ? "https://i.imgur.com/ITK8mjo.jpg" : (number[0] == "🍒") ? "https://i.imgur.com/8yv9M2v.png" : (number[0] == "🍌") ? "https://i.imgur.com/4RTMb4S.jpg" : (number[0] == "🥝") ? "https://i.imgur.com/RXLjDoU.png" : (number[0] == "🥑") ? "https://i.imgur.com/Zm42PBT.png" : "https://i.imgur.com/XUFaC6i.jpg" ;
var image1 = (number[1] == "🍇") ? "https://i.imgur.com/HSceZWP.jpg" : (number[1] == "🍉") ? "https://i.imgur.com/5egfWrA.jpg" : (number[1] == "🍎") ? "https://i.imgur.com/ZvyVBvE.png" : (number[1] == "🍏") ? "https://i.imgur.com/XYGp2mu.jpg" : (number[1] == "7") ? "https://i.imgur.com/cNE7yjv.jpg" : (number[1] == "🍓") ? "https://i.imgur.com/ITK8mjo.jpg" : (number[1] == "🍒") ? "https://i.imgur.com/8yv9M2v.png" : (number[1] == "🍌") ? "https://i.imgur.com/4RTMb4S.jpg" : (number[1] == "🥝") ? "https://i.imgur.com/RXLjDoU.png" : (number[1] == "🥑") ? "https://i.imgur.com/Zm42PBT.png" : "https://i.imgur.com/XUFaC6i.jpg" ;
var image2 = (number[2] == "🍇") ? "https://i.imgur.com/HSceZWP.jpg" : (number[2] == "🍉") ? "https://i.imgur.com/5egfWrA.jpg" : (number[2] == "🍎") ? "https://i.imgur.com/ZvyVBvE.png" : (number[2] == "🍏") ? "https://i.imgur.com/XYGp2mu.jpg" : (number[2] == "7") ? "https://i.imgur.com/cNE7yjv.jpg" : (number[2] == "🍓") ? "https://i.imgur.com/ITK8mjo.jpg" : (number[2] == "🍒") ? "https://i.imgur.com/8yv9M2v.png" : (number[2] == "🍌") ? "https://i.imgur.com/4RTMb4S.jpg" : (number[2] == "🥝") ? "https://i.imgur.com/RXLjDoU.png" : (number[2] == "🥑") ? "https://i.imgur.com/Zm42PBT.png" : "https://i.imgur.com/XUFaC6i.jpg" ;
var images = [ image0 , image1 , image2 ];
var ketqua = (number[0] == number[1]) ? "thắng" : (number[1] == number[2]) ? "thắng" : (number[0] == number[1] == number[2]) ? "thắng" : (number[0] == number[2]) ? "thắng" : "thua";
var hi = {}
    hi.slot = slot.join(" | ")
    hi.ketqua = ketqua
    hi.image = images
    hi.Authors = `𝐩𝐡𝐠𝐥𝐧𝐡`
res.header("Content-type", "application/json; charset=utf-8")
res.send(JSON.stringify(hi, null, 2))
var he = {}
    he.game = hi
console.log(hi);
};  // https://i.imgur.com/ZvyVBvE.png táo
    // https://i.imgur.com/5egfWrA.jpg dưa hấu
    // https://i.imgur.com/HSceZWP.jpg nho
    // https://i.imgur.com/XYGp2mu.jpg táo xanh 
    // https://i.imgur.com/4RTMb4S.jpg chuối
    // https://i.imgur.com/ITK8mjo.jpg dâu
    // https://i.imgur.com/Zm42PBT.png bơ
    // https://i.imgur.com/RXLjDoU.png kiwi 
    // https://i.imgur.com/XUFaC6i.jpg ngô
    // https://i.imgur.com/8yv9M2v.png chery
    // https://i.imgur.com/cNE7yjv.jpg 777
