import './App.css'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <>
      <Routes >
        <Route path="/" element={<Login />}></Route>
        {/* <Route path="/Login" element={<Login />}></Route> */}
        <Route path="/Signup" element={<Signup />}></Route>
      </Routes>
    </>
  )
}

export default App
