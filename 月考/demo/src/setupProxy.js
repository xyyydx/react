const body = require('body-parser')
const data = require('./mock/data')
module.exports = (app) => {
    app.use(body.json())
    app.post('/api/data', (req, res) => {
        res.send({
            data: data
        })
    })
    app.post('/api/search', (req, res) => {
        const { search } = req.body
        console.log(search)
        const newData = data.list.filter(item => item.title.includes(search))
        res.send({
            data: newData
        })
    })
    app.post('/api/friendSearch', (req, res) => {
        const { search } = req.body
        console.log(search)
        const newData = data.friendList.filter(item => item.title.includes(search))
        res.send({
            data: newData
        })
    })
    app.post('/api/friend', (req, res) => {
        res.send({
            data: data.friendList
        })
    })
    app.post('/api/say', (req, res) => {
        res.send({
            data: data.sayList
        })
    })

    app.post('/api/award', (req, res) => {
        res.send({
            data: data
        })
    })
}