import Mock from 'mockjs'
const data = Mock.mock({
    'list|5': [
        {
            "name": '@name',
            'id': '@id',
            'children|50': [
                {
                    "name": '@name(1)',
                    'img': '@image(100x100,@color,11111)',
                    'id': '@id'
                }
            ]
        }
    ]
})
Mock.mock('/api/list', () => {
    return {
        data: data.list
    }
})