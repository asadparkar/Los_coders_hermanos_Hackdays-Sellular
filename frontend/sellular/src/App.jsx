import './App.css'
import {Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Login from './Pages/Login';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='*' element={<div>error</div>}/>
    </Routes>
    </>
  )
}

export default App
