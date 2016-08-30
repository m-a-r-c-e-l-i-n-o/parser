import 'source-map-support/register.js'
import Status from '../language/node/status.js'
import Path from 'path'
import Koa from 'koa'
import KoaSend from 'koa-send'
import GenerateReport from './generate-report.js'

let App = new Koa()

const PostDataParser = (ctx, next) => {
    return new Promise((resolve, reject) => {
        if (ctx.request.method == 'POST') {
            const data = []
            ctx.req.on('data', chunk => {
                data.push(chunk.toString())
            })
            ctx.req.on('end', () => {
                resolve(data)
            })
        }
    })
}

const AdHocRouter = async (ctx, next) => {
    if (ctx.request.method === 'GET') {
        if (ctx.path === '/') {
            ctx.path = 'index.html'
        }
        const found = await KoaSend(ctx, ctx.path, {
            root: Path.join(process.cwd(), 'dist/client')
        })
        ctx.status = (found ? 200 : 404)
        next()
    } else if (ctx.request.method === 'POST') {
        const postData = await next()
        if (ctx.path === '/generate-report') {
            const report = JSON.parse(postData)
            const parsedReport = GenerateReport(report.type, report.content)
            ctx.body = JSON.stringify(parsedReport)
            ctx.status = 200
        }
    }
}

const HandleListenEvent = (err) => {
    if (err) {
        return console.error(err.stack || err)
    }
    console.log(Status.SERVER_STARTED)
}

App.use(AdHocRouter)
App.use(PostDataParser)

const Server = App.listen(8080, HandleListenEvent)

export default Server
export { Server, AdHocRouter, HandleListenEvent }
