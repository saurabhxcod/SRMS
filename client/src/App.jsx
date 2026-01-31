
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import StudentLayout from './components/StudentLayout'
import AdminLayout from './components/admin/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import AdminLogin from './pages/admin/AdminLogin'



const App = () => { 
  return (
    <>

      <Routes>
        <Route path="/" element={
          <StudentLayout>
            <Home/>
          </StudentLayout>
        }/> 
        <Route path="/login" element={
          <StudentLayout>
            <Login/>
          </StudentLayout>
          }/> 
s
        <Route path='/admin/login' element={<AdminLogin/>}/>

        <Route path="/admin/dashboard" element={
          <AdminLayout>
            <Dashboard/>
          </AdminLayout>

        } />
      </Routes>
      
    
    </>
  )
}

export default App;