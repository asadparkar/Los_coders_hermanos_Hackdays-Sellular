import './App.css'
import {Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import NotFound from './components/NotFound.jsx';
import TimeLine from './components/TimeLine.jsx';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='register' element={<SignUp />} />
      <Route path='timeline' element={<TimeLine />} />
      <Route path='*' element={<NotFound />}/>
    </Routes>
    </>
  )
}

export default App
