const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/TodoRoutes')

app.use(express.json());
app.use(cors());

const mongoDbHostName = process.env.MONGODB_HOST_NAME || "localhost";

const mongoDbConnectionString = `mongodb://${mongoDbHostName}:27017`

const dbConnectOptions = {
    dbName: 'todoApp',
}

mongoose.connect(mongoDbConnectionString, dbConnectOptions)
    .then(() => { console.log('Mongodb Connected'); })
    .catch(error => console.log(error))

app.use(router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})