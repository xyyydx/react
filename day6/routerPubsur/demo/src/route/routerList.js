// 一级路由
import First from '../component/demoComponent/demoRouter/first'
import Shop from '../component/demoComponent/demoRouter/shop'
import Cookie from '../component/demoComponent/demoRouter/cookie'
import My from '../component/demoComponent/demoRouter/my'

const routerList = [
    {
        path: '/first',
        component: First
    },
    {
        path: '/shop',
        component: Shop
    },
    {
        path: '/cookie',
        component: Cookie
    },
    {
        path: '/my',
        component: My
    },
    {
        isRedirect: true,
        path: '/shop'
    }
]

export default routerList