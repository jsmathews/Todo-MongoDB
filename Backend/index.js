const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/TodoRoutes')

app.use(express.json());
app.use(cors());

var dbConnectOptions = {
    dbName: 'todoApp',
}

mongoose.connect('mongodb://127.0.0.1:27017', dbConnectOptions)
    .then(() => { console.log('Mongodb Connected'); })
    .catch(error => console.log(error))

app.use(router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})