import { useNavigate } from "react-router-dom"
import {Route, Outlet } from "react-router-dom"
import Login from "./log.in"
const isLog = localStorage.getItem('isLog')

// get isLog variable as boolain 
const getIsLog = (isLog:any) => {
  return typeof isLog == 'string' ? JSON.parse(isLog) : isLog
}

//check if the user is auth
 export const ProtectedRoute = () => isLog? <Outlet/> : <Login/>
 export default  ProtectedRoute 


