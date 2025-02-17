import { loadConfig } from './app/common/helper/config.helper'
import express from 'express'
import http from 'http'
import errorHandler from './app/common/middleware/error-handler.middleware'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import { initPassport } from './app/common/services/passport-jwt.service'
import router from './app/routes'
import { connectToDB } from './app/common/services/database.service'
import cors from 'cors'

loadConfig()
const port = Number(process.env.PORT) ?? 3000

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())
app.use(morgan('dev'))
app.use(
    cors({
        origin: '*',
    })
)

const initApp = async () => {
    initPassport()

    connectToDB()

    app.use('/api', router)

    app.use(errorHandler)

    const httpServer = http.createServer(app)

    httpServer.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
}

void initApp()
