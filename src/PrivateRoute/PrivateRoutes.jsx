import React from 'react'
import { Navigate } from 'react-router-dom'
const PrivateRoutes = (props) => {
    let token=sessionStorage.getItem("accesstoken")   
return token ? props.children  : <Navigate to="/" />
}

export default PrivateRoutes