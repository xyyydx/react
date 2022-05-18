const Mock = require('mockjs')
const data = Mock.mock({
    "list|99": [
        {
            name: '@name',
            title: '@title',
            city: '@city',
            id: '@id',
            "sex|1": ['男', '女'],
            'isGood': false
        }
    ],
    'login': [
        {
            username: '111',
            password: '111'
        }
    ]
})
module.exports = data