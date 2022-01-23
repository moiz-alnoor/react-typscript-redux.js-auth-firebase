import {Route, Redirect } from "react-router-dom"
import { useAppSelector } from '../../hook/app'
const isLog = localStorage.getItem('isLog')

// get isLog variable as boolain 
const getIsLog = (isLog:any) => {
  return typeof isLog == 'string' ? JSON.parse(isLog) : isLog;
}


//check if the user has auth
export const ProtectedRoute = ({ component: Component, ...rest }: any) => {
  const routeComponent = (props: any) => getIsLog(isLog) ? <Component {...props} /> : <Redirect to={{ pathname: "/" }} />
  return <Route {...rest} render={routeComponent} />
}


