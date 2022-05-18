import { lazy } from "react";
import { Navigate } from 'react-router-dom'

const Wish = lazy(() => import(/*webpackChunkName:'wish'*/ '../component/wish/wish.js'))
const Friend = lazy(() => import(/*webpackChunkName:'wish'*/ '../component/friend/friend.js'))
const Say = lazy(() => import(/*webpackChunkName:'wish'*/ '../component/say/say.js'))
const Award = lazy(() => import(/*webpackChunkName:'wish'*/ '../component/award/award.js'))
const Err = lazy(() => import(/*webpackChunkName:'wish'*/ '../component/Err/err.js'))
const Login = lazy(() => import(/*webpackChunkName:'wish'*/ '../component/login/login.js'))

const routes = [
    {
        path: '/wish',
        element: <Wish />
    },
    {
        path: '/friend',
        element: <Friend />
    },
    {
        path: '/say',
        element: <Say />
    },
    {
        path: '/award',
        element: <Award />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/',
        element: <Navigate to='/wish' />
    },
    {
        path: '*',
        element: <Err />
    }
]
export default routes