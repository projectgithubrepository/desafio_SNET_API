const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const connectToDataBase = require('./database')

const app = express()

connectToDataBase()

app.use(express.json())
app.use(cors())

app.use(routes)

app.listen(process.env.PORT, ()=> {
    console.log("It's working!!")
}) 

