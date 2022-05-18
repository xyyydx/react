const body = require('body-parser')
const data = require('./mock/data')
module.exports = (app) => {
    app.use(body.json())
    app.post('/api/data', (req, res) => {
        res.send({
            data
        })
    })
}