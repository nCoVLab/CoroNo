const chalk = require('chalk')

// Global
exports.startLog = (port) => console.log(chalk.green('CoroNo Server is now on http://localhost:') + chalk.green.bold(port))
exports.refreshLog = (target) => console.log(chalk.gray('↺ Refreshed ' + target))

// Transmit
exports.redirectLog = (req, target) => console.log(chalk.bgBlue.white('⤻ Redirected[' + req.ip + '] ' + req.url + ' to ' + target))
exports.renderLog = (req) => console.log(chalk.bgGreen.white('⥵ Rendered[' + req.ip + '] ' + req.url))
exports.sendDataLog = (req) => console.log(chalk.bgGreen.white('⥱ Data Sent[' + req.ip + '] ' + req.url))
exports.reqDenyLog = (req) => console.log(chalk.bgRed.white('⇝ Access denied[' + req.ip + '] ' + req.url))

// Receive
exports.getDataLog = (req) => console.log(chalk.bgYellow.black('⥳ Data Received[' + req.ip + ']' + req.url + ' - ' + JSON.stringify(req.body)))
