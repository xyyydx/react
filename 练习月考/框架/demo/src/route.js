import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Login = lazy(() => import(/*webpackChunkName:'login'*/ './component/login.js'))
const Err = lazy(() => import(/*webpackChunkName:'err'*/ './component/err.js'))

const routes = [
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/',
        element: <Navigate to='/login' />
    },
    {
        path: '*',
        element: <Err />
    }
]

export default routes