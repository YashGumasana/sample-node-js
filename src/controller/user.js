const jwt = require('jsonwebtoken')
const userModal = require('../modal/user')

const login = async (req, res) => {
    try {
        let body = req.body
        let user = await new userModal(
            body
        ).save()

        console.log('user', user)

        const payload = {
            _id: user._id,
        }
        console.log('payload', payload)
        const token = jwt.sign(payload, 'jwt_secret', { expiresIn: "1d" })

        res.json({ Status: 200, message: 'Successfully login', body: { token: token }, error: {} })
    } catch (error) {
        console.log('Internal server error')
        res.json({ Status: 500, message: 'Internal server error', body: {}, error: {} })
    }
}

const getUser = async (req, res) => {
    try {
        let user = req.headers.user

        res.json({ Status: 200, message: 'Get User', body: { user: user }, error: {} })


    } catch (error) {
        console.log('Internal server error')
        res.json({ Status: 500, message: 'Internal server error', body: {}, error: {} })
    }
}

module.exports = { login, getUser }