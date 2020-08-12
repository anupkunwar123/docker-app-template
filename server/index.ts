import App from './app'
import http from 'http'
import mongoose from 'mongoose'

const PORT = process.env.PORT || 3030
import { DB_URL } from './app-config'
mongoose.connect(DB_URL, { useNewUrlParser: true })
const db = mongoose.connection

db.once('open', () => {
    App.listen(PORT, () => {
        console.log(`Listening at PORT: ${PORT}`)
    })
})