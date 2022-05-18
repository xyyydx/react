const Mock = require('mockjs')

const data = Mock.mock({
    'list|50': [
        {
            'id': '@id'
        }
    ],

    'login': [
        {
            username: '123',
            password: '123'
        }
    ]
})

module.exports = data