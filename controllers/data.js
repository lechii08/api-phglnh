exports.noitu = async (req, res, next) => {
const data = require("/images/data/json/data.json");
var word = req.query.word;
if(!word) return res.json({
  error: 'thiếu dữ liệu'
})
var words = word.split(' ')
if(word.split(' ').length !== 2) return res.json({
  error: 'sim ko hiểu...!'
})
var filter = data.filter(i => i.head == words[1])
if(filter.length == 0) return res.json({ 
  data: false,
  author: 'D-Jukie'
 })
const rdWords = filter[Math.floor(Math.random() * filter.length)]
return res.json({ 
  data: rdWords,
  author: 'D-Jukie'
 })
  }