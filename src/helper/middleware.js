const jwt = require('jsonwebtoken')
const userModal = require('../modal/user')
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId

const middleware = async (req, res, next) => {
    try {
        // console.log('req', req.headers)
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'Unauthorized: No token provided' });
        }

        const token = authHeader.split(' ')[1];

        try {
            const decoded = jwt.verify(token, 'jwt_secret');
            console.log('decoded', decoded)
            const result = await userModal.findOne({ _id: new ObjectId(decoded._id) });
            console.log('result', result)
            if (!result) {
                console.log('first')
                return res.status(401).json({ error: 'Unauthorized: Invalid token' });
            }

            req.headers.user = result;
            return next();
        } catch (error) {
            console.log('second', error)

            return res.status(401).json({ error: 'Unauthorized: Invalid token' });
        }
    } catch (error) {
        console.log('Internal server error')
        res.json({ Status: 500, message: 'Internal server error', body: {}, error: {} })
    }
}

module.exports = middleware