import './App.css'
import {Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<div>home</div>} />
      <Route path='*' element={<div>error</div>}/>
    </Routes>
    </>
  )
}

export default App
