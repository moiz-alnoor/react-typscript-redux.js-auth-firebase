import { Route, Switch } from 'react-router-dom'
import LogIn from './component/auth/log.in'
import Dashboard from './component/dashboard'
import Setting from './component/setting'
import {ProtectedRoute} from './component/auth/protected.route'

function App() {
  return (
    <>
   <Switch>
        <ProtectedRoute   exact  path="/login" component={LogIn} />
        <ProtectedRoute   exact path="/dashboard" component={Dashboard} />
        <ProtectedRoute  exact  path="/setting" component={Setting} />
        <Route  exact  path="/" component={LogIn} />
        <Route  exact  path="*" component={LogIn} />
  </Switch>
    </>
  );
}
export default App