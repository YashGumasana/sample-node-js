const mongoose = require('mongoose');
const url = process.env.DB_URL
console.log('url', url)
const connect = mongoose.connect(url).then(() => {
    console.log('Database successfully connected')
}).catch((error) => {
    console.log('Something wengt wrong while connecting database', error)
})

module.exports = connect;