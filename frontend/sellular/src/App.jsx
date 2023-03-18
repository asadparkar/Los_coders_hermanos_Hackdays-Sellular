import './App.css'
import {Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='register' element={<SignUp />} />
      <Route path='*' element={<div>error</div>}/>
    </Routes>
    </>
  )
}

export default App
