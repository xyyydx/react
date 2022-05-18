const data = require('./mock/data')
const body = require('body-parser')
module.exports = (app) => {
    app.use(body.json())
    app.post('/api/login', (req, res) => {
        const { username, password } = req.body
        if (data.login.some(item => item.username === username && item.password === password)) {
            res.send({
                code: 200,
                success: '梦想'
            })
        }
        else {
            res.send({
                code: 404,
                success: '自杀'
            })
        }
    })
    app.post('/api/data', (req, res) => {
        const { current, pageSize, ipt } = req.body;
        if (ipt) {
            const newData = data.list.filter(item => {
                return item.name.includes(ipt)
            })
            res.send({
                data: newData.slice((current - 1) * pageSize, current * pageSize),
                total: newData.length
            })
        } else {
            res.send({
                data: data.list.slice((current - 1) * pageSize, current * pageSize),
                total: data.list.length
            })
        }
    })
    app.post('/api/add', (req, res) => {
        const { current, pageSize, value } = req.body
        data.list.unshift(value)
        res.send({
            data: data.list.slice((current - 1) * pageSize, current * pageSize),
            total: data.list.length
        })
    })
    app.post('/api/concat', (req, res) => {
        const { current, pageSize, id } = req.body

        data.list.map(item => {
            if (item.id === id.id) {
                Object.assign(item, id)
            }
            return item
        })
        res.send({
            data: data.list.slice((current - 1) * pageSize, current * pageSize),
            total: data.list.length
        })
    })
    app.post('/api/del', (req, res) => {
        const { current, pageSize, id } = req.body

        data.list.splice(data.list.findIndex((item) => item.id === id), 1)
        res.send({
            data: data.list.slice((current - 1) * pageSize, current * pageSize),
            total: data.list.length
        })
    })
}