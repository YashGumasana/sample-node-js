const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, default: null },
    password: { type: String, default: null },
}, { timestamps: true })

const userModal = mongoose.model('user', userSchema);
module.exports = userModal 