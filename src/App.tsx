import { Route, Routes } from 'react-router-dom'
import LogIn from './component/auth/log.in'
import Dashboard from './component/dashboard'
import Setting from './component/setting'
import ProtectedRoute from './component/auth/ProtectedRoute'

function App() {
  return (
    <>
   <Routes>
        <Route    path="/" element={<LogIn/>} />
        <Route    path="*" element={<LogIn/>} />
        <Route      element={<ProtectedRoute/>} >
          <Route    path="/dashboard" element={<Dashboard/>} />
          <Route    path="/setting" element={<Setting/>} />
        </Route>  
  </Routes>
    </>
  );
}
export default App