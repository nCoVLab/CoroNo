const path = require('path').resolve()
const logger = require('./logger')
const loader = require('./loader')
const crowler = require('./crowler')

const { renderFile } = require('ejs')

module.exports = (app) => {
  app.get('/', (req, res) => {
    const $ = crowler.kcdcBBS(($) => {
      logger.renderLog(req)
      renderFile(path + '/page/index.ejs', { ...req.query, loader, $ }, (err, str) => {
        if (err) { console.log(err) } else { res.send(str) }
      })
    })
  })
  app.get('/map', (req, res) => {
    logger.renderLog(req)
    renderFile(path + '/page/inMap.ejs', { ...req.query, loader }, (err, str) => {
      if (err) { console.log(err) } else { res.send(str) }
    })
  })
}
