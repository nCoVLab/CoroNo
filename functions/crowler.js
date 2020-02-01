const cheerio = require('cheerio')
const superagent = require('superagent')

module.exports = (cb) => {
  superagent.get('https://www.cdc.go.kr/board/board.es?bid=0015')
    .set('User-Agent', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36')
    .then((res) => {
      const kcdc = cheerio.load(res.text)
      superagent.get('https://vlioo.devent.kr')
        .set('User-Agent', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36')
        .then((res) => {
          const vlioo = cheerio.load(res.text)
          superagent.get('http://uvirus.kr/static/data/infectionData.json')
            .set('User-Agent', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36')
            .then((res) => {
              const uvirus = JSON.parse(res.text)
              cb(kcdc, vlioo, uvirus)
            })
        })
    })
}
