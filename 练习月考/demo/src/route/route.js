import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
// import First from '../component/first'
// import Wife from '../component/wife/wife'
// import Self from '../component/self'
// import Err from '../component/err'

// import Unripe from '../component/wife/children/unripe'
// import Over from '../component/wife/children/over'

const First = lazy(() => import(/*webpackChunkName:'First'*/ '../component/first.js'))
const Wife = lazy(() => import(/*webpackChunkName:'Wife'*/ '../component/wife/wife.js'))
const Self = lazy(() => import(/*webpackChunkName:'Self'*/ '../component/self.js'))

const Unripe = lazy(() => import(/*webpackChunkName:'Unripe'*/ '../component/wife/children/unripe.js'))
const Over = lazy(() => import(/*webpackChunkName:'Self'*/ '../component/wife/children/over.js'))

const Err = lazy(() => import(/*webpackChunkName:'Err'*/ '../component/err.js'))

const routes = [
    {
        path: '/first',
        element: <First />
    },
    {
        path: '/wife',
        element: <Wife />,
        children: [
            {
                path: '/wife/unripe',
                element: <Unripe />,
            },
            {
                path: '/wife/over',
                element: <Over />,
            },
            {
                path: '/wife',
                element: <Navigate to='/wife/over' />,
            },
        ]
    },
    {
        path: '/self',
        element: <Self />
    },
    {
        path: '/',
        element: <Navigate to='/first' />
    },
    {
        path: '*',
        element: <Err />
    },
]

export default routes