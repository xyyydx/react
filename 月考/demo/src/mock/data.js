const Mock = require('mockjs')
const data = Mock.mock({
    'list|39': [
        {
            'id': '@id',
            'name': '@name',
            'title': '@title',
            'label|1': ['C++', '教程', '前端', '书籍', 'C语言', 'javascript', 'java'],
            'time|1-6': 0,
            'img': '@image(30x30,@color,梦)'
        }
    ],
    "sayList|99": [
        {
            'id': '@id',
            'title': '@title',
            'time': '@time',
            'img': '@image(30x30,@color,夏)',
            'name': '@name'
        }
    ],
    'friendList|39': [
        {
            'id': '@id',
            'name': '@name',
            'title': '@ctitle',
            'label|1': ['C++', '教程', '前端', '书籍', 'C语言', 'javascript', 'java'],
            'time|6-10': 0,
            'img': '@image(30x30,@color,梦)',
            'good': 0,
            'isGood': false
        }
    ],
    "awardLeftList|10": [
        {
            'id': '@id',
            'img': '@image(30x30,@color,总)',
            'name': '@ctitle',
            'integral|1999-3999': 0
        }
    ],
    "awardCenterList|10": [
        {
            'id': '@id',
            'img': '@image(30x30,@color,周)',
            'name': '@ctitle',
            'integral|9-99': 0
        }
    ],
    "awardRightList|10": [
        {
            'id': '@id',
            'img': '@image(30x30,@color,月)',
            'name': '@ctitle',
            'integral|99-199': 0
        }
    ]
})
module.exports = data