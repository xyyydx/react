import React, { lazy } from 'react'
import First from '../component/router/first'
import My from '../component/router/my'
import { Navigate } from 'react-router-dom'

const LazyMy = lazy(() => import(/*webpackChunkName: 'my'*/ '../component/router/my'))
const LazyFirst = lazy(() => import(/*webpackChunkName: 'first'*/ '../component/router/first'))

const router = [
    {
        path: '/first',
        element: <LazyFirst />
    },
    {
        path: '/my',
        element: <LazyMy />
    }, {
        path: '/',
        element: <Navigate to='/my' />
    },
]
export default router