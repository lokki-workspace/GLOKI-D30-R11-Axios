import React from 'react'
import Home from '../Components/Home'
import AddBook from '../Components/AddBook'
import { Navigate } from 'react-router-dom'
import Edit from '../Components/Edit'
const AppRoutes=[
    {
        path:"/",
        exact:true,
        element:<Home/>
    },
    {
        path:"/add",
        exact:true,
        element:<AddBook/>
    },

    {
        path:"/edit/:id",
        exact:true,
        element:<Edit/>
    },
    {
        path:"*",
        exact:true,
        element:<Navigate to="/"/>
    }

]
export default AppRoutes