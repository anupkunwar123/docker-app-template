import express from 'express'
import path from 'path'
import ReactDOMServer from 'react-dom/server'
import React from 'react'
import App from '../client/src/App'
import { getReactPage } from './utils'
import Contact from './model/contact'


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/hello', async (req, res) => {
    let result = await Contact.find({})
    res.json(result)
})

app.get('/new' , (req, res) => {
    res.send('new Api')
})
app.post('/login', (req, res) => {
    res.json(req.body)
})
app.get('/save', async (req, res) => {
    let contact = new Contact({ firstLine: 'Anup', secondLine: '`kunwar ' + new Date().getMilliseconds() })
    let result = await contact.save()
    return res.json(result)
})
app.get('*', (req, res) => {
    res.send(getReactPage(ReactDOMServer.renderToString(<App />)))
})




export default app