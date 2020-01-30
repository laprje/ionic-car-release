require('dotenv').config()
const express = require('express')
const session = require('express-session')
const ctrl = require('./controller')
const massive = require('massive')
const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env

const app = express()

app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 10
    }
}))

//endpoints
    app.get('/api/cars', ctrl.getCars)
//

massive(CONNECTION_STRING).then(db => {
    console.log('Database Connected.')
    app.set('db', db)
    app.listen(SERVER_PORT, () => {
        console.log(`Listening on port ${SERVER_PORT}.`)
    })
})