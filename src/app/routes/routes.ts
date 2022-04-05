
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Posts from "../pages/Posts";

export const publicRoutes = [
    {
        path: '/',
        Component: Home
    },
    {
        path: '/login',
        Component: Login
    },

    {
        path: '/signup',
        Component: Signup
    },
]

export const privateRoutes = [
    {
        path: '/posts',
        Component: Posts
    },
]