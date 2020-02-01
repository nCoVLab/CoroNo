const cheerio = require('cheerio')
const superagent = require('superagent')

exports.kcdcBBS = (cb) => {
  superagent.get('https://www.cdc.go.kr/board/board.es?bid=0015')
    .set('User-Agent', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36')
    .then((res) => { cb(cheerio.load(res.text)) })
}
