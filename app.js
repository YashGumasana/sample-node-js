const express = require('express');
const dotenv = require('dotenv');
dotenv.config()
const app = express();
const bodyParser = require('body-parser');
require('./src/connection/connection')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(require('./src/router/user'))


app.get('/', (req, res) => {
    res.send('server is on')
})

app.listen(5000, () => {
    console.log('port is listening a')
})