const PORT = process.env.coronoPort || 8080

const cors = require('cors')
const path = require('path').resolve()
const express = require('express')
const logger = require('./functions/logger')
const webRender = require('./functions/webRender')
const apiRouter = require('./functions/apiRouter')

const app = express()
app.use(cors())
app.use('/src', express.static(path + '/src'))
app.listen(PORT, () => logger.startLog(PORT))

webRender(app)
apiRouter(app)

// 국가별로 다르게 해주면 좋을꺼 같습니다
// 페이지 나누면 됩니다.
// 파일 맨 마지막에 엔터 있어야 됩니다.
// 그 전파되는 경로하고 그런건 제가 할 수 잇음 데이터 집어넣는거 제가 해도 되죠?
// ejs안쓸껍니까? >PMH
// 포트는 딱봐도 환경변수 쓸꺼같고
// 이미 써져있네
// 구렇넹?
